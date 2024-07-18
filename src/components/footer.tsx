import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className='mt-8 py-4 text-neutral-100 text-center flex text-xs items-center gap-2 mx-auto'>
      <p>{t('license')}</p>
        <Link href={`https://emanuelescudero.ar`}>
        <Image 
          src={t('logo')}
          alt={t('logoAlt')}
          width={18}
          height={18}
        >
        </Image>
        </Link>
  </footer>
  )
}
