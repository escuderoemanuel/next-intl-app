import {useTranslations} from 'next-intl';
import Link from 'next/link';
 
export default function ContactPage() {
  const t = useTranslations('ContactPage');
 
  return (
    <section className='w-auto h-screen flex flex-col'>
    <h1 className='text-xl font-bold mb-8 uppercase'>{t('title')}</h1>
    <h4 className='w-fit text-md font-bold text-neutral-950 bg-cyan-400 px-2 mb-8 uppercase'>{t('description')}</h4>
    <p className='-center font-light text-md mb-2'>LinkedIn 👉 
      <Link className='underline text-blue-400' href={t('linkedIn')}> {t('linkedIn')} </Link>
    </p>
    <p className='-center font-light text-md mb-2'>GitHub 👉 
      <Link className='underline text-blue-400' href={t('gitHub')}> {t('gitHub')} </Link>
    </p>
    <p className='-center font-light text-md mb-2'>Web 👉 
      <Link className='underline text-blue-400' href={t('website')}> {t('website')} </Link>
    </p>
    
  </section>
  )
}