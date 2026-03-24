import type { JSX } from "retend/jsx-runtime";

export interface PlaygroundItem {
  path: string;
  title: string;
  description: () => JSX.Element;
  icon: () => JSX.Element;
}

export interface Painting {
  id: number;
  title: string;
  artist: string;
  year: string;
  filename: string;
  description: string;
  medium: string;
  dimensions: string;
  location: string;
  style: string;
  details: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  height: "short" | "medium" | "tall";
  description: string;
  material: string;
  care: string[];
  sizes: string[];
  colors: string[];
}
