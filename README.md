# App Example with Internationalization for Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to practice to practice implementing internationalization in NextJs.

## Oficial Documentation

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [i18next intl](https://next-intl-docs.vercel.app/) - learn about internationalization for Next.js

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Folders Structure

next-intl-app
- messages
  - en
    - AboutPage.json
    - ContactPage.json
    - Footer.json
    - IndexPage.json
    - Navigation.json
  - es
    - AboutPage.json
    - ContactPage.json
    - Footer.json
    - IndexPage.json
    - Navigation.json
  - public
    - Logo2024.png
  - src
    - app
      - [locale]
        - about
          - page.tsx 
        - contact
          - page.tsx
        - globals.css
        - layout.tsx
        - page.tsx
      - favicon.ico
      - layout.tsx
      - not-found.tsx
      - page.tsx
    - components
      - footer.jsx
      - header.jsx
      - local-switcher.tsx
    - ui
      - font.tsx
    - i18n.ts
    - middleware.ts
  - next.config.mjs
  - tsconfig.json
  - tailwind.config.ts