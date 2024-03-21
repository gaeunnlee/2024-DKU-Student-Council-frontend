import { Palette } from './src/constants/colors';
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
   mode: 'jit', // calc 사용 모드
   theme: {
      extend: {
         colors: { ...Palette },
         animation: {
            fadeIn: 'fadeIn 0.3s ease-in-out',
            fadeOut: 'fadeOut 0.3s ease-in-out',
            // 기존 애니메이션 확장
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
         backgroundImage: {
            breakfast: "url('./assets/icons/breakfast.svg')",
            dinner: "url('./assets/icons/dinner.svg')",
         },
         keyframes: {
            // 기존 키프레임 확장
            'accordion-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: '0' },
            },
         },
         boxShadow: {
            custom: '0 4px 3px rgba(0, 0, 0, 0.25)',
         },
      },
   },
   plugins: [],
};
