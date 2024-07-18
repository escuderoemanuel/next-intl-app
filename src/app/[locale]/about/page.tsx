import {useTranslations} from 'next-intl';
import Link from 'next/link';
 
export default function AboutPage() {
  const t = useTranslations('AboutPage');
 
  return (
    <section className='w-auto h-screen flex flex-col'>
    <h1 className='text-xl font-bold mb-8 uppercase'>{t('title')}</h1>
    <h4 className='w-fit text-md font-bold text-neutral-950 bg-cyan-400 px-2 mb-8 uppercase'>{t('description')}</h4>
    <p className='-center font-light text-md mb-2'>{t('text1')} 
      <Link className='underline text-blue-400' href={t('repoLink')}>{t('repoLink')}</Link>
    </p>
    <p className='-center font-light text-md mb-2'>{t('text2')}</p>
    <p className='-center font-bold text-md uppercase'>{t('text3')}</p>
    
  </section>
  )
}