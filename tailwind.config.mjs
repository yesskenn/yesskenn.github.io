import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        white: "#FDFCFA",
        transparent: "transparent",
        current: "currentColor",
        ...defaultTheme.colors,
    
        brand: {
          lightBlk: "#111111", //main
          stormgrayblue: "#4A5A72", //main
          darkOceanTeal: "#0C3C44", //main
          midnightPurp: "#252248", //main //more rich alternative: #190933
          lilacSub: "#AB9BB3", //
          lilacPop: "#BA9BC9",
          oxRed: "#7B2E41", //main ? or strawberry? 
          oliveDrab: "#333300", //main
          warmEggWhite: "#FBFAF3", 
          coolGrayWhite: "F5F5F5",
          coolOffWhite: "#FDFCFA",
          ogstrawberryred: "#B64A43", //logo gradient
          berryRed: "#7E1946",
          midnightPurpler: "#331E38",
          hawtPink: "#A9477E", //logo gradient
          warmGry: "#636363",
          lighterGry: "#D8D8D8",
          periWinks: "#9197AE",
          jeanGray: "#5A6273"

        },
      },
    
      fontFamily: {
        "sans": ["Work Sans", ...defaultTheme.fontFamily.sans],
        gorgias: ["Gorgias", "serif"],
        deseo: ["Deseo", "cursive"],
        spacemono: ["Space Mono", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
          },
        },
      },
      rotate: {
        "45": "45deg",
        "135": "135deg",
        "225": "225deg",
        "315": "315deg",
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out forwards",
        meteor: "meteor 3s ease-in-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%": { 
            opacity: 0, 
            transform: "rotate(0deg)" 
          },
          "50%": { 
            opacity: 1,
            transform: "rotate(180deg)" 
          },
          "100%": { 
            opacity: 0, 
            transform: "rotate(360deg)" 
          },
        },
        meteor: {
          "0%": { 
            opacity: 0, 
            transform: "translateY(200%)" 
          },
          "50%": { 
            opacity: 1  
          },
          "100%": { 
            opacity: 0, 
            transform: "translateY(0)" 
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
