/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        rotateone: {
          '0%': {transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0deg)'},
          '100%': {transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)'}
        },
        rotatetwo: {
          '0%': {transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0deg)'},
          '100%': {transform: 'rotateX(50deg) rotateY(10deg) rotateZ(360deg)'}
        },
        rotatethree: {
          '0%': {transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0deg)'},
          '100%': {transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)'}
        },
        blurtext: {
          '0%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(4px)' }
        }

      },

      animation: {
        loadone: 'rotateone 1s linear infinite',
        loadtwo: 'rotatetwo 1s linear infinite',
        loadthree: 'rotatethree 1s linear infinite',

      }
    },
  },
  plugins: [],
}
