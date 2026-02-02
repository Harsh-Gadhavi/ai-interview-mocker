# NPX Deployment Method - Works Without Global Install

Since `npm install -g vercel` is having installation issues, here's an alternative that works:

## ✅ Method: Use npx (Comes with npm, no install needed)

### Step 1: Login to Vercel (one time)

Open PowerShell and run:

```powershell
npx -y vercel login
```

This will:
- Ask you to authenticate
- Open your browser (if needed)
- Save your credentials locally

### Step 2: Deploy to Production

```powershell
npx -y vercel --prod
```

When prompted:
- "Set up and deploy?" → Type: `Y`
- "Which scope?" → Press Enter
- "Link to existing project?" → Type: `N`
- "What's your project's name?" → Press Enter
- "In which directory is your code?" → Press Enter
- "Want to override the settings?" → Type: `N`

**Wait 3-5 minutes for deployment**

You'll see:
```
✓ Production: https://ai-interview-mocker.vercel.app
```

---

## Why npx?

- ✅ No global installation needed
- ✅ Always up-to-date version
- ✅ Works if npm is installed (and it is!)
- ✅ No PATH issues
- ✅ One command at a time

---

## Full Command Sequence

Copy and paste these one at a time:

```powershell
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"
```

```powershell
npx -y vercel login
```

Then (after login completes):

```powershell
npx -y vercel --prod
```

---

## After Deployment

1. **Get your Clerk keys** from: https://clerk.com/dashboard
2. **Add to Vercel**: https://vercel.com/dashboard → ai-interview-mocker → Settings → Environment Variables
3. **Add variables:**
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = your key
   - `CLERK_SECRET_KEY` = your key
4. **Click Redeploy**

---

## Test

Visit: https://ai-interview-mocker.vercel.app

Done! 🎉
