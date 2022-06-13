const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    (process.env.NODE_ENV == "production"
      ? cssnano({
          preset: "default",
        })
      : null),
    (process.env.NODE_ENV == "production"
      ? purgecss({
          content: ["./src/components/**/*.{js,jsx,ts,tsx}", "./src/index.{js,jsx,ts,tsx}"],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        })
      : null),
  ],
};
