# 📖 AI Interview Mocker - Documentation

## Overview

AI Interview Mocker is a Next.js application that helps users practice their interview skills through AI-powered mock interviews. Users can select a job role and experience level, answer 5 interview questions with speech-to-text recording, and receive instant feedback.

## Components

### 1. **app/page.js** - Landing Page
**Purpose**: Welcome screen with authentication and feature showcase
**Features**:
- Hero section with call-to-action
- Feature highlights (3 columns)
- Navigation with auth state
- Responsive design
- Sign-in/sign-up buttons
- Links to dashboard for authenticated users

**Key Elements**:
- Clerk auth integration
- Lucide React icons
- Gradient backgrounds
- Mobile responsive grid

### 2. **app/layout.js** - Root Layout
**Purpose**: Main application layout wrapper
**Features**:
- Clerk provider setup
- Global styles
- Font configuration
- Meta tags
- Dark theme background

**Dependencies**:
- ClerkProvider from @clerk/nextjs
- Google Fonts (Geist, Geist Mono)

### 3. **app/interview/page.jsx** - Interview Session
**Purpose**: Main interview conducting interface
**Features**:
- Interview starter component
- Interview panel component
- Loading states
- Authentication protection
- Role and level selection

**State Management**:
- `interviewStarted`: Boolean to toggle between starter and panel

### 4. **app/interview/layout.jsx** - Interview Layout
**Purpose**: Wrapper for interview pages
**Features**:
- Dark theme background
- Consistent styling
- Container setup

### 5. **app/dashborad/page.jsx** - User Dashboard
**Purpose**: User statistics and interview history
**Features**:
- Statistics cards (total interviews, avg score, weekly progress)
- Interview history list
- Performance tracking
- Start new interview button
- Detailed interview information

**Data Display**:
- Interview role and date
- Interview duration
- Score percentage
- Feedback summary
- View details link

### 6. **app/dashborad/layout.jsx** - Dashboard Layout
**Purpose**: Dashboard page wrapper
**Features**:
- Consistent styling
- Dark background theme

### 7. **components/InterviewStarter.jsx** - Interview Setup
**Purpose**: Let users customize their interview
**Features**:
- 8 job role selector
- 4 experience level selector
- Start button
- Local storage for preferences

**Job Roles**:
1. Frontend Developer
2. Backend Developer
3. Full Stack Developer
4. Product Manager
5. Data Scientist
6. DevOps Engineer
7. UI/UX Designer
8. QA Engineer

**Experience Levels**:
- Entry Level
- Mid Level
- Senior
- Lead

### 8. **components/InterviewPanel.jsx** - Live Interview
**Purpose**: Main interview conducting component
**Features**:
- Question display (1 of 5)
- Timer (60 seconds per question)
- Speech recognition integration
- Response transcript display
- Submit/skip functionality
- Progress bar
- Interview completion screen

**Functionality**:
- Web Speech API integration
- Real-time transcript
- Timer countdown
- Response submission
- Question progression
- Completion detection

### 9. **components/ui/button.jsx** - Button Component
**Purpose**: Reusable button with variants
**Features**:
- 6 variants (default, destructive, outline, secondary, ghost, link)
- 6 sizes (default, sm, lg, icon, icon-sm, icon-lg)
- Full accessibility support
- Smooth transitions

**Based on**: Radix UI + CVA + Tailwind CSS

### 10. **lib/questions.js** - Question Data
**Purpose**: Store interview questions by role
**Structure**:
```javascript
questionsByRole = {
  'Role Name': [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5'
  ]
}
```

**Contains**: 8 roles × 5 questions = 40 questions

### 11. **app/api/evaluate/route.js** - Evaluation API
**Purpose**: Evaluate user responses
**Endpoint**: POST /api/evaluate
**Input**:
- question: Interview question
- response: User's response
- role: Job role
- experience: Experience level

**Output**:
- score: Performance score (60-100)
- feedback: Text feedback
- strengths: Array of strengths
- improvements: Array of improvements
- relevance: Relevance score
- clarity: Clarity score

**Current**: Mock implementation
**Ready for**: OpenAI, Claude, or similar AI integration

### 12. **app/api/questions/route.js** - Questions API
**Purpose**: Generate questions based on role/level
**Endpoint**: POST /api/questions
**Input**:
- role: Job role
- experience: Experience level

**Output**:
- questions: Array of 5 questions
- role: Selected role
- experience: Selected experience level

### 13. **middleware.ts** - Clerk Middleware
**Purpose**: Protect routes and manage authentication
**Features**:
- Route protection
- Public route definition
- Automatic auth redirects
- Session management

## Data Flow

### Interview Flow
```
Landing Page
    ↓
[Sign In/Sign Up]
    ↓
Dashboard or Interview Page
    ↓
Interview Setup (Select Role + Level)
    ↓
Interview Panel (Answer 5 Questions)
    ↓
Submit Responses
    ↓
Results/Dashboard
```

### State Management
- **Local Storage**: Interview preferences (role, experience)
- **React State**: Interview progress, transcripts, responses
- **Clerk**: User authentication and session

## Styling

### Colors
- Primary: Blue (#3B82F6)
- Background: Slate (#0F172A)
- Text: Slate-100 (#F1F5F9)
- Accents: Cyan, Green, Purple

### Typography
- Headers: Geist Sans (bold)
- Body: Geist Sans (regular)
- Code: Geist Mono

### Responsive Breakpoints
- Mobile: Default (< 640px)
- Small: sm (640px)
- Medium: md (768px)
- Large: lg (1024px)

## Environment Variables

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Dependencies

### Production
- next@15.5.4
- react@19.1.0
- react-dom@19.1.0
- @clerk/nextjs@6.33.3
- tailwindcss@4
- lucide-react@0.545.0
- clsx@2.1.1
- class-variance-authority@0.7.1

### Development
- typescript@5.9.3
- tailwind-merge@3.3.1
- @types/react@19.2.2

## Browser Requirements

- Chrome/Chromium 25+
- Edge 79+
- Firefox 29+
- Safari 14.1+
- Opera 12+

For Speech API:
- Chrome, Edge, Safari recommended
- Firefox with experimental flag

## Security

- Authentication via Clerk
- Protected API routes
- Secure session management
- No sensitive data in localStorage
- HTTPS required in production

## Performance

- Server-side rendering with Next.js
- Image optimization
- Code splitting
- Efficient re-rendering
- Responsive design

## Accessibility

- ARIA labels
- Keyboard navigation
- Focus management
- Semantic HTML
- Color contrast compliance

## Testing Checklist

- [ ] Sign up works
- [ ] Sign in works
- [ ] Dashboard loads
- [ ] Can start interview
- [ ] Can record audio
- [ ] Timer works
- [ ] Can submit response
- [ ] Can skip question
- [ ] Interview completes
- [ ] Mobile responsive

## Future Enhancements

1. **AI Integration**: OpenAI/Claude for real feedback
2. **Video**: Record video during interview
3. **Scheduling**: Book interviews with real people
4. **Analytics**: Advanced performance metrics
5. **Mobile**: React Native app
6. **Database**: Store all interview data
7. **Certificates**: Achievement badges
8. **Export**: PDF reports

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Clerk keys added
- [ ] Build successful
- [ ] All routes tested
- [ ] Auth flow tested
- [ ] API endpoints tested
- [ ] Mobile tested
- [ ] Performance optimized

---

For more details, see README.md and SETUP.md
