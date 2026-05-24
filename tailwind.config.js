/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#121212',
          700: '#1c1c1c',
          400: '#888888',
          200: '#cccccc',
          100: '#e5e5e5',
        },
        led: {
          red: '#ff2a2a',
          redGlow: 'rgba(255, 42, 42, 0.4)',
          white: '#ffffff',
          whiteGlow: 'rgba(255, 255, 255, 0.3)',
        }
      },
      fontFamily: {
        technical: ['"Share Tech Mono"', 'monospace'],
        editorial: ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'noise-pattern': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.015%22/%3E%3C/svg%3E')",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}
