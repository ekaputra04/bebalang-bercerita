export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export interface IBlog {
  metadata: Metadata;
  slug: string;
  source: string;
}
