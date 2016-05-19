/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const assert = require('chai').assert;
const PersonalityTraitNames  = require('../');

describe('names', () => {

  it('get trait name', () => {
    const traitNames = new PersonalityTraitNames();
    assert.equal(traitNames.name('Agreeableness'), 'Agreeableness');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], 'Altruism');
  });

  it('get English trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'en' });
    assert.equal(traitNames.name('Agreeableness'), 'Agreeableness');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], 'Altruism');
  });

  it('get Spanish trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'es' });
    assert.equal(traitNames.name('Agreeableness'), 'Amabilidad');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], 'Altruismo');
  });

  it('get Japanese trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'ja' });
    assert.equal(traitNames.name('Agreeableness'), '人当たりの良さ');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], '利他主義');
  });

});
