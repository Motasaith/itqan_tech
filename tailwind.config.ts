import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      colors: {
        paper: '#fdfbf7', // Soft notebook paper color
        ink: '#1e293b', // Dark slate for text
        primary: '#4f46e5', // Indigo
        accent: '#f59e0b', // Amber/Yellow (like a highlighter)
        sketch: '#cbd5e1', // Light gray for subtle sketch lines
      },
      backgroundImage: {
        'graph-paper': 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
        'lined-paper': 'linear-gradient(transparent 95%, #cbd5e1 95%)',
        'notebook-pattern': 'linear-gradient(to right, rgba(203, 213, 225, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 213, 225, 0.4) 1px, transparent 1px)',
      }
    }
  },
  plugins: [],
};
export default config;
