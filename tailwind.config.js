/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        steelblue: {
          "100": "#1090cb",
          "200": "rgba(16, 144, 203, 0.1)",
        },
        turquoise: "#08d3bb",
        black: "#000",
        darkgray: "#969696",
        mistyrose: "#ffe5da",
        lavender: {
          "100": "#efeaff",
          "200": "#dae7ff",
        },
        lightgoldenrodyellow: "#ecffda",
        silver: {
          "100": "#c7c7c7",
          "200": "#c4c4c4",
        },
        dimgray: {
          "100": "#686868",
          "200": "#5d5d5d",
          "300": "#545454",
          "400": "#515151",
        },
        gray: {
          "100": "#868686",
          "200": "#252525",
        },
        cornflowerblue: "#087ed3",
        midnightblue: "#00329b",
        lightgray: "#d2d2d2",
      },
    },
  },
  plugins: [],
}

