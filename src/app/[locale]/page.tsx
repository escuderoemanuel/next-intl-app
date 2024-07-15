import {useTranslations} from 'next-intl';
 
export default function IndexPage() {
  const t = useTranslations('IndexPage');
 
  return (
    <section className='w-auto h-screen flex flex-col'>
      <h1 className='text-3xl'>{t('title')}</h1>
      <p className='-center text-xl'>{t('description')}</p>
    </section>
  )
}