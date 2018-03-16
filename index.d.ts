export = PersonalityTraitNames;

declare type Locale = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'it' | 'ja' | 'ko' | 'pt-br' | 'zh-tw' | 'zh';
declare type Version = 'v2' | 'v3';

declare class PersonalityTraitNames {
  constructor(options?: { locale?: Locale, version?: Version });

  defaultOptions(): {
    locale: Locale
  };

  name(traitId: string): string;

  names(): string[];
}
