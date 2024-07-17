import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import './globals.css';
import { inter } from '@/ui/font';
import Header from '@/components/header';
import Footer from '@/components/footer';
// Can be imported from a shared config
const locales = ['en', 'es'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
     <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
        <div className='flex flex-col h-screen max-w-4xl mx-auto'>
          <Header locale={locale}></Header>
          {children}
          <Footer></Footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}