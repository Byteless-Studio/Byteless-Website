/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // The Byteless blue, used only for accents
        blue: { DEFAULT: '#164baa', dark: '#103a86', light: '#eaf0fb' },
        // The Byteless cream: alternate surface bands and text on black
        cream: '#f0ebe2',
      },
      borderRadius: { DEFAULT: '4px' },
      boxShadow: {
        btn: '0 1px 2px rgba(0,0,0,0.08)',
        card: '0 0 0 1px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.05)',
        lift: '0 0 0 1px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.08)',
      },
      maxWidth: { site: '1160px' },
      keyframes: {
        rise: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: { rise: 'rise 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both' },
    },
  },
  plugins: [],
}
