# 🚀 Quick Deployment Guide - AI Interview Mocker

## ⚡ Fast Track Deployment (5 Minutes)

### Step 1: Install Vercel CLI
Copy and paste this command in PowerShell:

```powershell
npm install -g vercel
```

**Wait for it to complete (you'll see "added X packages")**

---

### Step 2: Navigate to Project
```powershell
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"
```

---

### Step 3: Login to Vercel
```powershell
vercel login
```

**This will open your browser. Sign in or create a Vercel account.**

---

### Step 4: Deploy to Production
```powershell
vercel --prod
```

**When prompted:**
- **"Set up and deploy?"** → Press `Y` and Enter
- **"Which scope?"** → Select your personal account
- **"Link to existing project?"** → Press `N` (unless you already linked it)
- **"Project name?"** → Press Enter to accept `ai-interview-mocker`
- **"Directory containing code?"** → Press Enter to accept `.`
- **"Want to override the settings?"** → Press `N`

**Wait 2-5 minutes for deployment to complete.**

You'll see something like:
```
✅ Production: 
```

---

## Step 5: Configure Environment Variables (IMPORTANT!)

### In Vercel Dashboard:
1. Go to: **
2. Click: **ai-interview-mocker** project
3. Go to: **Settings** → **Environment Variables**
4. Add two variables:

| Variable | Value | Where to get it |
|----------|-------|-----------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | (your key) |  → Settings → API Keys → Copy NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY |
| `CLERK_SECRET_KEY` | (your key) |  → Settings → API Keys → Copy CLERK_SECRET_KEY |

5. Click: **Save**
6. Click: **Redeploy** (to apply new environment variables)

---

## Step 6: Test Your App

Visit: **

✅ Should show: Landing page with "Sign Up" button
✅ Click "Sign Up" → Should redirect to Clerk sign-up
✅ Create account → Should redirect to dashboard
✅ Click "Start Interview" → Should let you select role and level

---

## 🆘 Troubleshooting

### Issue: "vercel: The term 'vercel' is not recognized"
**Solution:** Run this first:
```powershell
npm install -g vercel
```

Then wait 30 seconds and try `vercel login` again.

---

### Issue: "Error: Not authenticated"
**Solution:** Run:
```powershell
vercel login
```

And complete the browser authentication.

---

### Issue: "Error: Scope not found"
**Solution:** Run:
```powershell
vercel link
```

This will link your local project to Vercel.

---

### Issue: App shows blank page or 404
**Solution:** You need to add environment variables! See Step 5 above.

---

## ✅ Verification Checklist

- [ ] `npm install -g vercel` completed successfully
- [ ] `vercel login` completed (you logged in)
- [ ] `vercel --prod` deployment completed (you saw production URL)
- [ ] Environment variables added in Vercel dashboard
- [ ] App is live at 
- [ ] Can sign up / sign in with Clerk
- [ ] Can start an interview and see questions
- [ ] Dashboard loads and shows stats

---

## 📱 What to Test on Live App

1. **Visit the URL:** 
2. **Sign Up** with email
3. **Select a Job Role** (Frontend Developer, Backend Dev, etc.)
4. **Select Experience Level** (Beginner, Intermediate, etc.)
5. **Start Interview** and answer a question
6. **Check Dashboard** for statistics

---

## 🎯 Success Indicators

### Your app is working correctly if:
- ✅ Landing page loads with hero section
- ✅ Sign up/sign in buttons work
- ✅ After login, you see the interview selector
- ✅ Interview mode records speech responses
- ✅ Dashboard shows your interview statistics
- ✅ All styling is dark theme (not broken CSS)

---

## 🔗 Useful Links

- **Vercel Dashboard:** 
- **Clerk Dashboard:** 
- **Your App:** 
- **GitHub Repo:** 

---

## 📝 Notes

- First deployment takes 3-5 minutes
- Subsequent deployments take 1-2 minutes
- Environment variables must be set for the app to work
- If you make code changes, just run `vercel --prod` again to redeploy

**That's it! Your app will be live in minutes! 🎉**
