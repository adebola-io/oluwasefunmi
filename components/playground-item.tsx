import type { JSX } from 'retend/jsx-runtime';

export interface PlaygroundItemProps {
  id?: string;
  preview: () => JSX.Template;
  name: string;
  description: string;
  link: string;
}

export const PlaygroundItem = (props: PlaygroundItemProps) => {
  return <h1>Hello world.</h1>;
};
