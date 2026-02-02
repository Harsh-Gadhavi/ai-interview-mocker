# 🚀 AI Interview Mocker - Setup Guide

Welcome to the AI Interview Mocker project! This guide will help you get started quickly.

## ⚡ Quick Setup (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Get Clerk API Keys
1. Visit  and sign up (free)
2. Create a new application
3. Go to API Keys in the dashboard
4. Copy your keys

### Step 3: Configure Environment Variables
Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### Step 4: Run the Application
```bash
npm run dev
```

Visit local-app and start using the app!

## 📋 Project Features

### ✅ Implemented
- Landing page with authentication
- Interview setup with role and level selection
- Live interview with 5 questions (60 seconds each)
- Speech-to-text recording
- User dashboard with statistics
- Interview history tracking
- Modern UI with Tailwind CSS
- Clerk authentication integration
- API routes for evaluation and questions

### 🔄 Ready for Enhancement
- AI evaluation integration (OpenAI, Claude, etc.)
- Video recording of interviews
- Advanced analytics
- Interview scheduling
- Resume matching
- Certificates and achievements

## 📂 Project Structure

```
ai-interview-mocker/
├── app/
│   ├── page.js                  # Landing page
│   ├── layout.js               # Root layout with Clerk
│   ├── globals.css             # Global styles
│   ├── interview/
│   │   ├── page.jsx            # Interview session
│   │   └── layout.jsx          # Interview layout
│   ├── dashborad/
│   │   ├── page.jsx            # User dashboard
│   │   └── layout.jsx          # Dashboard layout
│   ├── api/
│   │   ├── evaluate/route.js   # Response evaluation
│   │   └── questions/route.js  # Question generation
│   └── (auth)/                 # Clerk auth pages
├── components/
│   ├── InterviewStarter.jsx    # Role selector
│   ├── InterviewPanel.jsx      # Interview interface
│   └── ui/
│       └── button.jsx          # Button component
├── lib/
│   ├── questions.js            # Question data
│   └── utils.js                # Utilities
├── middleware.ts               # Clerk middleware
├── .env.local                  # Environment variables
└── package.json                # Dependencies
```

## 🔐 Key Features

### Authentication
- Secure signup/login with Clerk
- Multiple authentication methods
- Protected routes
- User session management

### Interview System
- 8 different job roles
- 4 experience levels
- 5 questions per interview
- 60-second timer per question
- Real-time speech recognition
- Progress tracking

### Dashboard
- Interview history
- Performance scores
- Weekly progress
- Detailed feedback

## 🎯 Usage Flow

1. **Landing Page**: Sign up or sign in
2. **Interview Setup**: Choose role and experience level
3. **Live Interview**: Answer 5 questions with voice recording
4. **Results**: View scores and feedback
5. **Dashboard**: Track all your interviews

## 🛠️ Development

### Add New Job Role
Edit `lib/questions.js` and add to the `questionsByRole` object:
```javascript
'Your New Role': [
  'Question 1',
  'Question 2',
  // ... 5 questions total
]
```

### Add Debugging
The project uses Console.log for debugging. Check browser console for interview logs.

### Build for Production
```bash
npm run build
npm start
```

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- Railway: `vercel deploy --prod`
- Netlify: Push to GitHub and connect
- Render: Connect your Git repository
- AWS Amplify: Use AWS console

## ❓ Troubleshooting

### Microphone Not Working
- Check browser permissions
- Try a different browser (Chrome, Edge recommended)
- Enable cookies if blocked

### Clerk Not Working
- Verify API keys in `.env.local`
- Check Clerk dashboard for application settings
- Clear browser cache and cookies

### Styling Issues
- Clear Next.js cache: `rm -rf .next`
- Restart development server
- Check Tailwind CSS is properly configured

## 📚 Resources

- Next.js Docs: 
- Clerk Docs: 
- Tailwind CSS: 
- React: 

## 🎓 Next Steps

1. Customize the interview questions
2. Add real AI evaluation (OpenAI, Claude)
3. Add video recording feature
4. Deploy to production
5. Add database for persistent storage

## 💡 Tips

- Test with different microphones
- Try all different job roles and levels
- Check the browser console for errors
- Review the README for more details

## 🤝 Support

For issues:
1. Check the troubleshooting section
2. Review Clerk documentation
3. Check browser console for errors
4. Verify environment variables are set

---

**You're all set! Happy interviewing! 🎉**

Questions? Check the main README.md for more details.
