import type { Language } from "./language";
import type { Translations } from "./translations";

export type Namespace<L extends Language> = keyof Translations[L] & string;
