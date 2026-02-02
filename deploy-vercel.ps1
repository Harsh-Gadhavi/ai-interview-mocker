#!/usr/bin/env pwsh
# Vercel Deployment Script for AI Interview Mocker

Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Vercel Deployment Script - AI Interview Mocker             ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check Node and npm
Write-Host "✓ Checking Node.js and npm..." -ForegroundColor Yellow
$nodeVersion = node -v
$npmVersion = npm -v
Write-Host "  Node: $nodeVersion" -ForegroundColor Green
Write-Host "  npm: $npmVersion" -ForegroundColor Green
Write-Host ""

# Step 2: Navigate to project
Write-Host "✓ Navigating to project..." -ForegroundColor Yellow
Set-Location "c:\Users\harsh\nextjs React\ai-interview-mocker"
Write-Host "  Location: $(Get-Location)" -ForegroundColor Green
Write-Host ""

# Step 3: Check if package.json exists
if (-not (Test-Path "package.json")) {
    Write-Host "❌ package.json not found!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ package.json found" -ForegroundColor Green
Write-Host ""

# Step 4: Install Vercel CLI
Write-Host "✓ Installing/Checking Vercel CLI..." -ForegroundColor Yellow
$vercelCheck = Get-Command vercel -ErrorAction SilentlyContinue
if ($null -eq $vercelCheck) {
    Write-Host "  Installing vercel globally..." -ForegroundColor Cyan
    npm install -g vercel
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install vercel" -ForegroundColor Red
        exit 1
    }
}
Write-Host "✓ Vercel CLI ready" -ForegroundColor Green
Write-Host ""

# Step 5: Verify Vercel version
$vercelVersion = vercel --version 2>&1
Write-Host "  Vercel version: $vercelVersion" -ForegroundColor Green
Write-Host ""

# Step 6: Login
Write-Host "✓ Logging in to Vercel..." -ForegroundColor Yellow
Write-Host "  Your browser will open for authentication..." -ForegroundColor Cyan
vercel login

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Login failed" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Login successful" -ForegroundColor Green
Write-Host ""

# Step 7: Deploy
Write-Host "✓ Starting deployment..." -ForegroundColor Yellow
Write-Host "  This may take 2-5 minutes..." -ForegroundColor Cyan
Write-Host ""

# Ask user if they want production deployment
$deployType = Read-Host "Deploy to production? (y/n)"

if ($deployType -eq "y" -or $deployType -eq "Y") {
    Write-Host ""
    Write-Host "🚀 Deploying to PRODUCTION..." -ForegroundColor Cyan
    vercel --prod
} else {
    Write-Host ""
    Write-Host "🚀 Deploying to PREVIEW..." -ForegroundColor Cyan
    vercel
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                  ✅ Deployment Complete!                     ║" -ForegroundColor Green
Write-Host "╚═══════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

Write-Host "📝 Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Go to: https://vercel.com/dashboard" -ForegroundColor Cyan
Write-Host "  2. Click on: ai-interview-mocker project"
Write-Host "  3. Go to: Settings → Environment Variables"
Write-Host "  4. Add these variables:"
Write-Host "     - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
Write-Host "     - CLERK_SECRET_KEY"
Write-Host "  5. Redeploy the project"
Write-Host ""

Write-Host "🔗 Your App URL: https://ai-interview-mocker.vercel.app" -ForegroundColor Cyan
Write-Host ""

Read-Host "Press Enter to exit"
