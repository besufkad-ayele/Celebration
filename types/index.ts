// src/types/index.ts
export interface BirthdayTheme {
  id: string;
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundStyle: string;
  particleStyle: "confetti" | "stars" | "hearts" | "bubbles" | "sparkles";
  fontStyle: "elegant" | "playful" | "modern" | "classic" | "romantic";
}

export interface TimelineEvent {
  age: number;
  year: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ParticleConfig {
  count: number;
  colors: string[];
  speed: number;
  size: { min: number; max: number };
  shape: "circle" | "square" | "star" | "heart";
  direction: "up" | "down" | "random";
}

export interface AnimationSequence {
  id: string;
  name: string;
  duration: number;
  steps: AnimationStep[];
}

export interface AnimationStep {
  type: "text" | "image" | "particle" | "transition" | "cake" | "candle";
  content?: string;
  duration: number;
  delay: number;
  animation: string;
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  fields: string[];
}