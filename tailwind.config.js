/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAFAF8',
        'bg-secondary': '#F0EDE8',
        'accent-gold': '#F59E0B',
        'accent-amber': '#D97706',
        'accent-green': '#4ADE80',
        'text-primary': '#1A1A2E',
        'text-secondary': '#6B7280',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}