# 🏗️ AI Interview Mocker - Architecture & File Structure

## Project Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    AI Interview Mocker                           │
│                   (Next.js Application)                          │
└─────────────────────────────────────────────────────────────────┘
              │
              ├─── Frontend Layer
              │    ├── Landing Page (page.js)
              │    ├── Interview Session (interview/page.jsx)
              │    ├── Dashboard (dashborad/page.jsx)
              │    └── Components
              │        ├── InterviewStarter.jsx
              │        ├── InterviewPanel.jsx
              │        └── UI Components
              │
              ├─── Backend Layer
              │    ├── API Routes
              │    │   ├── /api/evaluate
              │    │   └── /api/questions
              │    └── Middleware
              │        └── middleware.ts (Clerk Auth)
              │
              ├─── Data Layer
              │    ├── Local Storage (preferences)
              │    ├── Session Storage (current interview)
              │    └── Clerk (user data)
              │
              └─── External Services
                   └── Clerk Authentication
```

## Directory Structure

```
ai-interview-mocker/
│
├── app/                           # Main application directory
│   ├── layout.js                 # Root layout + Clerk provider
│   ├── page.js                   # Landing page (/)
│   ├── globals.css               # Global styles
│   │
│   ├── interview/                # Interview routes
│   │   ├── page.jsx             # Interview session page
│   │   └── layout.jsx           # Interview layout wrapper
│   │
│   ├── dashborad/               # Dashboard routes (note: typo in folder name)
│   │   ├── page.jsx             # Dashboard page (/dashboard)
│   │   └── layout.jsx           # Dashboard layout wrapper
│   │
│   ├── (auth)/                  # Clerk auth pages (dynamic group)
│   │   └── sign-in/
│   │       └── sign-in/
│   │           └── [[...sign-in]]/
│   │               └── page.tsx
│   │
│   └── api/                     # API routes
│       ├── evaluate/
│       │   └── route.js         # POST /api/evaluate
│       │
│       └── questions/
│           └── route.js         # POST /api/questions
│
├── components/                  # Reusable React components
│   ├── InterviewStarter.jsx    # Role/level selector component
│   ├── InterviewPanel.jsx      # Main interview interface
│   │
│   └── ui/                     # UI component library
│       └── button.jsx          # Reusable button component
│
├── lib/                        # Utility functions and data
│   ├── questions.js            # Interview questions by role
│   └── utils.js                # General utility functions
│
├── public/                     # Static assets
│   └── middleware.js           # (Not used in current setup)
│
├── Configuration Files
│   ├── package.json            # Dependencies and scripts
│   ├── next.config.mjs         # Next.js configuration
│   ├── tsconfig.json           # TypeScript configuration
│   ├── tailwind.config.mjs     # Tailwind CSS config
│   ├── postcss.config.mjs      # PostCSS config
│   ├── components.json         # UI components index
│   ├── jsconfig.json           # JS path aliases
│   ├── middleware.ts           # Clerk auth middleware
│   └── next-env.d.ts           # TypeScript definitions
│
├── Documentation
│   ├── README.md               # Main project documentation
│   ├── SETUP.md                # Quick start guide
│   ├── DOCUMENTATION.md        # Component & API reference
│   ├── GETTING_STARTED.md      # Setup checklist
│   ├── COMPLETION_SUMMARY.md   # Project completion summary
│   └── ARCHITECTURE.md         # This file
│
└── Environment & Git
    ├── .env.local              # Local environment variables
    ├── .env.example            # Environment template
    ├── .gitignore              # Git ignore rules
    └── .clerk                  # Clerk configuration
```

## Component Hierarchy

```
RootLayout (app/layout.js)
├── ClerkProvider
│   └── Body (Dark Theme)
│       │
│       ├── Pages/
│       │   ├── Landing Page (/)
│       │   │   ├── Navigation Bar
│       │   │   ├── Hero Section
│       │   │   ├── Features Section
│       │   │   └── Footer
│       │   │
│       │   ├── Interview (/interview)
│       │   │   └── InterviewLayout
│       │   │       └── InterviewPage
│       │   │           ├── InterviewStarter (if not started)
│       │   │           │   ├── Role Selector
│       │   │           │   └── Level Selector
│       │   │           │
│       │   │           └── InterviewPanel (if started)
│       │   │               ├── Progress Bar
│       │   │               ├── Question Display
│       │   │               ├── Timer
│       │   │               ├── Transcript Display
│       │   │               ├── Recording Controls
│       │   │               │   ├── Start Speaking Button
│       │   │               │   ├── Stop Recording Button
│       │   │               │   └── Submit Answer Button
│       │   │               └── Results Screen
│       │   │
│       │   └── Dashboard (/dashboard)
│       │       └── DashboardLayout
│       │           └── DashboardPage
│       │               ├── Header
│       │               ├── Statistics Cards (3)
│       │               │   ├── Total Interviews
│       │               │   ├── Average Score
│       │               │   └── Weekly Progress
│       │               └── Interview History
│       │                   ├── Interview Cards
│       │                   ├── Role Name
│       │                   ├── Date & Duration
│       │                   ├── Score
│       │                   └── Feedback
│       │
│       └── Auth Pages
│           └── Clerk Sign In/Up Pages
```

## Data Flow Diagram

### Interview Flow
```
User Landing Page
    ↓ [Click Start Interview]
    ↓
Clerk Authentication
    ↓ [Sign In/Sign Up]
    ↓
Interview Setup (InterviewStarter)
    ↓ [Select Role & Level]
    ↓ [Store in localStorage]
    ↓
Interview Session (InterviewPanel)
    ├─ Load Question (from lib/questions.js)
    ├─ Initialize Timer (60 seconds)
    ├─ Start Speech Recognition (Web Speech API)
    ├─ Capture User Response
    ├─ [User speaks and transcript appears]
    ├─ [User clicks Submit]
    ├─ POST to /api/evaluate
    │  ├─ Server processes response
    │  └─ Returns score & feedback
    ├─ Move to Next Question
    └─ [Repeat for 5 questions]
    ↓
Results Screen
    ↓ [Show completion message]
    ↓
Redirect to Dashboard
    ↓
Dashboard
    ├─ Display Statistics
    ├─ Show Interview History
    └─ Option to Start New Interview
```

## State Management Flow

```
Global State (Clerk User):
└── User Information
    ├── User ID
    ├── Email
    ├── Name
    └── Session Token

Local Storage:
├── interviewRole (string)
└── interviewExperience (string)

Component State:
├── InterviewPage
│   └── interviewStarted (boolean)
│
├── InterviewStarter
│   ├── selectedRole (string)
│   ├── experience (string)
│   └── loading (boolean)
│
└── InterviewPanel
    ├── currentQuestion (string)
    ├── questionIndex (number)
    ├── transcript (string)
    ├── timeLeft (number)
    ├── isListening (boolean)
    ├── responses (array)
    ├── isLoading (boolean)
    └── interviewComplete (boolean)
```

## API Endpoints

### Question Generation
```
POST /api/questions
│
├── Request Body:
│   ├── role: string (e.g., "Frontend Developer")
│   └── experience: string (e.g., "Mid Level")
│
└── Response Body:
    ├── questions: string[] (5 questions)
    ├── role: string
    └── experience: string
```

### Response Evaluation
```
POST /api/evaluate
│
├── Request Body:
│   ├── question: string
│   ├── response: string (user's spoken response)
│   ├── role: string
│   └── experience: string
│
└── Response Body:
    ├── score: number (0-100)
    ├── feedback: string
    ├── strengths: string[]
    ├── improvements: string[]
    ├── relevance: number (0-100)
    └── clarity: number (0-100)
```

## Technology Stack

```
Frontend Framework
├── Next.js 15.5.4
└── React 19.1.0

Styling
├── Tailwind CSS 4
├── PostCSS 4
├── class-variance-authority 0.7.1
└── tailwind-merge 3.3.1

UI & Icons
├── Radix UI (react-slot)
└── Lucide React 0.545.0

Authentication
└── Clerk 6.33.3

Development
├── TypeScript 5.9.3
└── Various type definitions

Utilities
├── clsx 2.1.1
└── Custom utility functions
```

## Performance Optimizations

```
Code Splitting
├── Route-based splitting (Next.js automatic)
├── Component-level code splitting
└── Dynamic imports where needed

Image Optimization
├── Next.js Image component
├── Automatic format conversion
└── Responsive sizes

Caching Strategy
├── Browser caching (static assets)
├── Vercel CDN (when deployed)
└── ISR (Incremental Static Regeneration)

Bundle Size
├── Tree-shaking enabled
├── Minification enabled
└── CSS purging enabled
```

## Security Architecture

```
Authentication Layer
├── Clerk Session Management
├── Secure Cookies
└── CSRF Protection

API Security
├── Input Validation
├── Error Handling
├── Rate Limiting (Clerk)
└── Environment Variables

Frontend Security
├── No sensitive data in localStorage
├── Secure headers (Next.js)
├── XSS Protection
└── Content Security Policy
```

## Deployment Architecture

```
Development
└── Local Machine (npm run dev)

Production
├── Build: npm run build
├── Server: Next.js Runtime
├── Hosting Options:
│   ├── Vercel (recommended)
│   ├── Netlify
│   ├── Railway
│   ├── Render
│   └── Self-hosted
└── Environment: Node.js 18+
```

## File Dependencies

```
app/page.js
├── @/components/ui/button
├── @/components/InterviewStarter (via page components)
├── next/link
├── @clerk/nextjs
└── lucide-react

app/interview/page.jsx
├── @/components/InterviewStarter
├── @/components/InterviewPanel
└── @clerk/nextjs

app/dashborad/page.jsx
├── @/components/ui/button
├── next/link
├── lucide-react
└── @clerk/nextjs

components/InterviewPanel.jsx
├── @/components/ui/button
└── lucide-react

lib/questions.js
└── (No external dependencies)

app/api/evaluate/route.js
└── (Built-in Node.js APIs)
```

## Environment Setup

```
.env.local
├── NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY (from Clerk)
├── CLERK_SECRET_KEY (from Clerk)
├── NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
├── NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up
├── NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /dashboard
└── NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /dashboard
```

---

## Quick Reference

### Page Routes
- `/` - Landing page
- `/interview` - Interview session
- `/dashboard` - User dashboard
- `/sign-in` - Sign in page (Clerk)
- `/sign-up` - Sign up page (Clerk)

### API Routes
- `POST /api/evaluate` - Evaluate response
- `POST /api/questions` - Get questions

### Key Files
- `middleware.ts` - Auth protection
- `lib/questions.js` - Question data
- `components/InterviewPanel.jsx` - Interview logic

---

**Architecture created: February 2024**
**Version: 1.0**
**Status: Production Ready ✅**
