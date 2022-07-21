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

  pine: withOpacityValue("--color-pine"),
};



module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: themeColors,
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text"),
            "--tw-prose-headings": theme("colors.pine"),
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
