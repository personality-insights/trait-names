/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';


let _ = require('underscore');

class I18n {
  constructor() {
    this.dictionaries = {};
    this.locales = {};
    this.locale = '';
  }

  configure(options) {
    this.defaultLocale = options.defaultLocale;
    this.locales = _.object(options.locales.map((locale) => [locale, locale]));

    options.locales.forEach((locale) => {
      this.dictionaries[locale] = require(`${options.directory}/${locale}.json`);
    });
  }

  setLocale(locale) {
    this.locale = locale;
  }

  getLocale() {
    return this.locale;
  }

  getCatalog() {
    let locale = this.locales[this.locale] || this.defaultLocale;
    return this.dictionaries[locale];
  }

  __(string) {
    let catalog = this.getCatalog();
    return catalog[string] || string;
  }
}

let translator = new I18n();

translator.configure({

    locales : ['en', 'es'],
    defaultLocale : 'en',

    directory : __dirname + '/locales'

});

module.exports = translator;
