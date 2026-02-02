export async function POST(request) {
  try {
    const { question, response, role, experience } = await request.json();

    // Simulate AI evaluation
    // In production, you would call an actual AI service like OpenAI, Anthropic, etc.
    const evaluation = {
      score: Math.floor(Math.random() * 40) + 60, // 60-100
      feedback: generateFeedback(response),
      strengths: generateStrengths(response),
      improvements: generateImprovements(response),
      relevance: Math.floor(Math.random() * 30) + 70,
      clarity: Math.floor(Math.random() * 30) + 70,
    };

    return Response.json(evaluation);
  } catch (error) {
    console.error('Error evaluating response:', error);
    return Response.json({ error: 'Failed to evaluate response' }, { status: 500 });
  }
}

function generateFeedback(response) {
  const feedbackOptions = [
    'Excellent response with clear examples and specific details.',
    'Good answer, but could include more specific examples.',
    'Solid response. Consider elaborating on the impact of your actions.',
    'Your answer shows good understanding. Add more metrics or results.',
    'Great use of the STAR method. Well structured response.',
  ];
  return feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
}

function generateStrengths(response) {
  const strengths = [
    'Clear communication',
    'Specific examples',
    'Problem-solving approach',
    'Relevant experience',
    'Technical knowledge',
  ];
  return strengths.slice(0, Math.floor(Math.random() * 2) + 2);
}

function generateImprovements(response) {
  const improvements = [
    'Add more quantifiable results',
    'Include more specific metrics',
    'Elaborate on the learning outcome',
    'Connect to the job requirements',
    'Share how you applied this knowledge later',
  ];
  return improvements.slice(0, Math.floor(Math.random() * 2) + 1);
}
