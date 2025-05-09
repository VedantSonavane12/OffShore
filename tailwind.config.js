/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Add any custom colors if needed
      },
      // You can extend the scaling factor here if needed
      scale: {
        105: '1.05',
        // You can add more custom scales if required
      },
    },
  },
  plugins: [],
};
