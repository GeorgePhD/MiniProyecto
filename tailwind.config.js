/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'rm-blue-100': '#367CF4',  
        'rm-blue-200': '#367CC8',  
      },
    },
  },
  plugins: [],
};
