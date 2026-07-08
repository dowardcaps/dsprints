/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fb: {
          blue: "#1877F2",
          bluedark: "#0D5CD1",
          bluedeep: "#0A3E9E",
          ink: "#0B1620",
          slate: "#4B5B67",
          mist: "#F0F2F5",
          card: "#FFFFFF",
          line: "#E4E8ED",
          green: "#31A24C",
          amber: "#F5A623",
        },
      },
      fontFamily: {
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,22,32,0.06), 0 8px 24px -12px rgba(11,22,32,0.12)",
        pop: "0 4px 14px rgba(24,119,242,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
