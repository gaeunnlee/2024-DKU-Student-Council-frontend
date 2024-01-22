/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
   theme: {
      extend: {
         width: {
            '311': '311px',
         },
         animation: {
            fadeIn: 'fadeIn 0.3s ease-in-out',
            fadeOut: 'fadeOut 0.3s ease-in-out',
         },
         backgroundImage: {
            breakfast: "url('./assets/icons/breakfast.svg')",
            dinner: "url('./assets/icons/dinner.svg')",
         },

         // that is actual animation
         keyframes: (theme) => ({
            fadeIn: {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' },
            },
            fadeOut: {
               '0%': { opacity: '1' },
               '100%': { opacity: '0' },
            },
         }),
         boxShadow: {
            custom: '0 4px 3px rgba(0, 0, 0, 0.25)',
         },
      },
   },
   plugins: [],
};
