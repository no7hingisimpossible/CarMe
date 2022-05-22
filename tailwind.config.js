module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        light: {

          primary: "#ffb700",
          secondary: "#ffb702",
          accent: "#292b2c",

          neutral: "#010101",

          "base-100": "#FFFFFF",

          info: "#98A8DD",

          success: "#1BBB70",

          warning: "#DF7E07",

          error: "#FA5C5C",
        },
      },
      
    ],
  },

  plugins: [require("daisyui")],
}