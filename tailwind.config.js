module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        light: {

          primary: "#ffb700",
          secondary: "#ffb702",
          accent: "#292b2c",

          neutral: "#010101"

         
        },
      },
      
    ],
  },

  plugins: [require("daisyui")],
}