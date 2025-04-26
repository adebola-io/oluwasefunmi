import type { NotePreviewProps } from '@/components/note-preview';
import fs from 'node:fs';
import path from 'node:path';

const contentDir = path.join(process.cwd(), 'content/markdown');
const items: NotePreviewProps[] = [];

const directories = fs.readdirSync(contentDir);

for (const dir of directories) {
  const filePath = path.join(contentDir, dir, 'page.mdx');
  if (fs.existsSync(filePath)) {
    const markdownContent = await import(/* @vite-ignore */ filePath);

    items.push({
      id: markdownContent.id,
      title: markdownContent.title,
      description: markdownContent.description,
      dateStr: markdownContent.dateStr,
    });
  }
}

export const noteList: NotePreviewProps[] = items.sort((a, b) => {
  const id = a.id?.split('-').slice(0, -1).join('-');
  const id2 = b.id?.split('-').slice(0, -1).join('-');
  return Number(id) - Number(id2);
});
