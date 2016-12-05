# Personality Insights Trait Names
![last-release](https://img.shields.io/github/tag/personality-insights/trait-names.svg)
[![npm-version](https://img.shields.io/npm/v/personality-trait-names.svg)](https://www.npmjs.com/package/personality-trait-names)
[![npm-license](https://img.shields.io/npm/l/personality-trait-names.svg)](https://www.npmjs.com/package/personality-trait-names)
[![Build Status](https://travis-ci.org/personality-insights/trait-names.svg?branch=master)](https://travis-ci.org/personality-insights/trait-names)
[![codecov.io](https://codecov.io/github/personality-insights/trait-names/coverage.svg?branch=master)](https://codecov.io/github/personality-insights/trait-names?branch=master)
[![npm-downloads](https://img.shields.io/npm/dm/personality-trait-names.svg)](https://www.npmjs.com/package/personality-trait-names)

Obtain names for Personality Insights' traits.

## Installation

```sh
$ npm install personality-trait-names
```

## Usage

```JavaScript
  var PersonalityTraitNames = require('personality-trait-names');

  // version refers to the version of Watson Personality Insights to use, v2 or v3
  var traitNames = new PersonalityTraitNames({ locale: 'es', version: 'v3' });

  // retrieve the trait name for a specified trait id (e.g., 'big5_agreeableness')
  var big5AgreeablenessTraitName  = traitNames.name('big5_agreeableness');
  console.log('The trait name for trait id big5_agreeableness is ' + big5AgreeablenessTraitName);

  ```

## License

This library is licensed under Apache 2.0. Full license text is
available in [LICENSE](LICENSE).

## Changelog

__12-01-2016__
 * Added v3 traits
