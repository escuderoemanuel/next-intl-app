import {useTranslations} from 'next-intl';
 
export default function BlogPage() {
  const t = useTranslations('BlogPage');
 
  return (
    <section className='h-screen w-screen flex flex-col'>
      <h1 className='text-3xl'>{t('title')}</h1>
      <p className='-center text-xl'>{t('description')}</p>
    </section>
  )
}