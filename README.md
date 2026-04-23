# Next.js App Router i18n with next-intl and Localazy

A practical multilingual [Next.js](https://nextjs.org/) App Router example using [`next-intl`](https://next-intl.dev/) for runtime translations and [Localazy](https://localazy.com/) for translation management.

This project shows how to build a maintainable internationalization setup with locale-aware routing, localized metadata, server and client translations, language switching, and a translation workflow that scales beyond a single source language.

---

## Features

- Next.js App Router internationalization
- Locale-based routing with `/en`, `/fr`, `/de`, `/ja`
- `next-intl` request config and navigation helpers
- Server and client translation patterns
- Localized metadata with `generateMetadata`
- URL-based language switching
- Localazy integration for source string upload and translated file download
- Example structure for scaling translations cleanly

---

## Tech Stack

| Tool | Docs |
|------|------|
| [Next.js](https://nextjs.org/docs) | App Router framework |
| [TypeScript](https://www.typescriptlang.org/docs/) | Type-safe development |
| [next-intl](https://next-intl.dev/docs) | Internationalization for Next.js |
| [Localazy](https://localazy.com/docs) | Translation management platform |
| [Yarn](https://yarnpkg.com/getting-started) | Package manager |
| [React](https://react.dev/) | UI library |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Gunkev/localazy-nextjs.git
cd localazy-nextjs
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Start the development server

```bash
yarn dev
```

### 4. Open in your browser
http://localhost:3000/en

You can also test other locales:
http://localhost:3000/fr
http://localhost:3000/de
http://localhost:3000/ja

---

## Project Structure
```

localazy-nextjs/
├── messages/
│   ├── de.json
│   ├── en.json
│   ├── fr.json
│   └── ja.json       
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/
│   │   ├── AgeCounter.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── ProfileCard.tsx
│   │   └── StatusForm.tsx
│   ├── i18n/
│   │   ├── navigation.ts
│   │   ├── request.ts
│   │   └── routing.ts
│   └── proxy.ts
├── localazy.json
├── localazy.keys.json
├── next.config.ts
└── package.json
```

---

## How It Works

This project uses [next-intl](https://next-intl.dev/docs/getting-started/app-router) to load the correct messages for each locale at request time. The active locale is part of the URL, which means language selection persists naturally through the route.

The setup includes:

- `routing.ts`: defines supported locales
- `request.ts`: loads locale messages at request time
- `navigation.ts`: provides locale-aware navigation helpers
- `[locale]` route segment: scopes all pages to the active locale
- `NextIntlClientProvider` in the layout enables translations in client components
- `generateMetadata`: generates localized page title and description

---

## Localazy Integration

This repo is set up for [Localazy](https://localazy.com/docs/cli/installation)-based translation management using the [Localazy CLI](https://localazy.com/docs/cli/overview).

### Upload source strings

```bash
localazy upload
```

### Download translated locale files

```bash
localazy download
```

### Localazy Config Files

| File | Purpose |
|------|---------|
| `localazy.json` | Defines upload and download behavior |
| `localazy.keys.json` | Stores `writeKey` and `readKey` |

> ⚠️ **Do not commit real keys to version control.**

---

## Add a New Language

1. Add the target language in your [Localazy project](https://localazy.com/docs/general/adding-languages)
2. Translate the source strings
3. Download the translations:

```bash
localazy download
```

4. Add the locale to `src/i18n/routing.ts`:

```ts
export const routing = defineRouting({
  locales: ['en', 'fr', 'de', 'ja', 'es'],
  defaultLocale: 'en'
});
```

---

## Use Cases

This repo is useful if you want to learn or implement:

- [Next.js internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [App Router localization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [next-intl setup](https://next-intl.dev/docs/getting-started/app-router) in production-style projects
- [Localized metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) in Next.js
- Language switching with locale-aware navigation
- [Translation workflow automation with Localazy](https://localazy.com/docs/cli/overview)

---

## Troubleshooting

### Metadata does not change by locale

Check that `generateMetadata` receives `params.locale` and passes it to [`getTranslations`](https://next-intl.dev/docs/usage/server-side).

### Client translations are missing

Make sure the component is rendered under [`NextIntlClientProvider`](https://next-intl.dev/docs/usage/configuration#nextintlclientprovider) and that `messages` are passed correctly in the layout.

### `MISSING_MESSAGE` errors

Make sure the key exists in the corresponding locale file and re-run:

```bash
localazy download
```

### Localazy cannot find the config file

Run the command from the project root or pass the config path explicitly. See [Localazy CLI docs](https://localazy.com/docs/cli/installation).

---

## Who This Repository Is For

- Developers learning [next-intl](https://next-intl.dev/)
- Teams building multilingual [Next.js](https://nextjs.org/) applications
- Engineers who need a cleaner i18n setup
- Anyone looking for a practical Next.js + [Localazy](https://localazy.com/) example

---

## Related Articles

- [Part 1: Guide to translating Angular apps with ngx-translate | Foundations](https://localazy.com/blog/guide-to-translate-angular-apps-with-ngx-translate-foundations)
- [Part 2: Guide to translating Angular apps with ngx-translate | App Logic](https://localazy.com/blog/guide-to-translate-angular-apps-with-ngx-translate-app-logic)
- [Part 3: Guide to translating Angular apps with ngx-translate | i18n](#)

> Add your article links here once published.

---

## Contributing

If you want to improve the example, feel free to open an issue or submit a pull request.

---

## License

[MIT](./LICENSE)