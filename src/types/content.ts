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

