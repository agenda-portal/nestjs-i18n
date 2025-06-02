# nestjs-i18n

Internationalization (i18n) module for NestJS based on the i18next package

## Installation

```bash
npm install @agenda-portal/nestjs-i18n
```

## Usage

1. Define your translations

```json
{
  "default": {
    "hello": "world!"
  }
}
```

```json
{
  "default": {
    "hello": "mundo"
  }
}
```

2. Export the translations

```typescript
import en from "./en.json";
import pt from "./pt.json";

export const translations = {
  en,
  pt,
};
```

3. Declare a module augmentation for the translation types

```typescript
import en from "./en.json";
import pt from "./pt.json";

export const translations = {
  en,
  pt,
};

declare module "@agenda-portal/nestjs-i18n" {
  interface I18n {
    translations: typeof translations;
  }
}
```
