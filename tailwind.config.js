/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{
        bounce1: {
          '0%, 20%,50%,80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-100%)' },
          '60%': { transform: 'translateY(-20px)' }
        }
        
      },animation:{
        'bounce1':'bounce1 2s ease-in-out'
      }
    },
  },
  plugins: [],
};
