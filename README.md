# @jukben/eslint-config

This is my opinionated configuration for ESLint.

Based on Airbnb's configuration. Enhanced with Prettier, ready for React and Jest.

## Install

    yarn add eslint @jukben/eslint-config -D

## Usage

.eslintrc

```js
{
    "extends": "@jukben"
}
```

## Customization

It's simple as...

```js
{
    "extends": "@jukben",
    "rules": {
        "prefer-destructuring": 0
    }
}
```

## Possible issues

If you get some error coming from eslint it could be because you might have version mismatch among your dependencies.

For example if you are using CRA version 1.1.4 you'll get issue with `Definition for rule 'jsx-a11y/label-has-associated-control' was not found`. That's because CRA is using old version of eslint-plugin-jsx-a11y. If you are using Yarn you can easily enforce the correct one.

```js
  "resolutions": {
    "eslint-plugin-jsx-a11y": "6.1.1"
  }
```
