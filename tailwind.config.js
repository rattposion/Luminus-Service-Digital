/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#9F00FF',
        accent: '#FF00C8',
        dark: {
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2A2A2A',
        },
        neon: {
          purple: '#9F00FF',
          pink: '#FF00C8',
          blue: '#00D4FF',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'particle': 'particle 20s linear infinite',
        'neon-border': 'neon-border 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(159, 0, 255, 0.5)',
            filter: 'drop-shadow(0 0 20px rgba(159, 0, 255, 0.5))'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(159, 0, 255, 1), 0 0 60px rgba(159, 0, 255, 0.8)',
            filter: 'drop-shadow(0 0 40px rgba(159, 0, 255, 1))'
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 0, 200, 0.6)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(255, 0, 200, 1), 0 0 60px rgba(255, 0, 200, 0.8)' 
          },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(100px)', opacity: '0' },
        },
        'neon-border': {
          '0%, 100%': { 
            borderColor: 'rgba(159, 0, 255, 0.5)',
            boxShadow: '0 0 20px rgba(159, 0, 255, 0.3)'
          },
          '50%': { 
            borderColor: 'rgba(159, 0, 255, 1)',
            boxShadow: '0 0 40px rgba(159, 0, 255, 0.8)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      maxWidth: {
        '8xl': '1440px',
      }
    },
  },
  plugins: [],
};