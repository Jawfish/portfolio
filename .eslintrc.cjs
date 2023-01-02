module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    'plugin:prettier/recommended',
  ],
  plugins: [
    "prettier",
    "tailwindcss",
    "react"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
}
