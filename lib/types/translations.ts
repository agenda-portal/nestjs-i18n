import type { I18n } from "../i18n";

export type Translations = I18n extends { translations: infer T }
  ? T
  : Record<string, Record<string, any>>;
