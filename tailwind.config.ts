/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{scss,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1148px",
          "2xl": "1148px",
        },
      },
      fontFamily: {
        heading: ['"Red Hat Text"'],
        body: ['"Red Hat Text"'],
        icon: ['"Material Symbols Outlined"'],
      },
      fontSize: {
        subtitle: ["1rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        h1: ["3rem", { lineHeight: "4rem", fontWeight: 700 }],
        h2: ["2.5rem", { lineHeight: "3rem", fontWeight: 700 }],
        h3: ["2rem", { lineHeight: "2.5rem", fontWeight: 700 }],
        h4: ["1.5rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        h5: ["1.25rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        h6: ["1rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        p: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.2px",
            fontWeight: 400,
          },
        ],
        caption: [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.2px", fontWeight: 700 },
        ],
      },
      colors: {
        primary: {
          dark: "#092516",
          DEFAULT: "#00652E",
          light: "#B7D333",
        },
        secondary: {
          dark: "#B69000",
          DEFAULT: "#FFCA05",
          light: "#FFEA9E",
        },
        tertiary: {
          dark: "#005EB8",
          DEFAULT: "#0085CB",
          light: "#5EC2F7",
        },
        neutral: {
          900: "#09090a",
          800: "#101013",
          700: "#252329",
          500: "#46454a",
          200: "#68676b",
          90: "#8a898c",
          60: "#acabad",
          40: "#cccbcd",
          20: "#ebebeb",
          5: "#f5f5f5",

          dark: "#252329", // 700
          DEFAULT: "#46454a", // 500
          light: "#ebebeb", // 20
        },
        font: {
          DEFAULT: "#000000",
          link: "#005EB8",
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
  safelist: [
    // Background colors
    "bg-black",
    "bg-white",
    "bg-neutral-dark",
    "bg-neutral",
    "bg-neutral-light",
    "bg-primary-dark",
    "bg-primary",
    "bg-primary-light",
    "bg-secondary-dark",
    "bg-secondary",
    "bg-secondary-light",
    "bg-tertiary-dark",
    "bg-tertiary",
    "bg-tertiary-light",

    "hover:bg-black",
    "hover:bg-white",
    "hover:bg-neutral-dark",
    "hover:bg-neutral",
    "hover:bg-neutral-light",
    "hover:bg-primary-dark",
    "hover:bg-primary",
    "hover:bg-primary-light",
    "hover:bg-secondary-dark",
    "hover:bg-secondary",
    "hover:bg-secondary-light",
    "hover:bg-tertiary-dark",
    "hover:bg-tertiary",
    "hover:bg-tertiary-light",

    // Text colors
    "text-black",
    "text-white",
    "text-neutral-dark",
    "text-neutral",
    "text-neutral-light",
    "text-primary-dark",
    "text-primary",
    "text-primary-light",
    "text-secondary-dark",
    "text-secondary",
    "text-secondary-light",
    "text-tertiary-dark",
    "text-tertiary",
    "text-tertiary-light",

    "hover:text-black",
    "hover:text-white",
    "hover:text-neutral-dark",
    "hover:text-neutral",
    "hover:text-neutral-light",
    "hover:text-primary-dark",
    "hover:text-primary",
    "hover:text-primary-light",
    "hover:text-secondary-dark",
    "hover:text-secondary",
    "hover:text-secondary-light",
    "hover:text-tertiary-dark",
    "hover:text-tertiary",
    "hover:text-tertiary-light",

    // Border colors
    "border-black",
    "border-white",
    "border-neutral-dark",
    "border-neutral",
    "border-neutral-light",
    "border-primary-dark",
    "border-primary",
    "border-primary-light",
    "border-secondary-dark",
    "border-secondary",
    "border-secondary-light",
    "border-tertiary-dark",
    "border-tertiary",
    "border-tertiary-light",

    "hover:border-black",
    "hover:border-white",
    "hover:border-neutral-dark",
    "hover:border-neutral",
    "hover:border-neutral-light",
    "hover:border-primary-dark",
    "hover:border-primary",
    "hover:border-primary-light",
    "hover:border-secondary-dark",
    "hover:border-secondary",
    "hover:border-secondary-light",
    "hover:border-tertiary-dark",
    "hover:border-tertiary",
    "hover:border-tertiary-light",

    "from-black",
    "from-white",
    "from-neutral-dark",
    "from-neutral",
    "from-neutral-light",
    "from-primary-dark",
    "from-primary",
    "from-primary-light",
    "from-secondary-dark",
    "from-secondary",
    "from-secondary-light",
    "from-tertiary-dark",
    "from-tertiary",
    "from-tertiary-light",
  ],
};
