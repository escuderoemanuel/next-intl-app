import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


export default function IndexPage({params: {locale}}: any) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('IndexPage');
  return (
    <section className='w-auto h-screen flex flex-col'>
      <h1 className='text-xl font-bold mb-4 uppercase'>{t('title')}</h1>
      <h4 className='-center text-sm font-bold text-cyan-500 mb-4 uppercase'>{t('description')}</h4>
      <p className='-center font-light text-sm mb-2'>{t('text1')}</p>
      <p className='-center font-light text-sm'>{t('text2')}</p>
    </section>
  )
}