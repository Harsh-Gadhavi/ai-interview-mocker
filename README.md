# AI Interview Mocker

A cutting-edge web application for practicing interview skills with AI-powered mock interviews. Get instant feedback, improve your communication skills, and prepare for your dream job.

## 🚀 Features

- **AI-Powered Mock Interviews**: Experience realistic interviews with intelligent question generation
- **Multiple Job Roles**: Practice for various positions - Frontend Developer, Backend Developer, Full Stack Developer, Product Manager, Data Scientist, DevOps Engineer, UI/UX Designer, QA Engineer
- **Experience Levels**: Choose from Entry Level, Mid Level, Senior, or Lead positions
- **Speech Recognition**: Real-time speech-to-text conversion using Web Speech API
- **Instant Feedback**: Get detailed analysis on your performance
- **Performance Tracking**: Monitor your progress with comprehensive statistics
- **Beautiful UI**: Modern dark-themed interface with smooth animations
- **Authentication**: Secure user authentication with Clerk

## 📋 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI
- **Authentication**: Clerk
- **Icons**: Lucide React
- **API**: Next.js API Routes

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm
- Clerk account (free tier available)

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Clerk Authentication**
   - Go to  and create a free account
   - Create a new application
   - Get your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`

3. **Create `.env.local` file**
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   - Navigate to local-app
   - Sign up or sign in
   - Start your first mock interview!

## 📁 Project Structure

- `/app` - Main application pages and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and helpers
- `/public` - Static assets

## 🎯 How It Works

1. **Authentication**: Users sign up/sign in using Clerk
2. **Interview Setup**: Select job role and experience level
3. **Live Interview**: Answer 5 questions with speech-to-text recording (60 seconds each)
4. **Instant Feedback**: Get detailed analysis on performance
5. **Dashboard**: Track history, scores, and improvements

## 🚀 Deployment

Deploy to Vercel or any platform supporting Next.js:
```bash
npm i -g vercel
vercel
```

## 📝 Quick Start

```bash
# Install
npm install

# Setup Clerk keys in .env.local
# Run
npm run dev

# Build for production
npm run build
npm start
```

## 🔐 Authentication with Clerk

- Free tier available at 
- Supports email, Google, GitHub, and more
- Secure session management
- Protected routes for authenticated users

### Clerk plan limits and upgrade

If you see an error like "You have reached your limit of 500 users", your Clerk application is on a limited tier.

Steps to upgrade:

1. Sign in to the Clerk dashboard: 
2. Go to **Billing** or **Usage** for your application.
3. Choose a production plan that supports more users and follow Clerk's upgrade flow.
4. After upgrading, make sure your `CLERK_SECRET_KEY` remains valid in your environment variables (`.env.local` or Vercel/GitHub secrets).

The app includes a small banner that checks Clerk API status and will show an upgrade link and retry button if the limit is reached.

### App Router: `proxy.ts` (recommended)

To follow Clerk's current App Router quickstart, create a `proxy.ts` at the project root (or in `src/` if you have one) that uses `clerkMiddleware()` and a matcher. Example (no keys shown here):

```typescript
// proxy.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
   matcher: [
      "/((?!_next|[^?]*\.(?:html?|css|js|png|jpg|svg)).*)",
      "(api|trpc)(.*)",
   ],
};
```

Keep keys in `.env.local` only (see `.env.example`). Do not commit real keys to the repository.


## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

**Happy interviewing! Good luck with your job search! 🎉**
