'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader, Mic, StopCircle, Send } from 'lucide-react';

export default function InterviewPanel() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [responses, setResponses] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [interviewComplete, setInterviewComplete] = useState(false);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const totalQuestions = 5;

  const questions = [
    "Tell me about yourself and your professional background.",
    "What are your key strengths and why do they make you suitable for this role?",
    "Can you describe a challenging project you worked on and how you overcame obstacles?",
    "How do you stay updated with the latest technologies and trends in your field?",
    "Why are you interested in this position and what are your career goals?",
  ];

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const text = event.results[i].transcript;
          if (event.results[i].isFinal) {
            setTranscript((prev) => prev + text + ' ');
          } else {
            interimTranscript += text;
          }
        }
      };
    }

    setCurrentQuestion(questions[0]);
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isListening) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleStopListening();
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isListening]);

  const handleStartListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      setTranscript('');
      recognitionRef.current.start();
    }
  };

  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleSubmitResponse = async () => {
    if (!transcript.trim()) {
      alert('Please provide an answer');
      return;
    }

    setIsLoading(true);
    try {
      // Add response to history
      setResponses([
        ...responses,
        {
          question: currentQuestion,
          response: transcript,
          feedback: 'Great answer! Keep going.',
        },
      ]);

      // Move to next question or complete
      if (questionIndex + 1 < totalQuestions) {
        setQuestionIndex(questionIndex + 1);
        setCurrentQuestion(questions[questionIndex + 1]);
        setTranscript('');
        setTimeLeft(60);
      } else {
        setInterviewComplete(true);
      }
    } catch (error) {
      console.error('Error submitting response:', error);
      alert('Failed to submit response');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkipQuestion = () => {
    if (questionIndex + 1 < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
      setCurrentQuestion(questions[questionIndex + 1]);
      setTranscript('');
      setTimeLeft(60);
      setIsListening(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    }
  };

  if (interviewComplete) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-green-900/30 to-slate-900 border border-green-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-400">Interview Complete!</h2>
          <p className="text-slate-300 mb-6">
            You've completed {responses.length} questions. Check your dashboard for detailed feedback and analysis.
          </p>
          <Button onClick={() => (window.location.href = '/dashboard')}>
            View Results
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <span className={`text-sm font-medium ${timeLeft <= 10 ? 'text-red-400' : 'text-slate-400'}`}>
            {timeLeft}s remaining
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8 mb-8">
        <h3 className="text-lg font-medium text-slate-300 mb-4">Question:</h3>
        <p className="text-2xl font-semibold">{currentQuestion}</p>
      </div>

      {/* Response Area */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-slate-300">Your Response:</h3>
          {isListening && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-red-400">Recording...</span>
            </div>
          )}
        </div>

        {/* Transcript Display */}
        <div className="min-h-24 p-4 rounded-lg bg-slate-900/50 border border-slate-600/30 mb-6">
          <p className="text-slate-100">{transcript || 'Your answer will appear here...'}</p>
        </div>

        {/* Controls */}
        <div className="flex gap-4 flex-wrap">
          {!isListening ? (
            <Button
              onClick={handleStartListening}
              variant="default"
              className="gap-2 flex-1"
              disabled={isLoading}
            >
              <Mic className="w-4 h-4" />
              Start Speaking
            </Button>
          ) : (
            <Button
              onClick={handleStopListening}
              variant="destructive"
              className="gap-2 flex-1"
            >
              <StopCircle className="w-4 h-4" />
              Stop Recording
            </Button>
          )}

          <Button
            onClick={handleSubmitResponse}
            disabled={!transcript.trim() || isLoading}
            className="gap-2 flex-1"
          >
            {isLoading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Submit Answer
              </>
            )}
          </Button>

          <Button
            onClick={handleSkipQuestion}
            variant="outline"
            className="flex-1"
          >
            Skip Question
          </Button>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-sm text-slate-300">
        <p className="font-medium text-blue-400 mb-2">💡 Tips:</p>
        <ul className="space-y-1 text-sm">
          <li>• Take a moment to think before speaking</li>
          <li>• Speak clearly and at a natural pace</li>
          <li>• Provide specific examples when possible</li>
          <li>• You have up to 60 seconds to respond</li>
        </ul>
      </div>
    </div>
  );
}
