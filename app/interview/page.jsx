'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import InterviewStarter from '@/components/InterviewStarter';
import InterviewPanel from '@/components/InterviewPanel';

export default function InterviewPage() {
  const { user, isLoaded } = useUser();
  const [interviewStarted, setInterviewStarted] = useState(false);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    redirect('/');
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Mock Interview Session</h1>
          <p className="text-slate-400">
            Practice your interview skills in a realistic environment with instant feedback
          </p>
        </div>

        {/* Interview Content */}
        {!interviewStarted ? (
          <InterviewStarter onStart={() => setInterviewStarted(true)} />
        ) : (
          <InterviewPanel />
        )}
      </div>
    </div>
  );
}
