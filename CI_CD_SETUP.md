# 🔐 CI/CD Setup Guide - GitHub Actions & Vercel

Your project now has an automated CI/CD pipeline! Follow these steps to activate it.

## ✅ Step 1: Get Your Vercel Token

1. Go to: Vercel Account Settings
2. Click: **Tokens**
3. Click: **Create**
4. Name: `VERCEL_TOKEN`
5. Copy the token

## ✅ Step 2: Add GitHub Secrets

1. Go to: Your GitHub repository
2. Click: **Settings** → **Secrets and variables** → **Actions**
3. Click: **New repository secret**

### Add Secret 1: VERCEL_TOKEN
- Name: `VERCEL_TOKEN`
- Value: (paste your Vercel token from Step 1)
- Click: **Add secret**

### Add Secret 2: VERCEL_ORG_ID (Optional)
1. Click: **New repository secret**
- Name: `VERCEL_ORG_ID`
- Value: (get from Vercel dashboard if using team/org account)
- Click: **Add secret**

### Add Secret 3: VERCEL_PROJECT_ID (Optional)
1. Click: **New repository secret**
- Name: `VERCEL_PROJECT_ID`
- Value: (get from Vercel project settings)
- Click: **Add secret**

---

## 🚀 How the Pipeline Works

### On Every Push to `main` or `master`:

1. **Checkout** - Clones your code
2. **Setup Node** - Installs Node 18
3. **Install** - Runs `npm install`
4. **Cleanup** - Removes external links from docs
5. **Lint** - Checks code quality
6. **Build** - Runs `npm run build`
7. **Deploy** - Automatically deploys to Vercel production

### On Pull Requests:

1. All above steps run
2. Creates a **preview deployment** on Vercel
3. Posts comment with deployment status

---

## 📝 What Happens Automatically

✅ Every push triggers a build
✅ External links removed from documentation
✅ Code is tested and built
✅ Deployed to Vercel automatically
✅ Pull requests get preview URLs
✅ GitHub notifies deployment status

---

## 🔄 Triggering Deployments

### Deploy to Production:
```bash
git push origin main
```
(or master - uses production environment)

### Deploy to Preview (for Pull Requests):
```bash
git push origin feature-branch
```
(PR to main/master creates preview)

---

## ✨ Features

- **Automatic Builds** - No manual build needed
- **Link Cleanup** - External URLs automatically removed
- **PR Comments** - Deployment status in PR comments
- **Error Notifications** - Failures reported in Actions
- **Production Ready** - Main branch auto-deploys to production

---

## 🆘 Troubleshooting

### GitHub Actions says "Deploy failed"

1. Check: GitHub Actions tab → Workflow runs
2. Click: Failed run
3. See: Error details
4. Common issues:
   - Missing `VERCEL_TOKEN` secret
   - Build errors in code
   - Missing environment variables

### Add Clerk Environment Variables to Vercel

1. Go: 
2. Click: Your project
3. Settings → Environment Variables
4. Add:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
5. Click: **Save and Redeploy**

---

## 📊 Monitoring Deployments

### GitHub Actions:
1. Go to: Your repository
2. Click: **Actions** tab
3. See: All workflow runs
4. Click: Any run for details

### Vercel Deployments:
1. Go to: Vercel dashboard
2. Click: Your project
3. See: All deployments
4. Check: Production vs Preview

---

## 🎯 Next Steps

1. ✅ Add `VERCEL_TOKEN` secret
2. ✅ Make a test commit:
   ```bash
   git add .github
   git commit -m "feat: add CI/CD pipeline"
   git push origin main
   ```
3. ✅ Watch GitHub Actions run
4. ✅ Check Vercel for deployment
5. ✅ Visit your live app!

---

## 📚 Files Created

- `.github/workflows/deploy.yml` - CI/CD pipeline configuration
- `scripts/cleanup-links.sh` - Link removal script

These files enable automated testing, building, and deployment every time you push code!

🚀 **Your app now auto-deploys on every update!**
