export interface Bookmark {
  id: string;
  link: string;
  tags: string[];
  notes: string;
  image: string;
  themeColor: string;
  openGraph: {
    title: string;
    description: string;
    siteName: string;
  };
}
