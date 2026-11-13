export interface SocialLink {
  name: string;
  href: string;
  icon: 'scholar' | 'huggingface' | 'github' | 'linkedin' | 'email';
}

export interface NavSection {
  label: string;
  href: string;
}

export interface ProfileData {
  name: string;
  fullName: string;
  statusBadge: string;
  title: string;
  bio: string;
  keywords: string[];
  languages: string[];
  cvUrl: string;
  socialLinks: SocialLink[];
  navSections: NavSection[];
}

export const profileData: ProfileData = {
  name: 'João Assaoka',
  fullName: 'João Victor Assaoka Ribeiro',
  statusBadge: 'Generative AI Engineer & CS PhD Researcher',
  title: 'Generative AI Engineer & CS PhD Researcher',
  bio: 'Generative AI Engineer and CS PhD researcher at UNIFESP. I investigate methodologies for efficient post-training and real-world LLM operationalization.',
  keywords: [
    'Python',
    'IA',
    'Deep Learning',
    'Agentes',
    'LLM',
    'RAG',
    'Hugging Face',
    'LangChain',
    'vLLM',
    'Streamlit',
    'Claude Code',
    'Antigravity',
  ],
  languages: [
    'Portuguese (Native)',
    'English (Advanced)',
  ],
  cvUrl: '/vitae.pdf',
  socialLinks: [
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=4XKCFF4AAAAJ',
      icon: 'scholar',
    },
    {
      name: 'Hugging Face',
      href: 'https://huggingface.co/Assaoka',
      icon: 'huggingface',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Assaoka',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/assaoka',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      href: 'mailto:joao.assaoka@unifesp.br',
      icon: 'email',
    },
  ],
  navSections: [
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Awards', href: '#awards' },
    { label: 'Recommendations', href: '#recommendations' },
  ],
};
