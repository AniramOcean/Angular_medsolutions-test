export interface Card {
  id: number;
  image_url?: string;
  teaser?: string;
  news_category: any;
  title: string;

  created_at?: string;
  text?: string;
  source?: string;
}
