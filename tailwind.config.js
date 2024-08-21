/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sarlotte: "sarlotte",
        carmitta: "carmitta",
        myflora: "myflora",
        secondchild: "secondchild",
        rosseti: "rosseti",
      },
    },
  },
  plugins: [],
};
