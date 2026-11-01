export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: { 950: '#05070d', 900: '#090d18', 800: '#0e1424', 700: '#161e35' },
        accent: { blue: '#6382ff', violet: '#9b7bff', cyan: '#4fd1e8' },
      },
      borderRadius: { card: '20px', frame: '28px' },
    },
  },
  plugins: [],
}
