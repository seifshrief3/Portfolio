/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08080C',
        surface: '#111117',
        surface2: '#15151D',
        border: '#1F1F29',
        text: '#F2F2F5',
        muted: '#8C8C9A',
        accent: {
          DEFAULT: '#635BFF',
          dim: '#4B45C4',
          light: '#8E87FF',
        },
        teal: {
          DEFAULT: '#2DD4BF',
          dim: '#1FAE9C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,91,255,0.25), transparent)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99,91,255,0.15), 0 8px 40px -8px rgba(99,91,255,0.35)',
        'glow-teal': '0 0 0 1px rgba(45,212,191,0.15), 0 8px 40px -8px rgba(45,212,191,0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 8s ease-in-out infinite',
        'float-delay': 'float 10s ease-in-out infinite 1.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-30px)' },
        },
      },
    },
  },
  plugins: [],
}
