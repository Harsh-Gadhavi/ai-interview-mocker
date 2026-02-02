# 🚀 Complete Deployment Guide - Step by Step

## Status
- ✅ Git repository initialized
- ✅ Code committed locally  
- ✅ GitHub repository exists
- ⏳ Need to install Vercel and deploy

---

## 📥 Step 1: Install Vercel CLI

**Run this command:**

```powershell
npm install -g vercel
```

**What to expect:**
- Takes 1-2 minutes
- Shows progress bars
- Ends with `added X packages`

**Verify installation:**

```powershell
vercel --version
```

Should show version number like `32.0.0` or similar.

---

## 🔐 Step 2: Git Sync (If Not Done Already)

**Run these commands one by one:**

```powershell
# Navigate to project
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"

# Sync with remote
git merge origin/main --allow-unrelated-histories --no-edit
git add .
git commit -m "Sync with remote"
git push origin main
```

**Expected output:**
- Merge shows files combined
- Commit shows insertions
- Push shows "Everything up-to-date" or new refs

---

## 🌐 Step 3: Deploy to Vercel

**First time setup:**

```powershell
# Login to Vercel
vercel login

# This opens a browser window for authentication
# It will ask you to choose authentication method:
# - GitHub (recommended) - Recommended
# - GitLab
# - Bitbucket
# - Email
```

**After login:**

```powershell
# Deploy to preview
vercel

# This asks questions, press Enter to accept defaults:
# - "Set up and deploy?" → y
# - "Project name?" → ai-interview-mocker (or press Enter)
# - "Which scope?" → Your account
# - "Linked to existing project?" → N
# - Continue with defaults
```

**Or deploy directly to production:**

```powershell
# Production deployment
vercel --prod
```

---

## 📊 Vercel Deployment Options

### Option A: Web Dashboard (Easiest)

1. Go to: https://vercel.com/new/git/import
2. Enter repo URL: `https://github.com/Harsh-Gadhavi/ai-interview-mocker`
3. Click "Import"
4. Add environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = your key
   - `CLERK_SECRET_KEY` = your key
5. Click "Deploy"
6. Wait 1-2 minutes for deployment

### Option B: CLI (What we're doing)

1. Install Vercel CLI
2. Run `vercel login`
3. Run `vercel --prod`
4. Add env vars later in dashboard

---

## ⚙️ Environment Variables Setup

After deployment, add Clerk keys:

1. Go to: https://vercel.com/dashboard
2. Click your project: `ai-interview-mocker`
3. Go to: Settings → Environment Variables
4. Add these variables:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | From clerk.com |
| `CLERK_SECRET_KEY` | From clerk.com |

5. Click "Save"
6. Redeploy: Settings → Deployments → "Redeploy" on latest commit

---

## 🎯 Complete Command Sequence

**Copy-paste this entire block into PowerShell:**

```powershell
# Step 1: Navigate
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"

# Step 2: Sync git (if needed)
git merge origin/main --allow-unrelated-histories --no-edit
git add .
git commit -m "Sync with remote"
git push origin main

# Step 3: Install Vercel
npm install -g vercel

# Step 4: Verify Vercel
vercel --version

# Step 5: Login
vercel login

# Step 6: Deploy to production
vercel --prod
```

**Run each command and wait for it to complete before running the next.**

---

## ✅ What Each Step Does

| Command | Does | Time |
|---------|------|------|
| `npm install -g vercel` | Installs Vercel CLI | 2 min |
| `vercel login` | Authenticates your account | 1 min |
| `vercel` | Deploys to preview | 3-5 min |
| `vercel --prod` | Deploys to production | 3-5 min |

---

## 🔍 Verify Deployment

After `vercel --prod` completes:

1. You'll see a URL like: `https://ai-interview-mocker.vercel.app`
2. Click the URL or open in browser
3. You should see the landing page
4. Test the sign-in flow
5. Test an interview session

---

## 🎉 Success Indicators

✅ `vercel --prod` shows: `✓ Production: ...`  
✅ Browser shows your app loading  
✅ Landing page appears  
✅ Can sign in/sign up  
✅ Can start interview  

---

## 🐛 Troubleshooting

### Problem: "vercel: not recognized"
```powershell
# Solution: Install it
npm install -g vercel
```

### Problem: "Login failed"
```powershell
# Try again
vercel login

# Or use email login by adding --email flag
vercel login --email your-email@example.com
```

### Problem: "Project not found"
```powershell
# Make sure you're in the right directory
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"

# Check package.json exists
Get-Item package.json
```

### Problem: Build fails on Vercel
- Check Node version: `node -v` (should be 18+)
- Check npm version: `npm -v` (should be 9+)
- Add environment variables in Vercel dashboard
- Redeploy after adding env vars

---

## 📱 After Deployment

### Your app is live at:
```
https://ai-interview-mocker.vercel.app
```

### Next steps:
1. ✅ Add Clerk environment variables
2. ✅ Test the live app
3. ✅ Share the URL with others
4. ✅ Monitor deployments on Vercel dashboard

---

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Your Project:** https://vercel.com/dashboard/ai-interview-mocker
- **GitHub Repo:** https://github.com/Harsh-Gadhavi/ai-interview-mocker
- **Your App:** https://ai-interview-mocker.vercel.app

---

## 📞 Getting Help

**If something goes wrong:**

1. Check the error message carefully
2. Look in "🐛 Troubleshooting" section above
3. Check Vercel logs: https://vercel.com/dashboard/projects
4. Read Vercel docs: https://vercel.com/docs

---

**You're ready! Start with the "Complete Command Sequence" above.** 🚀
