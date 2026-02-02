import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sparkles, BarChart3, Zap, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Interview Mocker
            </span>
          </div>
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  Dashboard
                </Button>
              </Link>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Master Your Interviews with
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                AI-Powered Practice
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get realistic mock interviews with AI interviewers, real-time feedback, and personalized recommendations to land your dream job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <SignedIn>
                <Link href="/interview">
                  <Button size="lg" className="gap-2">
                    <Zap className="w-4 h-4" />
                    Start Mock Interview
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button size="lg" className="gap-2">
                    <Zap className="w-4 h-4" />
                    Start Mock Interview
                  </Button>
                </SignInButton>
              </SignedOut>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose AI Interview Mocker?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-slate-700/50 bg-slate-800/30 backdrop-blur hover:border-blue-500/50 transition">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Interviewers</h3>
            <p className="text-slate-400">
              Experience realistic interviews with advanced AI that asks follow-up questions based on your responses.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-slate-700/50 bg-slate-800/30 backdrop-blur hover:border-blue-500/50 transition">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Feedback</h3>
            <p className="text-slate-400">
              Get comprehensive analysis of your performance, communication skills, and areas for improvement.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-slate-700/50 bg-slate-800/30 backdrop-blur hover:border-blue-500/50 transition">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multiple Job Roles</h3>
            <p className="text-slate-400">
              Practice for any position - from technical to management roles - with industry-specific questions.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Interview?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've improved their interview skills with our AI-powered platform.
          </p>
          <SignedIn>
            <Link href="/interview">
              <Button size="lg">Start Your First Mock Interview</Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="lg">Sign In to Get Started</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>© 2024 AI Interview Mocker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
