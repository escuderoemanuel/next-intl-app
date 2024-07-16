import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es'];

type Messages = Record<string, Record<string, string>>;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as string)) notFound();

  const messages: Messages = {};

  const loadMessages = async (page: string) => {
    try {
      const pageMessages = (await import(`../messages/${locale}/${page}.json`)).default as Record<string, string>;
      messages[page] = pageMessages;
    } catch (error) {
      console.error(`Error loading messages for ${locale}/${page}:`, error);
      console.warn(`No messages found for page ${page} in locale ${locale}`);
    }
  };

  await Promise.all([
    loadMessages('Navigation'),
    loadMessages('IndexPage'),
    loadMessages('AboutPage'),
    loadMessages('ContactPage'),
    loadMessages('Footer'),
  ]);

  return {
    messages,
  };
});
