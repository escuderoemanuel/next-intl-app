import {useTranslations} from 'next-intl';
import Link from 'next/link';
 
export default function AboutPage() {
  const t = useTranslations('AboutPage');
 
  return (
    <section className='w-auto h-screen flex flex-col'>
    <h1 className='text-xl font-bold mb-4 uppercase'>{t('title')}</h1>
    <h4 className='-center text-sm font-bold text-cyan-500 mb-4 uppercase'>{t('description')}</h4>
    <p className='-center font-light text-sm mb-2'>{t('text1')} 
      <Link className='underline text-cyan-300' href={t('repoLink')}>{t('repoLink')}</Link>
    </p>
    <p className='-center font-light text-sm mb-2'>{t('text2')}</p>
    <p className='-center font-light text-sm uppercase'>{t('text3')}</p>
    
  </section>
  )
}