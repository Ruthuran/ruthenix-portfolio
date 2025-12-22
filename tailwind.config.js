/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#3b82f6',
        glassWhite: 'rgba(255,255,255,0.05)',
        galaxyPurple: '#7c3aed',
        cosmosGray: '#1f2937',
      },
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59,130,246,0.7)',
        'outline-soft': '0 0 15px rgba(255,255,255,0.1)',
        'star-glow': '0 0 60px rgba(99,102,241,0.4), 0 0 120px rgba(99,102,241,0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'slow-bounce': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(99,102,241,0.4)',
          },
          '50%': {
            boxShadow: '0 0 45px rgba(59,130,246,0.8), 0 0 90px rgba(99,102,241,0.6)',
          },
        },
      },
    },
  },
  plugins: [],
}
