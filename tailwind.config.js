/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue: "hsl(246, 80%, 60%)",
        "light-red": "hsl(15, 100%, 70%)",
        "soft-blue": "hsl(195, 74%, 62%)",
        "light-red-aux": "hsl(348, 100%, 68%)",
        "lime-green": "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        "soft-orange": "hsl(43, 84%, 65%)",
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "very-soft-blue": "hsl(235deg 90% 90%)",
        "light-blue": "rgb(52 56 122)",
        "very-light-blue": "rgb(73 79 179)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      backgroundImage: {
        work: "url('https://codematds.github.io/KAS24/images/icon-work.svg')",
        play: "url('https://codematds.github.io/KAS24/images/icon-play.svg')",
        study: "url('https://codematds.github.io/KAS24/icon-study.svg')",
        exercise: "url('https://codematds.github.io/KAS24/images/icon-exercise.svg')",
        social: "url('https://codematds.github.io/KAS24/images/icon-social.svg')",
        "self-care": "url('https://codematds.github.io/KAS24/images/icon-self-care.svg')",
      },
    },
  },
  plugins: [],
};
