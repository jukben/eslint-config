module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:jest/recommended",
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
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/label-has-associated-control": 0
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".android.js", ".ios.js", ".native.js"]
      }
    }
  }
};
