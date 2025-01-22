/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Archivos de tu proyecto
    './public/**/*.html', // Archivos estáticos en public
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#004aad',
        'custom-purple': '#cb6ce6',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #004aad, #cb6ce6)',
      },
    },
  },
  plugins: [],
};
