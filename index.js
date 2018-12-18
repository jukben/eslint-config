module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "plugin:cypress/recommended"
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    "cypress/globals": true
  },
  plugins: ["flowtype", "react", "jest", "prettier", "cypress"],
  rules: {
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".android.js", ".ios.js", ".native.js"]
      }
    }
  }
};
