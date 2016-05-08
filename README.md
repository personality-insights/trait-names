# Personality Insights Trait Names
![last-release](https://img.shields.io/github/tag/personality-insights/trait-names.svg)
[![npm-version](https://img.shields.io/npm/v/personality-trait-names.svg)](https://www.npmjs.com/package/personality-trait-names)
[![npm-license](https://img.shields.io/npm/l/personality-trait-names.svg)](https://www.npmjs.com/package/personality-trait-names)
[![npm-downloads](https://img.shields.io/npm/dm/personality-trait-names.svg)](https://www.npmjs.com/package/personality-trait-names)

Obtain Trait names translated to different languages from Trait ID.

## Usage

Use trait-names i18n translator

```
let i18n = require('trait-names/i18n');

i18n.setLocale('es');
console.log(i18n.__('Extraversion'));
```

or require translation files as needed.

```
let
  english_names = require('trait-names/locales/en'),
  spanish_names = require('trait-names/locales/es');
```

## API Methods

### `trait-names/i18n`

Public methods:
  - `i18n.setLocale :: (Locale)` - Set locale for translator.
  - `i18n.__ :: (TraitID) -> String` - Returns the trait name in the setted locale for the `TraitID`.

Where:
  - `TraitID` is the ID of a IBM Watson Personality Insights trait. You will find it as `TraitTreeNode.id` in the [service documentation](https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/personality-insights/api/v2/#profile).
