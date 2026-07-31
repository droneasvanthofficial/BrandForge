/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          cream: '#f8f4e9',
          soil: '#8a5a44',
          clay: '#b87352',
          forest: '#1f4d3a',
          moss: '#3d6b4f',
          leaf: '#7ca86a',
          gold: '#c79a3b',
          bark: '#4a3428',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 30px -20px rgba(31, 77, 58, 0.55)',
      },
      backgroundImage: {
        organic: 'radial-gradient(circle at 20% 20%, rgba(124, 168, 106, 0.16), transparent 45%), radial-gradient(circle at 80% 0%, rgba(199, 154, 59, 0.12), transparent 35%), radial-gradient(circle at 20% 100%, rgba(138, 90, 68, 0.15), transparent 35%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out forwards',
      },
    },
  },
  plugins: [],
}
