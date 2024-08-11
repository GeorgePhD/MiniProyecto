/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all relevant files are included
  ],
  theme: {
    extend: {
      colors: {
        'rm-blue-100': '#367CF4',  // Custom color rm-blue-100
        'rm-blue-200': '#367CC8',  // Custom color rm-blue-200
      },
    },
  },
  plugins: [],
};
