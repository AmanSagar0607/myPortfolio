/** @type {import('tailwindcss').Config} */
export default  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#050816",
          secondary: "#aaa6c3",
          tertiary: "#151030",
          "black-100": "#100d25",
          "black-200": "#090325",
          "white-100": "#f3f3f3",
          button: "#6a63f9",
          "button-hover": "#6a63f5",
          "green-pink-gradient": "#00cea8"
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "500px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg.png')",
        },
      },
    },
    plugins: [],
  };