/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to all of your template files to enable purging of unused styles
  content: [
    './index.html',                // Main HTML file
    './src/**/*.{js,jsx,ts,tsx}',  // React component files
  ],
  // Default theme configuration
  theme: {
    extend: {
      // Customizations for the default theme
      colors: {
        primary: '#1e3a8a',  // Example: Custom primary color
        secondary: '#9333ea', // Example: Custom secondary color
      },
      spacing: {
        128: '32rem',        // Custom spacing value
        144: '36rem',
      },
      borderRadius: {
        xl: '1.5rem',       // Custom border radius
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: Custom font
      },
    },
  },
  // Optionally enable dark mode (can be 'media' or 'class')
  darkMode: 'class', // Use 'class' to toggle manually, or 'media' for OS settings
  // Plugins to extend Tailwind's functionality
  plugins: [
    require('@tailwindcss/forms'),  // Tailwind forms plugin for better form styling
    require('@tailwindcss/typography'), // Typography plugin for rich text
    require('@tailwindcss/aspect-ratio'), // Aspect ratio utility plugin
  ],
};
