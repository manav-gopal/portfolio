/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #ef233c",
      },
    },
    colors: {
      primaryBlue: { // Blue
        50: "#e3f2ff",    // Very light blue
        100: "#b9e0ff",   // Light blue
        200: "#8acaff",   // Lighter blue
        300: "#5aaaff",   // Light Dodger Blue
        400: "#2d8fff",   // Slightly darker Dodger Blue
        500: "#1E90FF",   // Primary Dodger Blue
        600: "#007ae6",   // Darker blue
        700: "#005cb8",   // Dark blue
        800: "#003e89",   // Very dark blue
        900: "#00215a",   // Deep dark blue
        950: "#001331",   // Nearly black with a blue tint
      },
      primary: { // red
        50: "#ffe5e9",    // Very light red
        100: "#ffccd3",   // Light red
        200: "#ff99a7",   // Lighter red
        300: "#ff667a",   // Medium light red
        400: "#ff334e",   // Brighter red
        500: "#ef233c",   // Primary red
        600: "#c11b30",   // Darker red
        700: "#931323",   // Dark red
        800: "#650c16",   // Very dark red
        900: "#37060a",   // Deep dark red
        950: "#1b0305",   // Nearly black with a red tint
      },
      grayscale: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#515152",
        800: "#464646",
        900: "#292929",
        950: "#16161b",
      },
    },
  },
  plugins: [],
}

