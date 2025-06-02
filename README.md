# nestjs-i18n

Internationalization (i18n) module for NestJS based on the i18next package

## Installation

```bash
npm install @agenda-portal/nestjs-i18n
```

## Usage

1. Define your translations

```json
// i18n/en.json
{
  "default": {
    "hello": "world!"
  }
}

// i18n/pt.json
{
  "default": {
    "hello": "mundo"
  }
}
```

2. Export the translations

```typescript
// i18n/index.ts
import en from "./en.json";
import pt from "./pt.json";

export const translations = {
  en,
  pt,
};
```

3. Declare a module augmentation for the translation types

```typescript
// i18n/index.ts
import en from "./en.json";
import pt from "./pt.json";

export const translations = {
  en,
  pt,
};

declare module "@agenda-portal/i18n" {
  interface I18n {
    translations: typeof translations;
  }
}
```
