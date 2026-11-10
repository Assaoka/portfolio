import type { ContentItem } from '../types/content';

export const papersData: ContentItem[] = [
  {
    title: 'United Experts: Efficient Multi-Task Sentiment Analysis in Portuguese via Model Merging',
    subtitle: '**João Assaoka**, Evangelos Milios, Vlado Keselj, José Vitor Requena, Diego Miranda, Lilian Berton',
    text: `Reduced multi-task model creation time to just 0.5% of standard fine-tuning by merging specialist LLM checkpoints without performance degradation. Joint work during research visit with Dalhousie University.`,
    super_tag: 'ENIAC 2026',
    tags: ['Model Merging', 'Multi-Task Learning', 'Resource-Efficient NLP'],
    urls: {
      'Read Publication': 'https://sol.sbc.org.br/index.php/eniac/article/view/47030',
    },
  },
  {
    title: 'Evaluating Reference-Free Summarization Quality Metrics for Portuguese: A Study with Human Judgments in Financial News',
    subtitle: '**João Victor Assaoka Ribeiro**, Thomas Correia, José Vitor Requena, Lilian Berton',
    text: `Study analyzing reference-free summarization quality metrics for financial news in Portuguese, demonstrating that question-answering decomposition outperforms monolithic LLM judges against human annotators.`,
    super_tag: 'PROPOR 2026',
    tags: ['Summarization Evaluation', 'NLP', 'Financial News'],
    urls: {
      'Read Publication': 'https://aclanthology.org/2026.propor-1.89/',
    },
  },
  {
    title: 'Mitigating Imbalance in Portuguese Toxicity Classification via LLM Augmentation and Cross-Dataset Label Propagation',
    subtitle: 'José Vitor Requena, **João Assaoka**, Lilian Berton',
    text: `Investigation into data scarcity and class imbalance in toxic speech detection, evaluating LLM-based synthetic generation and cross-dataset label propagation strategies in Portuguese.`,
    super_tag: 'ENIAC 2026',
    tags: ['Data Augmentation', 'Toxicity Classification', 'Imbalanced Learning'],
    urls: {
      'Read Publication': 'https://sol.sbc.org.br/index.php/eniac/article/view/47028',
    },
  },
  {
    title: 'A Multimodal Framework for Financial Fake News Detection for Brazilian Portuguese',
    subtitle: 'José Vitor Requena, **João Assaoka**, Lilian Berton',
    text: `Multimodal architecture combining textual and visual signals for detecting financial misinformation and deceptive news in Brazilian Portuguese.`,
    super_tag: 'PROPOR 2026',
    tags: ['Multimodal NLP', 'Fake News Detection', 'Financial Domain'],
    urls: {
      'Read Publication': 'https://aclanthology.org/2026.propor-1.23/',
    },
  },
  {
    title: 'Benchmarking Text Classifiers for Economic News in Brazilian Portuguese: In-Domain Quality and Out-of-Distribution Generalization',
    subtitle: 'Diego Miranda, **João Assaoka**, Lilian Berton',
    text: `Extensive benchmark of neural architectures evaluating both in-domain performance and out-of-distribution robustness across economic news corpora.`,
    super_tag: 'ENIAC 2026',
    tags: ['Benchmarking', 'Out-of-Distribution', 'Financial NLP'],
    urls: {
      'Read Publication': 'https://sol.sbc.org.br/index.php/eniac/article/view/46857',
    },
  },
  {
    title: 'Negotiating LLMs for Enhanced Hate Speech Classification and Interpretability',
    subtitle: '**João Assaoka**, Lilian Berton',
    text: `Multi-LLM negotiation framework to improve classification precision and generate faithful rationales for toxicity detection in Portuguese.`,
    super_tag: 'ENIAC 2025',
    tags: ['LLM Collaboration', 'Explainability', 'Toxicity Detection'],
    urls: {
      'Read Publication': 'https://sol.sbc.org.br/index.php/eniac/article/view/38847',
    },
  },
];
