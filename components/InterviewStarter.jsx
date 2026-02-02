'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export default function InterviewStarter({ onStart }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [experience, setExperience] = useState('');
  const [loading, setLoading] = useState(false);

  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Product Manager',
    'Data Scientist',
    'DevOps Engineer',
    'UI/UX Designer',
    'QA Engineer',
  ];

  const experiences = ['Entry Level', 'Mid Level', 'Senior', 'Lead'];

  const handleStart = async () => {
    if (!selectedRole || !experience) {
      alert('Please select both role and experience level');
      return;
    }

    setLoading(true);
    try {
      // Store preferences in localStorage
      localStorage.setItem('interviewRole', selectedRole);
      localStorage.setItem('interviewExperience', experience);
      
      // Call parent to start interview
      onStart();
    } catch (error) {
      console.error('Error starting interview:', error);
      alert('Failed to start interview');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-8">Customize Your Interview</h2>

        {/* Role Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-4">Select Job Role</label>
          <div className="grid grid-cols-2 gap-3">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`p-3 rounded-lg border transition-all text-left ${
                  selectedRole === role
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-500'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-4">Experience Level</label>
          <div className="grid grid-cols-2 gap-3">
            {experiences.map((exp) => (
              <button
                key={exp}
                onClick={() => setExperience(exp)}
                className={`p-3 rounded-lg border transition-all text-left ${
                  experience === exp
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-500'
                }`}
              >
                {exp}
              </button>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <Button
          onClick={handleStart}
          disabled={!selectedRole || !experience || loading}
          className="w-full gap-2"
          size="lg"
        >
          <Zap className="w-4 h-4" />
          {loading ? 'Starting...' : 'Start Interview'}
        </Button>
      </div>
    </div>
  );
}
