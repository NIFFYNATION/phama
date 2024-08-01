/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    contain: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary01: '#0152A8',
        primary02: '#0FE3AF',
        primary03: '#143450',
        secondary01: '#DCEDFE',
        secondary02: '#E5F2EF',
        secondary03: '#F1F1F1',
      },

      fontFamily: {

      }
    },
  },
  plugins: [],
}

