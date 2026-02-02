# 🚀 SKIP LOCAL BUILD - Deploy Directly to Vercel

You don't need to build locally! Vercel does it automatically.

## Just Run This:

```powershell
npx -y vercel --prod
```

When prompted:
- "Set up and deploy?" → Type `Y` and Enter
- Press Enter for all other defaults
- Type `N` for "Link to existing project"

**Done!** Vercel will build and deploy automatically in 3-5 minutes.

---

## After Deployment:

1. Go to: https://vercel.com/dashboard
2. Click: ai-interview-mocker project → Settings → Environment Variables
3. Add your Clerk keys (from https://clerk.com/dashboard)
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Click Redeploy

**Your app will be live at: https://ai-interview-mocker.vercel.app**
