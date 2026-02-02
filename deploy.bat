@echo off
REM AI Interview Mocker - Git and Deployment Helper Script
REM This script helps push code to GitHub and deploy to Vercel

setlocal enabledelayedexpansion

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║   AI Interview Mocker - Git & Deployment Helper              ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

REM Get username
set /p GITHUB_USERNAME="Enter your GitHub username: "

if "!GITHUB_USERNAME!"=="" (
    echo ❌ GitHub username is required
    exit /b 1
)

echo.
echo 📝 Setting up Git configuration...
echo.

REM Set project directory
cd /d "c:\Users\harsh\nextjs React\ai-interview-mocker"

REM Configure git user
git config user.email "your-email@example.com"
git config user.name "Your Name"

echo ✅ Git configured

echo.
echo 📤 Checking git status...
git status

echo.
echo 🔗 Adding remote origin...

REM Remove existing remote if it exists
git remote remove origin 2>nul

REM Add new remote
git remote add origin https://github.com/!GITHUB_USERNAME!/ai-interview-mocker.git

if errorlevel 1 (
    echo ❌ Failed to add remote
    exit /b 1
)

echo ✅ Remote added

echo.
echo 📚 Preparing for push...
echo.

REM Rename branch to main if needed
git branch -M main

echo 🚀 Pushing code to GitHub...
echo.
echo Repository: https://github.com/!GITHUB_USERNAME!/ai-interview-mocker
echo.

git push -u origin main

if errorlevel 1 (
    echo ❌ Failed to push to GitHub
    echo.
    echo Make sure:
    echo 1. You have GitHub credentials set up
    echo 2. The repository exists at: https://github.com/!GITHUB_USERNAME!/ai-interview-mocker
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Code pushed to GitHub successfully!
echo.
echo 🌐 Repository: https://github.com/!GITHUB_USERNAME!/ai-interview-mocker
echo.

REM Ask if user wants to deploy
set /p DEPLOY="Deploy to Vercel now? (y/n): "

if /i "!DEPLOY!"=="y" (
    echo.
    echo 🚀 Starting Vercel deployment...
    echo.
    
    REM Check if vercel CLI is installed
    where vercel >nul 2>nul
    if errorlevel 1 (
        echo Installing Vercel CLI...
        npm install -g vercel
    )
    
    REM Deploy
    vercel
    
    if errorlevel 1 (
        echo ⚠️  Vercel deployment had issues
        echo You can deploy manually at: https://vercel.com/new/git/import
    ) else (
        echo.
        echo ✅ Deployed successfully!
    )
) else (
    echo.
    echo ℹ️  To deploy to Vercel later:
    echo    1. Visit: https://vercel.com/new/git/import
    echo    2. Paste: https://github.com/!GITHUB_USERNAME!/ai-interview-mocker
    echo    3. Add Clerk environment variables
    echo    4. Click Deploy
    echo.
)

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║                    🎉 All Done!                              ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.
echo 📝 Next steps:
echo    1. Go to: https://github.com/!GITHUB_USERNAME!/ai-interview-mocker
echo    2. Deploy to Vercel (automatic or manual)
echo    3. Add Clerk environment variables
echo    4. Your app will be live!
echo.

pause
