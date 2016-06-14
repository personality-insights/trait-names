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

  it('get default (English) trait name', () => {
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
    assert.equal(traitNames.names()[1], 'Responsabilidad');
  });

  it('get Japanese trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'ja' });
    assert.equal(traitNames.name('Agreeableness'), '協調性');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], '誠実性');
  });

  it('get Arabic trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'ar' });
    assert.equal(traitNames.name('Agreeableness'), 'الوئام');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], 'الاجتهاد');
  });

  it('get Korean trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'ko' });
    assert.equal(traitNames.name('Agreeableness'), '친화성');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], '성실성');
  });

  it('get Chinese trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'zh' });
    assert.equal(traitNames.name('Agreeableness'), '宜人性');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], '尽责性');
  });

  it('get Chinese (Taiwan) trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'zh-tw' });
    assert.equal(traitNames.name('Agreeableness'), '親和性');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], '盡責性');
  });

  it('get Deutch trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'de' });
    assert.equal(traitNames.name('Agreeableness'), 'Angenehme Wesenszüge');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], 'Pflichtbewusstsein');
  });

  it('get Italian trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'it' });
    assert.equal(traitNames.name('Agreeableness'), 'Disponibilità');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], 'Scrupolosità');
  });

  it('get Portuguese (Brazil) trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'pt-br' });
    assert.equal(traitNames.name('Cooperation'), 'Cooperação');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], 'Escrupulosidade');
  });

  it('get French trait name', () => {
    const traitNames = new PersonalityTraitNames({ locale : 'fr' });
    assert.equal(traitNames.name('Agreeableness'), 'Amabilité');
    assert.equal(traitNames.names().length, 52);
    assert.equal(traitNames.names()[1], 'Tempérament consciencieux');
  });



});
