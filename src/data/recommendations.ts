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
    role: 'Full Professor @ Federal University of São Paulo (UNIFESP)',
    relationship: 'Professor',
    translated: true,
    text: 'João Assaoka was ==one of the best students I have had throughout 22 years of teaching==. He has strong skills in problem-solving, teamwork, oral and written communication, as well as ==broad knowledge in computer science, data science, and optimization==.',
  },
  {
    author: 'Diogo Santos',
    authorUrl: 'https://www.linkedin.com/in/diogo-santos-2b72a7217/',
    role: 'Data & Analytics Intern @ Itaú Unibanco',
    relationship: 'Teammate',
    translated: true,
    text: `João is a remarkable student. In every opportunity I had to work with him, the results were excellent. Beyond his dedication and competence, he is always willing to teach and help. ==He has deep knowledge in Data Science and Machine Learning, and every conversation with him on the subject is a great learning opportunity.== I am certain he will deliver great results in all challenges ahead.`,
  },
  {
    author: 'Ana Luiza Bocato da Silva',
    authorUrl: 'https://www.linkedin.com/in/ana-luiza-bocato-da-silva-b92618271/',
    role: 'Data & AI Manager @ SciTecJr. & AI Researcher @ PARANA',
    relationship: 'Direct Report',
    translated: true,
    text: `João was an excellent instructor at SciTec Jr.! He always brought new technologies for us to learn, leading activities with great enthusiasm. ==Beyond demonstrating deep technical mastery, he was extremely proactive in sharing his knowledge== and was always ready to support us and answer questions. He is a professional who truly loves teaching and makes a difference in any team.`,
  },
  {
    author: 'Jadson Denner Albino',
    authorUrl: 'https://www.linkedin.com/in/jadson-denner-a-539b55102/',
    role: 'Software Engineer @ Ericsson',
    relationship: 'Manager',
    translated: true,
    text: `I worked alongside Assaoka during my time managing the Computing department at SciTec Jr. and closely followed his individual growth, especially regarding ==the application of Data Science tools and the use of Artificial Intelligence to drive improvements across all company departments==. As a junior entrepreneur and Data student, Assaoka played a key role in expanding the multidisciplinarity of SciTec Jr.'s Computing area, helping diversify our service portfolio beyond web development. ==His work and expertise in Data were fundamental to enabling new solutions and winning clients in this segment throughout 2025.==`,
  },
];
