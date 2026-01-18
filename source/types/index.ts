import type { MDXModule } from 'mdx/types';

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
