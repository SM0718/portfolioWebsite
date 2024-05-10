/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rightIn: {
          '0%': { right: '-400px' },
          '100%': { right: '0px' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        bringIn: 'rightIn 2s linear',
        rotateRight: 'rotate 1s linear'
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: [],
}

