import en from '../locales/en.json';
import th from '../locales/th.json';
import jp from '../locales/jp.json';

export type Lang = 'en' | 'th' | 'jp';
export type TextSegment = string | { text: string; mark: true };

export interface SkillItem {
  name: string;
  icon: string;
  desc: string;
}

export interface SkillCategory {
  label: string;
  skills: SkillItem[];
}

export interface Translations {
  nav: { about: string; experience: string; skills: string; projects: string; contact: string };
  hero: { role: string; tagline: string; sub: string; cta_work: string; cta_resume: string };
  about: { label: string; body1: TextSegment[]; body2: TextSegment[]; resume: string; stats: { val: string; label: string }[] };
  experience: { label: string; jobs: { tag: string; company: string; role: string; year: string; bullets: string[] }[] };
  skills: { label: string; categories: SkillCategory[] };
  projects: { label: string; filters: string[]; filterMap?: Record<string, string>; viewRepo: string };
  contact: { label: string; intro: string; name: string; email: string; message: string; name_ph: string; email_ph: string; message_ph: string; send: string; sending: string; sent: string; error: string };
  footer: string;
}

const translations: Record<Lang, Translations> = {
  en: en as Translations,
  th: th as Translations,
  jp: jp as Translations,
};

// Single source of truth for which languages appear in the switcher.
// Add or remove entries here to control what visitors can choose.
export const ENABLED_LANGS: Lang[] = ['en', 'th'];

export default translations;
