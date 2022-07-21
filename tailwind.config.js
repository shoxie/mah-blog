/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {

  return ({ opacityValue }) => {

    if (opacityValue === undefined) {

      return `rgb(var(${variable}))`;

    }

    return `rgb(var(${variable}) / ${opacityValue})`;

  };

}



let themeColors = {

  base: withOpacityValue("--color-base"),

  surface: withOpacityValue("--color-surface"),

  text: withOpacityValue("--color-text"),

};



module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: themeColors,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
