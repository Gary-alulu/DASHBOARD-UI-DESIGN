/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sidebar-dark': '#1C1C1E',
        'sidebar-darker': '#141415',
        'lime-active': '#C6F34D',
        'lime-active-dark': '#8FB82E',
        'pastel-yellow': '#FFE690',
        'pastel-yellow-dark': '#B39B3C',
        'soft-purple': '#DAD4F7',
        'soft-purple-dark': '#6C63A3',
        'mint-green': '#D8F5C6',
        'mint-green-dark': '#6B9E52',
        'status-blue': '#B8D7FF',
        'status-blue-dark': '#2C5999',
        'status-orange': '#FFD6B2',
        'status-orange-dark': '#B36B2C'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'glow-lime': '0 0 15px rgba(198, 243, 77, 0.5)',
        'glow-purple': '0 0 15px rgba(218, 212, 247, 0.5)',
        'glow-mint': '0 0 15px rgba(216, 245, 198, 0.5)',
        'glow-blue': '0 0 15px rgba(184, 215, 255, 0.5)',
        'glow-orange': '0 0 15px rgba(255, 214, 178, 0.5)'
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      }
    },
  },
  plugins: [],
}