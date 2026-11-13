export interface ContentItem {
  title: string;
  subtitle?: string;
  period?: string;
  detail?: string;
  text?: string;
  super_tag?: string;
  tags?: string[];
  urls?: Record<string, string>;
}

export interface PaperItem extends ContentItem {
  year: number;
  venue: string;
  firstAuthor?: boolean;
  abstract?: string;
  bibtex?: string;
  citations?: number;
  previewImage?: string;
}

