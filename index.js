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

let
  ls = require('fs').readdirSync,
  quote = (string) => `'${string}'`,
  contains = (string, substring) => string.indexOf(substring) !== -1;


console.log('Available locales:',
  ls(__dirname)
    .filter((f) => contains(f, '.json') && f != 'package.json')
    .map((f) => quote(f.replace('.json', '')))
    .join(', '));
