module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    // "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
  },
};
