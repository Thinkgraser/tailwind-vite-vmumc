/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /w-/,
      variants: ["lg"],
    },
    {
      pattern: /text-(left|center|right)/,
    },
    {
      pattern: /col-span-/,
    },
  ],
  theme: {
    container: {},
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
        primary: "#0d6efd",
        "primary-hover": "#0a58ca",
      },
      backgroundImage: {
        "gradient-radial-c":
          "radial-gradient(circle, #38f9d7, #6fffe9, #14fdd2, #14e6fd, #5bc0eb);",
      },
    },
  },
};
