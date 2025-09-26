/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#f8d7e8',
          300: '#f2b8d4',
          400: '#e88bb8',
          500: '#d9669a',
          600: '#c74d7c',
          700: '#a63d62',
          800: '#8a3552',
          900: '#6f2c42',
          950: '#4a1d2c',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f5',
          200: '#faf2e9',
          300: '#f6e6d3',
          400: '#f0d4b8',
          500: '#e9c299',
          600: '#dfa97a',
          700: '#d08f5a',
          800: '#b8774a',
          900: '#9c603e',
        },
        soft: {
          50: '#fef7f7',
          100: '#fdeeec',
          200: '#fadbd7',
          300: '#f6c0b8',
          400: '#f09d8f',
          500: '#e87c6b',
          600: '#d65d4c',
          700: '#b74d3e',
          800: '#984036',
          900: '#7d372f',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
