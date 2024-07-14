import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
 
export default function IndexPage({params: {locale}}) {
  unstable_setRequestLocale(locale);
 
  // Once the request locale is set, you
  // can call hooks from `next-intl`
  const t = useTranslations('IndexPage');
 
  return (
    <section className='h-screen w-screen items-center bg-sky-700 flex items-center justify-center'>
      <h1 className='text-center text-2xl'>{t('title')}</h1>
    </section>
  )
}