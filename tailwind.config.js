/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,css}", // Add CSS files here if needed
  ],
  theme: {
    extend: {
      screens: {
        'sphone': { 'max': '320px' },
        'phone': '320px',
        'tablet': '640px',
        'desktop': '1024px',
        'wide': '1440px',
      },
      colors: {
        // Custom colors
        dark: '#1A1E1F',
        light: '#903AFF',
        normal: '#D434FE',
        span: '#FF26B9',
      },
      // Define gradients using backgroundImage property
      backgroundImage: {
        // Gradient background color
        primary: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
      },
    },
  },
  plugins: [],
}
