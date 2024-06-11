<div align="center">
  <img src="./.github/tailwindcss-mark.svg" alt="Tailwind CSS" width="108" height="66">
  <h1>Tailwind CSS Glow</h1>
  <p>A tailwind css plugin for making your elements glow</p>

[![License][license-shield]][license]

</div>

### About

This is a tailwind css plugin for making your elements glow.

### Features

- use the `.glow` class to glow with default color

### Getting started

Install the npm library

```sh
npm i twglow
```

Then add the plugin to your `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("twglow"),
    // ...
  ],
};
```

### Usage

Use the provided examples.

## Configuration

If your plugin is configurable, show users how to configure it.

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require("twglow")({
      className: "",
    }),
    // ...
  ],
};
```

[license]: ./LICENSE
[license-shield]: https://img.shields.io/github/license/abdify/twglow?color=0e9f6e
