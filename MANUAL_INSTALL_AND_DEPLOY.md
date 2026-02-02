# 🔧 MANUAL INSTALLATION & DEPLOYMENT GUIDE

Since the terminal display is limited, please follow these steps manually in PowerShell.

---

## ✅ STEP 1: Install Vercel CLI

Open PowerShell **AS ADMINISTRATOR** and run:

```powershell
npm install -g vercel
```

**Important:** 
- Wait for the installation to complete
- You should see: "added XX packages" or similar
- This may take 1-3 minutes
- Do NOT close the window until it's done

---

## ✅ STEP 2: Close and Reopen PowerShell

After installation finishes:
1. Type: `exit` and press Enter
2. Close PowerShell completely
3. **Open PowerShell again** (fresh session)
4. Navigate back to your project:

```powershell
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"
```

---

## ✅ STEP 3: Verify Vercel is Installed

Run this command:

```powershell
vercel --version
```

**Expected output:**
```
Vercel CLI 37.0.0 (or similar version number)
```

If you see this, Vercel is installed! Continue to Step 4.

**If you see "vercel: The term 'vercel' is not recognized":**
- Try closing/reopening PowerShell again
- If that doesn't work, restart your computer

---

## ✅ STEP 4: Login to Vercel

Run:

```powershell
vercel login
```

**What happens:**
1. You'll see a prompt asking for your email
2. OR a browser window opens
3. Complete the authentication
4. Return to PowerShell

---

## ✅ STEP 5: Deploy to Production

Make sure you're in the project folder:

```powershell
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"
```

Then run:

```powershell
vercel --prod
```

**When prompted, answer these questions:**

| Question | Answer |
|----------|--------|
| Set up and deploy? | `Y` |
| Which scope? | Press Enter (default) |
| Link to existing project? | `N` |
| What's your project's name? | Press Enter (default) |
| In which directory is your code? | Press Enter (default = `.`) |
| Want to override the settings below? | `N` |

**Expected output (after 3-5 minutes):**
```
✓ Production: https://ai-interview-mocker.vercel.app [v3]
```

**Copy that URL!** It's your live app.

---

## ✅ STEP 6: Add Environment Variables

### In Vercel Dashboard:

1. Visit: **https://vercel.com/dashboard**
2. Click: **ai-interview-mocker** project
3. Click: **Settings** (top menu)
4. Click: **Environment Variables** (left sidebar)

### Add First Variable:

1. Click: **+ Add New**
2. Enter:
   - Name: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Value: (get from next step)
3. Click: **Save**

### Add Second Variable:

1. Click: **+ Add New**
2. Enter:
   - Name: `CLERK_SECRET_KEY`
   - Value: (get from next step)
3. Click: **Save**

---

## 📋 Where to Get Clerk Keys

1. Visit: **https://clerk.com/dashboard**
2. Click: **API Keys** (or similar) in Settings
3. Copy **Publishable Key** → Paste in Vercel for `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
4. Copy **Secret Key** → Paste in Vercel for `CLERK_SECRET_KEY`

---

## ✅ STEP 7: Redeploy with Environment Variables

Back in Vercel dashboard:

1. Look for: **Redeploy** or **Deploy** button (at the top)
2. Click it
3. Wait 2-3 minutes

---

## 🧪 STEP 8: Test Your App

Visit: **https://ai-interview-mocker.vercel.app**

Verify these work:
- [ ] Landing page loads
- [ ] "Sign Up" button appears
- [ ] Click "Sign Up" → redirects to Clerk
- [ ] Create account works
- [ ] Dashboard appears after login
- [ ] "Start Interview" button works
- [ ] Can select job role and level
- [ ] Interview session starts

---

## ✅ You're Done!

Your app is now **LIVE** at:
```
https://ai-interview-mocker.vercel.app
```

**Success indicators:**
- ✓ You see the landing page with your design
- ✓ Authentication works (sign up/sign in)
- ✓ Interview questions appear
- ✓ Dashboard shows stats

---

## 🆘 Troubleshooting

### Issue: Still can't find "vercel" command

**Try this:**

```powershell
npm list -g vercel
```

If empty, re-run:

```powershell
npm install -g vercel --force
```

Then restart PowerShell.

---

### Issue: Environment variables not working (blank page)

**Check:**
1. Go to Vercel dashboard
2. Click **ai-interview-mocker** project
3. Go to **Deployments**
4. Click the latest deployment
5. Look for **Environment Variables** section
6. Make sure your Clerk keys are there
7. If not, add them and **Redeploy**

---

### Issue: "Scope not found" error

Run:

```powershell
vercel link
```

This will link your local project to Vercel, then try deploying again.

---

## 📞 Need Help?

If you get stuck, share:
1. The exact error message you see
2. Which step you're on
3. Screenshot of the error (if possible)
