export const questionsByRole = {
  'Frontend Developer': [
    "Tell me about yourself and your experience with frontend technologies.",
    "How do you approach responsive design and cross-browser compatibility?",
    "Can you describe your experience with React, Vue, or Angular? Which do you prefer and why?",
    "How do you optimize web application performance?",
    "Tell me about a time when you debugged a complex frontend issue."
  ],
  'Backend Developer': [
    "Tell me about your experience with backend development and databases.",
    "How do you design scalable and maintainable APIs?",
    "Can you explain your experience with microservices architecture?",
    "How do you handle authentication and security in your applications?",
    "Describe a challenging backend problem you've solved."
  ],
  'Full Stack Developer': [
    "Tell me about your experience as a full stack developer.",
    "How do you balance work between frontend and backend development?",
    "Can you describe a full stack project you're proud of?",
    "How do you ensure smooth communication between frontend and backend?",
    "What's your approach to database design?"
  ],
  'Product Manager': [
    "Tell me about yourself and your product management experience.",
    "How do you prioritize features in a product roadmap?",
    "Can you describe how you would handle conflicting stakeholder requirements?",
    "How do you measure product success and gather user feedback?",
    "Tell me about a product you've launched and its impact."
  ],
  'Data Scientist': [
    "Tell me about your experience with data analysis and machine learning.",
    "How do you approach a new data science problem?",
    "Can you explain a machine learning model you've built in production?",
    "How do you handle data quality issues and imbalanced datasets?",
    "Tell me about your experience with data visualization tools."
  ],
  'DevOps Engineer': [
    "Tell me about your experience with DevOps and cloud infrastructure.",
    "How do you approach infrastructure as code?",
    "Can you describe your experience with containerization and orchestration?",
    "How do you monitor and troubleshoot production issues?",
    "Tell me about a complex deployment challenge you've solved."
  ],
  'UI/UX Designer': [
    "Tell me about yourself and your design background.",
    "Can you walk me through your design process?",
    "How do you gather and incorporate user feedback?",
    "Tell me about a design project you're particularly proud of.",
    "How do you approach accessibility and inclusive design?"
  ],
  'QA Engineer': [
    "Tell me about your experience with quality assurance and testing.",
    "What's your approach to creating test cases and test plans?",
    "Can you describe your experience with automation testing?",
    "How do you prioritize testing efforts and bugs?",
    "Tell me about a complex bug you found and how you documented it."
  ]
};

export const getQuestionsByRole = (role) => {
  return questionsByRole[role] || questionsByRole['Frontend Developer'];
};
