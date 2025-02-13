import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'es'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const messages = {
    ...((await import(`../messages/${locale}/IndexPage.json`)).default),
    ...((await import(`../messages/${locale}/AboutPage.json`)).default),
    ...((await import(`../messages/${locale}/ContactPage.json`)).default),
    ...((await import(`../messages/${locale}/Footer.json`)).default),
    ...((await import(`../messages/${locale}/Navigation.json`)).default)
  };

  return {
    messages
  };
});
