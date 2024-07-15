import {useTranslations} from 'next-intl';
 
export default function AboutPage() {
  const t = useTranslations('AboutPage');
 
  return (
    <section className='h-screen w-screen flex flex-col'>
      <h1 className='text-3xl'>{t('title')}</h1>
      <p className='-center text-xl'>{t('description')}</p>
    </section>
  )
}