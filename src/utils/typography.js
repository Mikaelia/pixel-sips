import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    { name: "Bai Jamjuree", styles: [] },
    { name: "Muli", styles: [400, 700, 800] },
  ],
  headerFontFamily: ["Muli", "sans-serif"],
  bodyFontFamily: ["Muli", "serif"],
})

export default typography
