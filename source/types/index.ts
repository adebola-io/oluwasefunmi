import type { MDXModule } from 'mdx/types';

export interface Bookmark {
  id: string;
  link: string;
  tags: string[];
  notes: string;
  image: string;
  backgroundGradient: string;
  openGraph: {
    title: string;
    description: string;
    siteName: string;
    image: string;
  };
}

export interface Note {
  id: string;
  title: string;
  date: string;
  description: string;
  dateStr: string;
  ogImage: string;
  default: MDXModule['default'];
}

export interface NotePreviewProps {
  id: string;
  title: string;
  description: string;
  dateStr: string;
}
