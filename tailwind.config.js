/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B0000', // Deep burgundy
          dark: '#6B0000',
          light: '#AB0000',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          dark: '#B48F17',
          light: '#F4CF57',
        },
        accent: {
          DEFAULT: '#C87533', // Warm ochre
          dark: '#A85513',
          light: '#E89553',
        },
        dark: '#1A1A1A',
        light: '#F9F9F9',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 