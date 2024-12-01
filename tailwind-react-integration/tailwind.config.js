/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Define paths for purging unused styles
  darkMode: "media", // or 'class' for manual dark mode switching
  theme: {
    extend: {
      colors: {
        customBlue: "#1DA1F2", // Example of extending the theme
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus", "active"], // Add additional variants
      textColor: ["dark", "group-hover"], // Allow specific styles for dark mode or group hover
    },
  },
  plugins: [],
};
