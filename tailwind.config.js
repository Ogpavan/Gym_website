/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      keyframes: {
        roll: {
          '0%': { transform: 'rotateX(45deg) rotateY(-45deg)' },
          '25%': { transform: 'rotateX(-45deg) rotateY(-45deg)' },
          '50%': { transform: 'rotateX(45deg) rotateY(45deg)' },
          '75%': { transform: 'rotateX(-45deg) rotateY(45deg)' },
          '100%': { transform: 'rotateX(45deg) rotateY(-45deg)' }
        }
      },
      animation: {
        roll: 'roll 5s infinite',
      }
    }
  }
};
