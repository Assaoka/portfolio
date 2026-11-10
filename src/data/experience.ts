import type { ContentItem } from '../types/content';

export const experienceData: ContentItem[] = [
  {
    title: 'Natural Language Processing Researcher',
    subtitle: 'PARANA Research Group | FAPESP | Serasa Experian',
    period: 'Nov 2024 – Present',
    detail: 'Remote',
    text: `
- Increased correlation with human judgment by 113% (from 0.23 to 0.49) in reference-free financial news summarization evaluation, proposing and implementing task decomposition via Question Answering with LLMs in Python and LangChain.
- Accelerated multi-task retraining cycle by 99.5% (from 1h17min to 25s) while preserving 94.7% of Macro-F1, by architecting an SLM Model Merging strategy via Mergekit.
- Increased relative Macro-F1 by 31.2% in multi-class toxicity detection under imbalanced scenarios by structuring synthetic data augmentation pipelines via LLMs.
- Built a proprietary financial domain dataset (5,000+ samples), developing scraping with Selenium, a web annotation platform in Streamlit, relational modeling in PostgreSQL (Neon/SQLAlchemy), and exploratory analysis with Pandas and Matplotlib.
- Architected fine-tuning pipelines (Full, LoRA, IA3, Soft Prompts via Hugging Face) and inference (vLLM) with structured outputs, orchestrating experiments across multi-GPU NVIDIA nodes in an HPC Linux environment (Digital Research Alliance of Canada) via Slurm.
    `,
  },
  {
    title: 'Data and AI Department Manager',
    subtitle: 'SciTec Jr.',
    period: 'Dec 2024 – Jan 2026',
    detail: 'Remote',
    text: `
- Founded and structured the consultancy's dedicated Data Science and Artificial Intelligence department, leading the spin-off from the computing division and establishing new hiring criteria that enabled talent attraction across multiple engineering fields.
- Managed the lifecycle and technical delivery of 6 projects, encompassing 3 consulting initiatives for external clients and 3 internal operational automation products focused on process scalability.
- Upskilled new consultants in Data and AI competencies, designing the technical learning track and conducting training sessions in Python, exploratory data analysis (Pandas, Matplotlib), CRISP-DM methodology, interactive Streamlit interfaces, and LLM orchestration with LangChain.
    `,
  },
  {
    title: 'Generative AI Engineer',
    subtitle: 'Ativamente - Enactus UNIFESP São José dos Campos',
    period: 'Feb 2025 – Jul 2025',
    detail: 'Remote',
    text: `
- Reduced clinical report generation time by over 90% (from 1–3 hours to 5 minutes) by architecting an integrated data solution with a Streamlit interface and an automated LLM summarization pipeline.
- Developed an intelligent conversational agent (Text-to-SQL / Chatbot) capable of interpreting natural language queries and extracting on-demand analytical metrics from cognitive workshop data and elderly participant medical records.
- Centralized and standardized the workshop data ecosystem, replacing fragmented legacy spreadsheets with a structured relational architecture and input forms.
    `,
    urls: {
      'Video Demo':
        'https://www.linkedin.com/posts/assaoka_impactosocial-inteligenciaartificial-datascience-ugcPost-7376608320402554880-8AZP/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyn-X4Bum6lMYdO9wfc_GieQOxCXYj2FIA',
    },
  },
  {
    title: 'Prescriptive Maintenance & XAI Researcher',
    subtitle: 'PARANA Research Group | FAPESP | IAsmin Platform | Siemens Energy',
    period: 'Jul 2023 – Dec 2024',
    detail: 'Remote',
    text: `
- Enabled operational cost savings and proactive industrial failure prevention by predicting sensor time-series degradation signals, developing and benchmarking models ranging from linear baselines (Linear Regression) to gradient-boosted ensembles (XGBoost) and deep recurrent architectures (LSTM).
- Implemented a multi-technique Explainable Artificial Intelligence (XAI) framework using SHAP, ALE (Accumulated Local Effects) plots, and partial dependence (PDP 1D/2D), diagnosing complex causal interactions to validate prediction alignment with domain engineering knowledge and increase decision-making transparency.
- Co-created the IAsmin educational platform, democratizing practical XAI and Industry 4.0 predictive maintenance methodologies in Portuguese through 7 hands-on tutorials detailing theoretical foundations and interpretability implementations.
    `,
    urls: {
      'IAsmin Platform': 'https://blog-ia-unifesp.vercel.app/',
    },
  },
];
