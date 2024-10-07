/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CB997E',   
        secondary: '#DDBEA9', 
        accent: '#A5A58D',    
        dark: '#6B705C'      
      },
    },
  },
  plugins: [], 
};

