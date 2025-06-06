import { type DynamicModule, Module } from "@nestjs/common";
import type { Translations } from "./types";
import { I18nService } from "./i18n.service";

interface I18nModuleOptions {
  translations: Translations;
  global?: boolean;
}

@Module({})
export class I18nModule {
  static forRoot({
    translations,
    global = false,
  }: I18nModuleOptions): DynamicModule {
    const i18nService = new I18nService(translations);

    return {
      module: I18nModule,
      providers: [
        {
          provide: I18nService,
          useValue: i18nService,
        },
      ],
      exports: [I18nService],
      global,
    };
  }
}
