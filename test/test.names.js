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
const PersonalityTraitNames = require('../lib/index');
const PersonalityTraitNamesV2 = require('../lib/index-v2');
const PersonalityTraitNamesV3 = require('../lib/index-v3');

describe('names', () => {

  describe('version 2', () => {
    describe('standalone module', () => {
      it('should work with default options', () => {
        const traitNames = new PersonalityTraitNamesV2();
        assert.equal(traitNames.name('Agreeableness'), 'Agreeableness');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');
      });
      it('should work with locale', () => {
        const traitNames = new PersonalityTraitNamesV2({ locale : 'es' });
        assert.equal(traitNames.name('Agreeableness'), 'Amabilidad');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Responsabilidad');
      });
      it('should work when changing locale', () => {
        const traitNames = new PersonalityTraitNamesV2();
        assert.equal(traitNames.name('Agreeableness'), 'Agreeableness');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');

        traitNames.setLocale('es');
        assert.equal(traitNames.name('Agreeableness'), 'Amabilidad');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Responsabilidad');
      });
    });

    describe('default module', () => {
      it('get default (English) trait name: Agreeableness -> Agreeableness', () => {
        const traitNames = new PersonalityTraitNames();
        assert.equal(traitNames.name('Agreeableness'), 'Agreeableness');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');
      });

      it('get English trait name: Agreeableness -> Agreeableness', () => {
        //AW - added version to options
        const traitNames = new PersonalityTraitNames({ locale : 'en' });
        assert.equal(traitNames.name('Agreeableness'), 'Agreeableness');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');
      });

      it('get Spanish trait name: Agreeableness -> Amabilidad', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'es' });
        assert.equal(traitNames.name('Agreeableness'), 'Amabilidad');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Responsabilidad');
      });

      it('get Japanese trait name: Agreeableness -> 協調性', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'ja' });
        assert.equal(traitNames.name('Agreeableness'), '協調性');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], '誠実性');
      });

      it('get Arabic trait name: Agreeableness -> الاجتهاد', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'ar' });
        assert.equal(traitNames.name('Agreeableness'), 'الوئام');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'الاجتهاد');
      });

      it('get Korean trait name: Agreeableness -> 친화성', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'ko' });
        assert.equal(traitNames.name('Agreeableness'), '친화성');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], '성실성');
      });

      it('get Chinese trait name: Agreeableness -> 宜人性', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'zh' });
        assert.equal(traitNames.name('Agreeableness'), '宜人性');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], '尽责性');
      });

      it('get Chinese (Taiwan) trait name: Agreeableness -> 親和性', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'zh-tw' });
        assert.equal(traitNames.name('Agreeableness'), '親和性');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], '盡責性');
      });

      it('get Deutch trait name: Agreeableness -> Angenehme Wesenszüge', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'de' });
        assert.equal(traitNames.name('Agreeableness'), 'Angenehme Wesenszüge');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Pflichtbewusstsein');
      });

      it('get Italian trait name: Agreeableness -> Disponibilità', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'it' });
        assert.equal(traitNames.name('Agreeableness'), 'Disponibilità');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Scrupolosità');
      });

      it('get Portuguese (Brazil) trait name: Cooperation -> Cooperação', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'pt-br' });
        assert.equal(traitNames.name('Cooperation'), 'Cooperação');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Escrupulosidade');
      });

      it('get French trait name: Agreeableness -> Amabilité', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'fr' });
        assert.equal(traitNames.name('Agreeableness'), 'Amabilité');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Tempérament consciencieux');
      });

      it('should work when changing locale', () => {
        const traitNames = new PersonalityTraitNames();
        assert.equal(traitNames.name('Agreeableness'), 'Agreeableness');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');

        traitNames.setLocale('es');
        assert.equal(traitNames.name('Agreeableness'), 'Amabilidad');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Responsabilidad');
      });
    });
  });

  describe('version 3', () => {
    describe('standalone module', () => {
      it('should work with default options', () => {
        const traitNames = new PersonalityTraitNamesV3();
        assert.equal(traitNames.name('big5_agreeableness'), 'Agreeableness');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');
      });
      it('should work with locale', () => {
        const traitNames = new PersonalityTraitNamesV3({ locale : 'es' });
        assert.equal(traitNames.name('big5_agreeableness'), 'Amabilidad');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Responsabilidad');
      });
      it('should work when changing locale', () => {
        const traitNames = new PersonalityTraitNamesV3();
        assert.equal(traitNames.name('big5_agreeableness'), 'Agreeableness');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');

        traitNames.setLocale('es');
        assert.equal(traitNames.name('big5_agreeableness'), 'Amabilidad');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Responsabilidad');
      });
    });

    describe('default module', () => {
      it('get English trait name: big5_agreeableness -> Agreeableness', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'en', version : 'v3' });
        assert.equal(traitNames.name('big5_agreeableness'), 'Agreeableness');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');
      });

      it('get English trait name: facet_liberalism -> Authority-challenging', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'en', version : 'v3' });
        assert.equal(traitNames.name('facet_liberalism'), 'Authority-challenging');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');
      });

      it('get Spanish trait name: big5_agreeableness -> Amabilidad', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'es', version : 'v3' });
        assert.equal(traitNames.name('big5_agreeableness'), 'Amabilidad');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Responsabilidad');
      });

      it('get Japanese trait name: big5_agreeableness -> 協調性', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'ja', version : 'v3' });
        assert.equal(traitNames.name('big5_agreeableness'), '協調性');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], '誠実性');
      });

      it('get Arabic trait name: big5_agreeableness -> الوئام', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'ar', version : 'v3' });
        assert.equal(traitNames.name('big5_agreeableness'), 'الوئام');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'الاجتهاد');
      });

      it('get Arabic trait name: facet_excitement_seeking -> البحث عن الاثارة', () => {
        const traitNames = new PersonalityTraitNames({ locale : 'ar', version : 'v3' });
        assert.equal(traitNames.name('facet_excitement_seeking'), 'البحث عن الاثارة');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'الاجتهاد');
      });

      it('should work when changing locale', () => {
        const traitNames = new PersonalityTraitNames({ version : 'v3' });
        assert.equal(traitNames.name('big5_agreeableness'), 'Agreeableness');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Altruism');

        traitNames.setLocale('es');
        assert.equal(traitNames.name('big5_agreeableness'), 'Amabilidad');
        assert.equal(traitNames.names().length, 52);
        assert.equal(traitNames.names()[1], 'Responsabilidad');
      });
    });
  });

});
