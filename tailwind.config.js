const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: '#1565c0',
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    })]
}