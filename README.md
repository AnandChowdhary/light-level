# 💡 Light level

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/light-level.svg)](https://travis-ci.org/AnandChowdhary/light-level)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/light-level/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/light-level?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/light-level.svg)](https://github.com/AnandChowdhary/light-level/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/light-level.svg)
![NPM type definitions](https://img.shields.io/npm/types/light-level-css.svg)
[![NPM](https://img.shields.io/npm/v/light-level.svg)](https://www.npmjs.com/package/light-level-css)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/light-level.svg)](https://www.npmjs.com/package/light-level-css)

[![NPM](https://nodei.co/npm/light-level.png)](https://www.npmjs.com/package/light-level-css)

Light level is a package that tells you a user's preferred light level. It's based on the CSS `@media (light-level)`, which is part of [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/). It's around 700 bytes minified, 300 bytes gzipped.

## ⭐ Usage

Add the dependency from NPM:

```bash
npm install light-level-css
```

Import the package:

```js
import lightLevel from "light-level-css";
```

Then call the function:

```js
const lightPreference = lightLevel();
// Returns "dim", "washed" or "normal"
```

## 💡 Browser support

This package only works in browsers that natively support `@media (light-level)`, so it just returns `"normal"` in unsupported browsers. [Current browser support](https://caniuse.com/#feat=light-level)

By passing `false` as the argument, you can get `"unsupported"` as the value for unsupported browsers:

```js
const lightPreference = lightLevel(false);
// Returns "dim", "washed", "normal", or "unsupported"
```

## 🛠️ Development

Install dependencies:

```bash
yarn
```

Compile Typescript to ES6 before publishing to NPM:

```bash
yarn build
```

## 📀 Media Queries Level 5

- 🙅 `prefers-reduced-motion` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-motion) · [NPM](https://www.npmjs.com/package/prefers-reduced-motion)
- 🎨 `prefers-color-scheme` · [GitHub](https://github.com/AnandChowdhary/prefers-color-scheme) · [NPM](https://www.npmjs.com/package/prefers-color-scheme)
- 🕶️ `prefers-contrast` · [GitHub](https://github.com/AnandChowdhary/prefers-contrast) · [NPM](https://www.npmjs.com/package/prefers-contrast)
- 🎞️ `prefers-reduced-transparency` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-transparency) · [NPM](https://www.npmjs.com/package/prefers-reduced-transparency)
- 🌑 `inverted-colors` · [GitHub](https://github.com/AnandChowdhary/inverted-colors) · [NPM](https://www.npmjs.com/package/inverted-colors)
- 🧖 `environment-blending` · [GitHub](https://github.com/AnandChowdhary/environment-blending) · [NPM](https://www.npmjs.com/package/environment-blending)
- 💡 `light-level` · [GitHub](https://github.com/AnandChowdhary/light-level) · [NPM](https://www.npmjs.com/package/light-level-css)

## 📝 License

MIT
