import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className='mb-4 text-neutral-300 text-center flex text-sm items-center gap-2 mx-auto'>
      <p>{t('license')}</p>
        <Link href={`https://emanuelescudero.ar`}>
        <Image 
          src={t('logo')}
          alt={t('logoAlt')}
          width={20}
          height={20}
        >
        </Image>
        </Link>
  </footer>
  )
}
