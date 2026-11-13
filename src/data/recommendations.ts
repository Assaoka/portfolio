export interface RecommendationItem {
  author: string;
  authorUrl?: string;
  role: string;
  relationship?: string;
  translated?: boolean;
  text: string;
}

export const recommendationsData: RecommendationItem[] = [
  {
    author: 'Luiz Leduino Salles-Neto',
    authorUrl: 'https://www.linkedin.com/in/luiz-leduino/',
    role: 'Full Professor at Federal University of São Paulo (UNIFESP)',
    relationship: 'Professor',
    translated: true,
    text: 'João Assaoka was ==one of the best students I have had throughout 22 years of teaching==. He has strong skills in problem-solving, teamwork, oral and written communication, as well as ==broad knowledge in computer science, data science, and optimization==.',
  },
  {
    author: 'Diogo Santos',
    authorUrl: 'https://www.linkedin.com/in/diogo-santos-2b72a7217/',
    role: 'Data & Analytics Intern at Itaú Unibanco',
    relationship: 'Teammate',
    translated: true,
    text: `João is a remarkable student. ==In every opportunity I had to work with him, the results were excellent.== Beyond his dedication and competence, he is always willing to teach and help. He has ==deep knowledge in Data Science and Machine Learning==, and every conversation with him on the subject is a great learning opportunity. I am certain he will deliver great results in all challenges ahead.`,
  },
];
