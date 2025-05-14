import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
   
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [],
}
