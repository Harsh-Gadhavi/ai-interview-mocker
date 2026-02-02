#!/usr/bin/env pwsh
# AI Interview Mocker - Git and Deployment Helper Script

Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   AI Interview Mocker - Git & Deployment Helper              ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Get GitHub username
$GitHubUsername = Read-Host "Enter your GitHub username"

if ([string]::IsNullOrEmpty($GitHubUsername)) {
    Write-Host "❌ GitHub username is required" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📝 Setting up Git configuration..." -ForegroundColor Yellow
Write-Host ""

# Navigate to project
Set-Location "c:\Users\harsh\nextjs React\ai-interview-mocker"

# Configure git user
git config user.email "your-email@example.com"
git config user.name "Your Name"

Write-Host "✅ Git configured" -ForegroundColor Green

Write-Host ""
Write-Host "📤 Checking git status..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "🔗 Adding remote origin..." -ForegroundColor Yellow

# Remove existing remote if it exists
git remote remove origin 2>$null

# Add new remote
git remote add origin "https://github.com/$GitHubUsername/ai-interview-mocker.git"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to add remote" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Remote added" -ForegroundColor Green

Write-Host ""
Write-Host "📚 Preparing for push..." -ForegroundColor Yellow
Write-Host ""

# Rename branch to main
git branch -M main

Write-Host "🚀 Pushing code to GitHub..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Repository: https://github.com/$GitHubUsername/ai-interview-mocker" -ForegroundColor Cyan
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
    Write-Host ""
    Write-Host "Make sure:" -ForegroundColor Yellow
    Write-Host "1. You have GitHub credentials set up"
    Write-Host "2. The repository exists at: https://github.com/$GitHubUsername/ai-interview-mocker"
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "✅ Code pushed to GitHub successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Repository: https://github.com/$GitHubUsername/ai-interview-mocker" -ForegroundColor Cyan
Write-Host ""

# Ask if user wants to deploy
$Deploy = Read-Host "Deploy to Vercel now? (y/n)"

if ($Deploy -eq "y" -or $Deploy -eq "Y") {
    Write-Host ""
    Write-Host "🚀 Starting Vercel deployment..." -ForegroundColor Yellow
    Write-Host ""
    
    # Check if vercel CLI is installed
    $VercelCommand = Get-Command vercel -ErrorAction SilentlyContinue
    
    if ($null -eq $VercelCommand) {
        Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
        npm install -g vercel
    }
    
    # Deploy
    vercel
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "⚠️  Vercel deployment had issues" -ForegroundColor Yellow
        Write-Host "You can deploy manually at: https://vercel.com/new/git/import" -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "✅ Deployed successfully!" -ForegroundColor Green
    }
} else {
    Write-Host ""
    Write-Host "ℹ️  To deploy to Vercel later:" -ForegroundColor Cyan
    Write-Host "   1. Visit: https://vercel.com/new/git/import"
    Write-Host "   2. Paste: https://github.com/$GitHubUsername/ai-interview-mocker"
    Write-Host "   3. Add Clerk environment variables"
    Write-Host "   4. Click Deploy"
    Write-Host ""
}

Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                    🎉 All Done!                              ║" -ForegroundColor Green
Write-Host "╚═══════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Go to: https://github.com/$GitHubUsername/ai-interview-mocker" -ForegroundColor Cyan
Write-Host "   2. Deploy to Vercel (automatic or manual)"
Write-Host "   3. Add Clerk environment variables"
Write-Host "   4. Your app will be live!"
Write-Host ""

Read-Host "Press Enter to exit"
