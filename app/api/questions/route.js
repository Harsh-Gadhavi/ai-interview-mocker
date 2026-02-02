export async function POST(request) {
  try {
    const { role, experience } = await request.json();

    // In production, you would use a real AI service to generate questions
    const questions = {
      'Frontend Developer': [
        "Tell me about yourself and your experience with frontend technologies.",
        "How do you approach responsive design and cross-browser compatibility?",
        "Can you describe your experience with React? How have you optimized performance?",
        "Tell me about a time you debugged a complex CSS or JavaScript issue.",
        "How do you stay updated with the latest frontend trends?"
      ],
      'Backend Developer': [
        "Tell me about your backend development experience.",
        "How do you design RESTful APIs?",
        "Describe your experience with databases and optimization.",
        "How do you handle scalability and load balancing?",
        "Tell me about your experience with microservices."
      ],
    };

    const selectedQuestions = questions[role] || questions['Frontend Developer'];

    return Response.json({
      questions: selectedQuestions,
      role,
      experience,
    });
  } catch (error) {
    console.error('Error generating questions:', error);
    return Response.json(
      { error: 'Failed to generate questions' },
      { status: 500 }
    );
  }
}
