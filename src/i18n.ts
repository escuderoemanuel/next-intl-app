import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages: Record<string, any> = {};

  const loadMessages = async (page: string) => {
    try {
      const pageMessages = (await import(`../messages/${locale}/${page}.json`)).default;
      messages[page] = pageMessages;
    } catch (error) {
      console.warn(`No messages found for page ${page} in locale ${locale}`);
    }
  };

  await Promise.all([
    loadMessages('Navigation'),
    loadMessages('IndexPage'),
    loadMessages('AboutPage'),
    loadMessages('ContactPage'),
    loadMessages('BlogPage'),
    loadMessages('Footer'),
  ]);

  return {
    messages,
  };
});
