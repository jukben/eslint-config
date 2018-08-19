module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["flowtype", "react", "jest", "prettier"],
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
