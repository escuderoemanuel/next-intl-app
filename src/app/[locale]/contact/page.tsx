import {useTranslations} from 'next-intl';
import Link from 'next/link';
 
export default function ContactPage() {
  const t = useTranslations('ContactPage');
 
  return (
    <section className='w-auto h-screen flex flex-col'>
    <h1 className='text-xl font-bold mb-4 uppercase'>{t('title')}</h1>
    <h4 className='-center text-sm font-bold text-cyan-500 mb-4 uppercase'>{t('description')}</h4>
    <p className='-center font-light text-sm mb-2'>LinkedIn 👉 
      <Link className='underline text-cyan-300' href={t('linkedIn')}> {t('linkedIn')} </Link>
    </p>
    <p className='-center font-light text-sm mb-2'>Giinke 👉 
      <Link className='underline text-cyan-300' href={t('gitHub')}> {t('gitHub')} </Link>
    </p>
    <p className='-center font-light text-sm mb-2'>Web 👉 
      <Link className='underline text-cyan-300' href={t('website')}> {t('website')} </Link>
    </p>
    
  </section>
  )
}