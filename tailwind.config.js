/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md}",
    "./pages/**/*.{js,ts,jsx,tsx,md}",
    "./components/**/*.{js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdebd8',
          200: '#fcceaa',
          300: '#f9ad7f',
          400: '#f58054',
          500: '#f2683c',
          600: '#e24e28',
          700: '#c93e1f',
          800: '#a5351a',
          900: '#852c14',
        },
        secondary: {
          50: '#f5f9ff',
          100: '#ebf3ff',
          200: '#d9e7ff',
          300: '#bad8ff',
          400: '#8fc0ff',
          500: '#5aa6ff',
          600: '#3688ff',
          700: '#1974ff',
          800: '#005fcc',
          900: '#004a99',
        },
        accent: {
          50: '#f3f0ff',
          100: '#e5e0ff',
          200: '#cbc5ff',
          300: '#a5a0ff',
          400: '#7d7aff',
          500: '#5454ff',
          600: '#3d39e6',
          700: '#2d2ac1',
          800: '#211f94',
          900: '#17146a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}