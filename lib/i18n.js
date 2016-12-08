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

const PersonalityTraitNames = require('./index');

class I18nDeprecated {
  constructor() {
    this.locale = '';
  }

  setLocale(locale) {
    this.locale = locale;
  }

  getLocale() {
    return this.locale;
  }

  getCatalog() {
    const traitNames = new PersonalityTraitNames({locale: this.locale});
    return traitNames._data;
  }

  __(traitId) {
    const traitNames = new PersonalityTraitNames({locale: this.locale});
    return traitNames.name(traitId);
  }
}

let translator = new I18nDeprecated();

module.exports = translator;
