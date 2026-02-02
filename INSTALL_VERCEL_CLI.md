# 🚀 STEP-BY-STEP VERCEL DEPLOYMENT GUIDE

## Your Situation Right Now

You're getting this error:
```
vercel : The term 'vercel' is not recognized
```

**Reason:** Vercel CLI is not installed on your computer.

---

## 🔧 SOLUTION: Install Vercel CLI

### Step 1: Open PowerShell as Administrator

1. Press: **Windows Key + R**
2. Type: `powershell`
3. Press: **Ctrl + Shift + Enter** (to open as administrator)

---

### Step 2: Run Installation Command

Copy this ENTIRE line and paste it:

```powershell
npm install -g vercel
```

Then press **Enter**.

**What to expect:**
- You'll see lots of text
- Wait 1-3 minutes
- Eventually you'll see: `added 77 packages` (or similar)
- The prompt `PS>` will return

---

### Step 3: Close PowerShell

Type:
```powershell
exit
```

Then close the window completely.

---

### Step 4: Reopen PowerShell (Fresh Session)

1. Press: **Windows Key**
2. Type: `powershell`
3. Press: **Enter**

---

### Step 5: Verify Installation

Navigate to your project:

```powershell
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"
```

Then verify Vercel is installed:

```powershell
vercel --version
```

**Expected output:**
```
Vercel CLI 37.0.0
```

If you see the version, **Vercel is installed!** Continue to next section.

If you still get "not recognized":
- Close PowerShell again
- Wait 10 seconds
- Reopen and try again
- If still failing, restart your computer

---

## 🔐 LOGIN TO VERCEL

In your PowerShell (in the project directory), run:

```powershell
vercel login
```

**What happens next:**
- You'll be asked for your email
- OR a browser window opens automatically
- Sign in with GitHub, GitLab, or email
- Complete any verification needed

---

## 🚀 DEPLOY TO PRODUCTION

Make sure you're still in the project folder:

```powershell
cd "c:\Users\harsh\nextjs React\ai-interview-mocker"
```

Then run:

```powershell
vercel --prod
```

**When Vercel asks these questions, answer exactly as shown:**

| Question | Your Answer |
|----------|-------------|
| `Set up and deploy?` | Type `Y` and press Enter |
| `Which scope do you want to deploy to?` | Press Enter (select default) |
| `Link to existing project?` | Type `N` and press Enter |
| `What's your project's name?` | Press Enter |
| `In which directory is your code?` | Press Enter (for `.`) |
| `Want to override the settings below?` | Type `N` and press Enter |

**Wait 3-5 minutes...**

You'll see:
```
✓ Production:  [v3]
```

**That's your live URL!** 🎉

---

## ⚙️ CONFIGURE ENVIRONMENT VARIABLES

### Get Your Clerk Keys

1. Visit: **
2. Click: **Settings** (left sidebar)
3. Click: **API Keys**
4. Copy: **Publishable Key** (save it)
5. Copy: **Secret Key** (save it)

### Add to Vercel

1. Visit: **
2. Find: **ai-interview-mocker** project
3. Click: **Settings** (top menu)
4. Click: **Environment Variables** (left sidebar)
5. Click: **+ Add New**

**First Variable:**
- Name: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- Value: (paste the publishable key you copied)
- Click: **Save**

**Second Variable:**
- Click: **+ Add New**
- Name: `CLERK_SECRET_KEY`
- Value: (paste the secret key you copied)
- Click: **Save**

### Redeploy

1. Look for: **Redeploy** button (top of page)
2. Click it
3. Wait 2-3 minutes

---

## ✅ TEST YOUR APP

Visit: **

Check these work:
- [ ] Landing page loads with dark theme
- [ ] "Sign Up" button visible
- [ ] Click "Sign Up" → goes to Clerk form
- [ ] Can create account
- [ ] After sign up → see dashboard
- [ ] "Start Interview" button works
- [ ] Can select job role
- [ ] Can select experience level
- [ ] Interview starts and shows questions

---

## 🎉 Success!

If all above work, your app is **LIVE** at:

```

```

---

## 🆘 Common Issues

### "vercel: The term 'vercel' is not recognized"

**Solution:**
```powershell
npm install -g vercel --force
```

Close PowerShell and reopen.

---

### "Error: Scope not found"

**Solution:** Run this first:
```powershell
vercel link
```

Then try `vercel --prod` again.

---

### App shows blank page or 404

**Solution:** You haven't added environment variables yet. Go to Step: "CONFIGURE ENVIRONMENT VARIABLES" above.

---

### "vercel: command not found" (even after install)

**Solution:** Restart your computer. Sometimes npm needs a restart to update the PATH.

---

## 📞 Need Help?

Share:
1. The exact error message
2. Which step you're stuck on
3. Screenshot of the error (if possible)
