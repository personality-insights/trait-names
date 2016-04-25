# Personality Insights Trait Names
![last-release](https://img.shields.io/github/tag/personality-insights/trait-names.svg)
[![npm-version](https://img.shields.io/npm/v/personality-trait-names.svg)](https://www.npmjs.com/package/personality-trait-names)
[![npm-license](https://img.shields.io/npm/l/personality-trait-names.svg)](https://www.npmjs.com/package/personality-trait-names)
[![npm-downloads](https://img.shields.io/npm/dm/personality-trait-names.svg)](https://www.npmjs.com/package/personality-trait-names)

Trait names translated to different languages.

## Usage

Use trait-names i18n translator

```
let translator = require('trait-names/i18n');

translator.setLocale('es');
console.log(translator.__('Extraversion'));
```

or require translation files as needed.

```
let
  english_names = require('trait-names/locales/en'),
  spanish_names = require('trait-names/locales/es');
```
