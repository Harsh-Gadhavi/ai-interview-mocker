'use client';

import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TrendingUp, Calendar, Target, Zap } from 'lucide-react';

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const [interviews, setInterviews] = useState([]);
  const [stats, setStats] = useState({
    totalInterviews: 0,
    avgScore: 0,
    improvement: 0,
  });

  useEffect(() => {
    // In production, fetch from API
    const mockInterviews = [
      {
        id: 1,
        role: 'Frontend Developer',
        date: new Date(Date.now() - 86400000).toLocaleDateString(),
        score: 82,
        duration: '15 mins',
        feedback: 'Great technical knowledge, work on communication clarity.',
      },
      {
        id: 2,
        role: 'Backend Developer',
        date: new Date(Date.now() - 172800000).toLocaleDateString(),
        score: 78,
        duration: '18 mins',
        feedback: 'Good system design thinking, include more examples.',
      },
    ];
    setInterviews(mockInterviews);
    setStats({
      totalInterviews: mockInterviews.length,
      avgScore: Math.floor(mockInterviews.reduce((acc, i) => acc + i.score, 0) / mockInterviews.length),
      improvement: 4,
    });
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
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
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
            <p className="text-slate-400">Welcome back, {user.firstName}!</p>
          </div>
          <Link href="/interview">
            <Button className="gap-2">
              <Zap className="w-4 h-4" />
              New Interview
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Total Interviews</p>
                <p className="text-3xl font-bold">{stats.totalInterviews}</p>
              </div>
              <Target className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Average Score</p>
                <p className="text-3xl font-bold">{stats.avgScore}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Progress This Week</p>
                <p className="text-3xl font-bold">+{stats.improvement}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Recent Interviews */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">Recent Interviews</h2>

          {interviews.length > 0 ? (
            <div className="space-y-4">
              {interviews.map((interview) => (
                <div
                  key={interview.id}
                  className="border border-slate-600/30 rounded-lg p-4 hover:border-slate-500/50 transition"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{interview.role}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {interview.date}
                        </span>
                        <span>{interview.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{interview.score}%</div>
                      <p className="text-sm text-slate-400">Score</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">{interview.feedback}</p>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400 mb-4">No interviews yet. Start your first one!</p>
              <Link href="/interview">
                <Button>Start Your First Interview</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}