/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 4px -0px rgba(0, 0, 0, 0.1), 0 2px 4px -0px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

