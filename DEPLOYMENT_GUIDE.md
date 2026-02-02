# 🚀 GitHub & Deployment Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Click "Create a new repository"
3. Enter these details:
   - **Repository name**: `ai-interview-mocker`
   - **Description**: AI-powered mock interview practice platform
   - **Public**: Yes (or Private if preferred)
   - **Add .gitignore**: Skip (already have one)
   - **Add license**: MIT
4. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repo, you'll see commands to push. Run these:

```bash
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/ai-interview-mocker.git

# Rename branch to main (optional but recommended)
git branch -M main

# Push code
git push -u origin main
```

**Replace YOUR_USERNAME with your actual GitHub username!**

## Step 3: Deploy to Vercel (Easy 1-Click Deploy)

### Option A: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"
vercel
```

Follow the prompts:
- Confirm project settings
- Set production domain
- Watch deployment progress

### Option B: Deploy via Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your GitHub repo URL: `https://github.com/YOUR_USERNAME/ai-interview-mocker`
4. Select repository
5. Click "Import"
6. Configure environment variables:
   - Add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Add `CLERK_SECRET_KEY`
7. Click "Deploy"

### Option C: Deploy to Other Platforms

- **Netlify**: Connect your GitHub repo at https://app.netlify.com/start
- **Railway**: Go to https://railway.app and create new project
- **Render**: Go to https://render.com and create new service
- **AWS Amplify**: Use AWS Console to connect your repo

## Step 4: Configure Clerk for Production

1. Go to https://clerk.com/docs/deployment/deployments
2. Update your Clerk settings for production domain
3. Add your deployed domain to allowed origins
4. Update environment variables on your hosting platform

## Full Command Sequence

Copy-paste ready:

```bash
# Navigate to project
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"

# Check git status
git status

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ai-interview-mocker.git

# Push to GitHub
git push -u origin main

# Deploy to Vercel
vercel
```

## After Deployment

1. ✅ Your app will be live at: `https://ai-interview-mocker.vercel.app`
2. ✅ GitHub will have your code backed up
3. ✅ Automatic deployments on git push
4. ✅ Environment variables secured

## Verify Deployment

- Visit your Vercel deployment URL
- Test sign-up and interview flow
- Check browser console for errors
- Verify all features work

## Troubleshooting

**Issue**: Remote already exists
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/ai-interview-mocker.git
```

**Issue**: "fatal: not a git repository"
```bash
git init
git add -A
git commit -m "Initial commit"
```

**Issue**: Vercel deployment fails
- Check Node version: `node -v` (should be 18+)
- Check env vars are set
- Check build logs on Vercel dashboard

## Continuous Deployment

After first deployment:
1. Make changes locally
2. Commit: `git commit -am "Your message"`
3. Push: `git push`
4. Vercel automatically rebuilds and deploys!

## Environment Variables for Production

On Vercel dashboard, add:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_live_xxxxx
CLERK_SECRET_KEY = sk_live_xxxxx
```

Get these from https://dashboard.clerk.com after setting up production instance

## Success Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project deployed
- [ ] Domain configured
- [ ] Clerk keys updated
- [ ] Environment variables set
- [ ] Features tested
- [ ] App is live! 🎉

---

**Next**: Your app will be live and accessible worldwide!
