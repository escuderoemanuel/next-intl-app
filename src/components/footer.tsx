import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className='mb-4 bg-sky-700 text-center flex items-center gap-4 mx-auto'>
      <p>{t('license')}</p>
        <Link href={`https://emanuelescudero.ar`}>
        <Image 
          src='/vercel.svg'
          alt='Vercel Logo'
          width={30}
          height={30}
        >
        </Image>
        </Link>
  </footer>
  )
}
