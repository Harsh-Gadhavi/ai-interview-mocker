@echo off
REM AI Interview Mocker - Vercel Deployment Batch Script

setlocal enabledelayedexpansion

cls
echo.
echo ======================================================================
echo      Vercel Deployment Script - AI Interview Mocker
echo ======================================================================
echo.

REM Change to project directory
cd /d "c:\Users\harsh\nextjs React\ai-interview-mocker"
if errorlevel 1 (
    echo ERROR: Could not navigate to project directory
    pause
    exit /b 1
)

echo Step 1: Checking Node.js installation...
where node >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed
    pause
    exit /b 1
)
node --version
echo SUCCESS: Node.js is installed
echo.

echo Step 2: Installing Vercel CLI globally...
call npm install -g vercel
if errorlevel 1 (
    echo ERROR: Failed to install Vercel CLI
    pause
    exit /b 1
)
echo SUCCESS: Vercel CLI installed
echo.

echo Step 3: Verifying Vercel installation...
call vercel --version
if errorlevel 1 (
    echo.
    echo IMPORTANT: Vercel CLI installed but may need a moment to be available.
    echo You may need to:
    echo   1. Close and reopen PowerShell
    echo   2. Restart your computer (if installation took longer)
    echo   3. Or run: vercel login (directly in PowerShell)
    echo.
    pause
    exit /b 0
)
echo SUCCESS: Vercel CLI is ready
echo.

echo ======================================================================
echo      Ready to Deploy!
echo ======================================================================
echo.
echo Next steps:
echo   1. Run in PowerShell: vercel login
echo   2. Then run: vercel --prod
echo   3. When done, add environment variables in Vercel dashboard
echo.
echo More info: See DEPLOY_NOW.md or COPY_PASTE_COMMANDS.txt
echo.

pause
