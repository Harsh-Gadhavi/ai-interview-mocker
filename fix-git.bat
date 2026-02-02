@echo off
REM Git Sync Fixer for AI Interview Mocker
REM This script resolves the "rejected" push error

setlocal enabledelayedexpansion

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║         Git Sync Fixer - Resolve Push Conflicts               ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

cd /d "c:\Users\harsh\nextjs React\ai-interview-mocker"

echo 📥 Fetching latest from GitHub...
git fetch origin main
echo ✅ Fetch complete
echo.

echo 🔀 Pulling changes...
git pull origin main --allow-unrelated-histories
echo ✅ Pull complete
echo.

echo 📝 Adding files...
git add -A
echo ✅ Files staged
echo.

echo 💾 Committing merge...
git commit -m "Merge remote changes and sync repositories"
echo ✅ Merge committed
echo.

echo 🚀 Pushing to GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo ⚠️  Push still failed. Trying force push...
    git push -f origin main
    if errorlevel 1 (
        echo ❌ Force push failed
        echo Please check your GitHub credentials
        pause
        exit /b 1
    )
    echo ✅ Force push successful
) else (
    echo ✅ Push successful
)

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║                 ✅ Sync Complete!                             ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.
echo 🌐 Your code is now on GitHub!
echo Repository: https://github.com/Harsh-Gadhavi/ai-interview-mocker
echo.

pause
