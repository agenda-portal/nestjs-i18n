import { Injectable } from "@nestjs/common";
import i18next, { type TOptions } from "i18next";
import type {
  Language,
  Namespace,
  TranslationKey,
  Translations,
} from "./types";

@Injectable()
export class I18nService {
  constructor(private readonly translations: Translations) {}

  async language<L extends Language, N extends Namespace<L>>(
    language: L,
    namespace?: N,
  ) {
    return i18next
      .createInstance({
        lng: language,
        defaultNS: namespace,
        resources: this.translations,
      })
      .init() as Promise<
      (key: TranslationKey<L, N>, options: TOptions) => string
    >;
  }
}
