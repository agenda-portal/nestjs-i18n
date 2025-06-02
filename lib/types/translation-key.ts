import type { Language } from "./language";
import type { Namespace } from "./namespace";
import type { Translations } from "./translations";

type Path<Resource> = {
  [Key in keyof Resource & string]: Resource[Key] extends object
    ? `${Key}.${Path<Resource[Key]>}`
    : Key;
}[keyof Resource & string];

export type TranslationKey<L extends Language, Ns extends Namespace<L>> = {
  [N in keyof Translations[L] & string]: N extends Ns
    ? Path<Translations[L][N]>
    : `${N}:${Path<Translations[L][N]>}`;
}[keyof Translations[L] & string];
