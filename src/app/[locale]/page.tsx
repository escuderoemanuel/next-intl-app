import {useTranslations} from 'next-intl';


export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <section className='w-auto h-screen flex flex-col'>
      <h1 className='text-xl font-bold mb-8 uppercase'>{t('title')}</h1>
      <h4 className='w-fit text-md font-bold text-neutral-950 bg-cyan-400 px-2 mb-8 uppercase'>{t('description')}</h4>
      <p className='-center font-light text-md mb-2'>{t('text1')}</p>
      <p className='-center font-light text-md'>{t('text2')}</p>
    </section>
  )
}


