/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'lightpink': '#fad3d8',
      'midpink': {
        DEFAULT:'#e090ad',
        transparent: '#e090ad80',
        extra: '#e090ad50'
      },
      'teal': {
        DEFAULT: '#039f9b',
        transparent: '#039f9b20',
      },
      'green': {
        DEFAULT:'#066255',
        transparent:'#06625550' 
      },
      'darkgreen': '#00312e',
    
    },
    extend: {},
  },
  plugins: [],
}

