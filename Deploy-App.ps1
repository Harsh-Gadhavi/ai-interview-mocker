#!/usr/bin/env pwsh
# Complete Deployment Script for AI Interview Mocker
# This script handles Vercel CLI installation and deployment

param(
    [switch]$Force
)

# Colors
$Green = [System.ConsoleColor]::Green
$Yellow = [System.ConsoleColor]::Yellow
$Red = [System.ConsoleColor]::Red
$Cyan = [System.ConsoleColor]::Cyan

function Write-Success { Write-Host $args -ForegroundColor $Green }
function Write-Warning { Write-Host $args -ForegroundColor $Yellow }
function Write-Error-Custom { Write-Host $args -ForegroundColor $Red }
function Write-Info { Write-Host $args -ForegroundColor $Cyan }

# Clear screen
Clear-Host

Write-Info "`n╔════════════════════════════════════════════════════════════╗"
Write-Info "║     AI Interview Mocker - Complete Deployment Script      ║"
Write-Info "╚════════════════════════════════════════════════════════════╝`n"

# Step 1: Navigate to project
Write-Warning "[Step 1/5] Navigating to project directory..."
$projectPath = "c:\Users\harsh\nextjs React\ai-interview-mocker"
if (-not (Test-Path $projectPath)) {
    Write-Error-Custom "ERROR: Project directory not found at $projectPath"
    exit 1
}
Set-Location $projectPath
Write-Success "✓ In project: $(Get-Location)`n"

# Step 2: Check npm
Write-Warning "[Step 2/5] Checking npm installation..."
try {
    $npmVersion = npm --version 2>&1
    Write-Success "✓ npm is installed: $npmVersion`n"
} catch {
    Write-Error-Custom "ERROR: npm not found. Please install Node.js first."
    exit 1
}

# Step 3: Install Vercel globally
Write-Warning "[Step 3/5] Installing Vercel CLI globally..."
Write-Info "This may take 1-3 minutes..."
try {
    & npm install -g vercel 2>&1 | Out-Null
    Write-Success "✓ Vercel CLI installation started`n"
    Start-Sleep -Seconds 3
} catch {
    Write-Error-Custom "ERROR: Failed to install Vercel"
    exit 1
}

# Step 4: Try to verify Vercel
Write-Warning "[Step 4/5] Verifying Vercel installation..."
$vercelFound = $false
for ($i = 1; $i -le 5; $i++) {
    try {
        $vercelVersion = & vercel --version 2>&1
        if ($vercelVersion) {
            Write-Success "✓ Vercel CLI ready: $vercelVersion`n"
            $vercelFound = $true
            break
        }
    } catch {
        Write-Info "Checking... (attempt $i/5)"
        Start-Sleep -Seconds 2
    }
}

if (-not $vercelFound) {
    Write-Warning "⚠ Vercel CLI may not be immediately available"
    Write-Info "Using npx as fallback...`n"
}

# Step 5: Deploy
Write-Warning "[Step 5/5] Starting deployment..."
Write-Info "`nYou will need to:`n"
Write-Info "  1. Authenticate with Vercel (browser will open)"
Write-Info "  2. Answer deployment questions"
Write-Info "  3. Wait for deployment to complete (3-5 minutes)`n"

Write-Warning "Starting deployment process...`n"

# Try vercel command first, then fallback to npx
if ($vercelFound) {
    Write-Info "Using: vercel --prod`n"
    & vercel --prod
} else {
    Write-Info "Using: npx vercel --prod`n"
    & npx -y vercel --prod
}

$deploymentResult = $?

Write-Info "`n`n"

if ($deploymentResult) {
    Write-Info "╔════════════════════════════════════════════════════════════╗"
    Write-Success "║            ✓ DEPLOYMENT COMPLETED SUCCESSFULLY            ║"
    Write-Info "╚════════════════════════════════════════════════════════════╝`n"
    
    Write-Success "Your app is now LIVE!`n"
    
    Write-Warning "NEXT STEPS:`n"
    Write-Info "1. Go to: https://vercel.com/dashboard"
    Write-Info "2. Click: ai-interview-mocker project"
    Write-Info "3. Go to: Settings > Environment Variables"
    Write-Info "4. Add these variables (get from https://clerk.com/dashboard):`n"
    Write-Info "   Name: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
    Write-Info "   Value: (your publishable key)`n"
    Write-Info "   Name: CLERK_SECRET_KEY"
    Write-Info "   Value: (your secret key)`n"
    Write-Info "5. Click Redeploy`n"
    Write-Warning "6. Then test at: https://ai-interview-mocker.vercel.app`n"
} else {
    Write-Error-Custom "DEPLOYMENT MAY HAVE FAILED"
    Write-Warning "Please check the output above for any error messages."
}

Write-Info "Script complete. Press Enter to exit."
Read-Host | Out-Null
