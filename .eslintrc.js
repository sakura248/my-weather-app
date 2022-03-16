module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // "ecmaVersion": "latest",
    sourceType: "module",
    ecmaVersion: 6,
  },
  plugins: ["react"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
  },
};
