/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    process.env.NODE_ENV == "production"
      ? ["./src/components/**/*.{js,jsx,ts,tsx}", "./src/index.{js,jsx,ts,tsx}"]
      : ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
