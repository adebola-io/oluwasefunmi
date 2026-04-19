export interface BookmarkOpenGraph {
  title: string;
  description: string;
  siteName: string;
}

export interface Bookmark {
  id: string;
  link: string;
  tags: string[];
  notes: string;
  image: string;
  themeColor: string;
  openGraph: BookmarkOpenGraph;
}
