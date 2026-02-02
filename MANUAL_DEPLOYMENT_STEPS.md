# 🔧 Step-by-Step Git Sync and Deployment Commands

## Run these commands in PowerShell one by one:

# Step 1: Navigate to project
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"

# Step 2: Fetch latest from GitHub
git fetch origin main

# Step 3: Merge remote changes with yours
git merge origin/main --allow-unrelated-histories --no-edit

# Step 4: If merge has conflicts, resolve by keeping your files:
git checkout --ours .
git add .
git commit -m "Resolve merge conflicts - keep local version"

# Step 5: Push to GitHub
git push origin main

# Step 6: Verify push was successful
git log --oneline -3

# ==========================================
# DEPLOYMENT TO VERCEL
# ==========================================

# Step 7: Check if Vercel is installed
vercel --version

# If vercel is not installed, run:
npm install -g vercel

# Step 8: Login to Vercel (this opens browser)
vercel login

# Step 9: Deploy the project
vercel

# Step 10: For production deployment
vercel --prod

# ==========================================
# ALTERNATIVE: Force Push (if all else fails)
# ==========================================

# If the above doesn't work, force push your code:
git push -f origin main

