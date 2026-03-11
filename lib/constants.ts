// src/lib/constants.ts
import { BirthdayTheme, FormStep } from "@/types";

export const LIFE_STAGES = [
  {
    age: "0-1",
    title: "The Grand Arrival",
    emoji: "👶",
    description:
      "A tiny miracle enters the world. Every giggle, every first glance — the beginning of a beautiful story that will unfold for a lifetime.",
    color: "#FDA4AF",
    bgColor: "#4C0519",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80",
    subtitle: "Where it all begins",
    quote: "Every child begins the world again.",
  },
  {
    age: "2-5",
    title: "Tiny Explorer",
    emoji: "🧒",
    description:
      "First steps turn into running. First words turn into endless questions. The world is a playground of infinite wonder and discovery.",
    color: "#FCD34D",
    bgColor: "#451A03",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    subtitle: "Wonder in every step",
    quote: "Children see magic because they look for it.",
  },
  {
    age: "6-12",
    title: "Adventure Begins",
    emoji: "🎒",
    description:
      "School days bring new friendships, first adventures, and the discovery of passions that might last a lifetime. Every day is a new chapter.",
    color: "#14B8A6",
    bgColor: "#042F2E",
    image:
      "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?w=800&q=80",
    subtitle: "Friendships & first dreams",
    quote: "The adventure of life is to learn.",
  },
  {
    age: "13-17",
    title: "Rising Star",
    emoji: "⭐",
    description:
      "Identity takes shape. Dreams grow bolder. From first heartbeats of independence to the courage of self-expression — a star begins to shine.",
    color: "#A855F7",
    bgColor: "#3B0764",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    subtitle: "Finding your light",
    quote: "Youth is the gift of nature, but age is a work of art.",
  },
  {
    age: "18-25",
    title: "World Awaits",
    emoji: "🌍",
    description:
      "The doors of the world swing wide open. Independence, ambition, first real adventures — the horizon stretches endlessly with promise and possibility.",
    color: "#3B82F6",
    bgColor: "#172554",
    image:
      "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=800&q=80",
    subtitle: "Endless possibilities",
    quote: "The world belongs to those who dream.",
  },
  {
    age: "26-35",
    title: "Building Legacy",
    emoji: "🏗️",
    description:
      "Careers blossom, relationships deepen, and purpose crystallizes. This is the decade of creation — building the foundation of a remarkable life.",
    color: "#F97316",
    bgColor: "#431407",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    subtitle: "Creating your mark",
    quote: "The best way to predict the future is to create it.",
  },
  {
    age: "36-50",
    title: "Golden Chapter",
    emoji: "✨",
    description:
      "Wisdom meets vitality. Success is redefined. Life's richest experiences unfold — deeper connections, greater achievements, and the beauty of knowing yourself.",
    color: "#FBBF24",
    bgColor: "#451A03",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    subtitle: "Wisdom meets joy",
    quote: "Age is an issue of mind over matter.",
  },
  {
    age: "51-65",
    title: "Silver Crown",
    emoji: "👑",
    description:
      "A crown earned through decades of living, loving, and learning. Every silver strand tells a story of resilience, grace, and hard-won wisdom.",
    color: "#C084FC",
    bgColor: "#3B0764",
    image:
      "https://images.unsplash.com/photo-1447005497901-b3e9ee359928?w=800&q=80",
    subtitle: "Grace & experience",
    quote: "Growing old is mandatory. Growing up is optional.",
  },
  {
    age: "66+",
    title: "Living Legend",
    emoji: "🌟",
    description:
      "A lifetime of stories, love, laughter, and legacy. Every wrinkle is a medal. Every memory is a treasure. You are a living testament to a life well lived.",
    color: "#F43F5E",
    bgColor: "#4C0519",
    image:
      "https://images.unsplash.com/photo-1517456215183-9a2c3a1f7c93?w=800&q=80",
    subtitle: "A lifetime of stories",
    quote: "The best is yet to come.",
  },
];

export const BIRTHDAY_THEMES: BirthdayTheme[] = [
  {
    id: "classic",
    name: "Classic Celebration",
    description: "Timeless birthday vibes with confetti and cake",
    primaryColor: "#F43F5E",
    secondaryColor: "#A855F7",
    accentColor: "#FBBF24",
    backgroundStyle: "gradient-birthday",
    particleStyle: "confetti",
    fontStyle: "classic",
  },
  {
    id: "elegant",
    name: "Golden Elegance",
    description: "Sophisticated and classy with golden accents",
    primaryColor: "#F59E0B",
    secondaryColor: "#D97706",
    accentColor: "#FCD34D",
    backgroundStyle: "gradient-golden",
    particleStyle: "sparkles",
    fontStyle: "elegant",
  },
  {
    id: "playful",
    name: "Party Pop",
    description: "Fun, colorful, and full of energy",
    primaryColor: "#14B8A6",
    secondaryColor: "#F97316",
    accentColor: "#F43F5E",
    backgroundStyle: "gradient-aurora",
    particleStyle: "confetti",
    fontStyle: "playful",
  },
  {
    id: "romantic",
    name: "Sweet Romance",
    description: "Soft, warm, and full of love",
    primaryColor: "#FB7185",
    secondaryColor: "#FDA4AF",
    accentColor: "#FECDD3",
    backgroundStyle: "gradient-candy",
    particleStyle: "hearts",
    fontStyle: "romantic",
  },
  {
    id: "cosmic",
    name: "Cosmic Dream",
    description: "Out of this world celebration among the stars",
    primaryColor: "#A855F7",
    secondaryColor: "#6366F1",
    accentColor: "#14B8A6",
    backgroundStyle: "gradient-night",
    particleStyle: "stars",
    fontStyle: "modern",
  },
];

export const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    title: "Who's the Star?",
    description: "Tell us about the birthday person",
    icon: "Star",
    fields: ["recipientName", "age", "birthDate"],
  },
  {
    id: 2,
    title: "Your Connection",
    description: "How do you know this amazing person?",
    icon: "Heart",
    fields: ["senderName", "relationship"],
  },
  {
    id: 3,
    title: "Personal Touch",
    description: "Add your heartfelt message and memories",
    icon: "MessageCircle",
    fields: ["personalMessage", "memories"],
  },
  {
    id: 4,
    title: "Style It Up",
    description: "Choose the perfect look for their wish",
    icon: "Palette",
    fields: ["theme", "favoriteColor", "hobbies"],
  },
  {
    id: 5,
    title: "Preview & Share",
    description: "Review and share the magic",
    icon: "Share2",
    fields: [],
  },
];

export const RELATIONSHIPS = [
  "Best Friend",
  "Partner",
  "Mother",
  "Father",
  "Sister",
  "Brother",
  "Son",
  "Daughter",
  "Grandmother",
  "Grandfather",
  "Aunt",
  "Uncle",
  "Cousin",
  "Colleague",
  "Teacher",
  "Mentor",
  "Neighbor",
  "Other",
];

export const HOBBY_OPTIONS = [
  "🎨 Art & Design",
  "🎵 Music",
  "📚 Reading",
  "🎮 Gaming",
  "⚽ Sports",
  "🍳 Cooking",
  "✈️ Traveling",
  "📷 Photography",
  "🌿 Gardening",
  "💻 Technology",
  "🎬 Movies",
  "💃 Dancing",
  "🧘 Yoga",
  "🎭 Theater",
  "🏋️ Fitness",
  "🐾 Pets",
];

export const COLOR_OPTIONS = [
  { name: "Rose", value: "#F43F5E" },
  { name: "Purple", value: "#A855F7" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Teal", value: "#14B8A6" },
  { name: "Green", value: "#22C55E" },
  { name: "Yellow", value: "#FBBF24" },
  { name: "Orange", value: "#F97316" },
  { name: "Pink", value: "#EC4899" },
  { name: "Red", value: "#EF4444" },
  { name: "Indigo", value: "#6366F1" },
];