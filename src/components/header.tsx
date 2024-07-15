'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocalSwitcher from './local-switcher';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  const buildLocalizedUrl = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <header className='mb-4 bg-sky-700 flex items-center justify-between'>
      <nav className='flex gap-4 bg-red-400 font-bold text-xl'>
        <Link href={buildLocalizedUrl('/')}>{t('home')}</Link>
        <Link href={buildLocalizedUrl('/about')}>{t('about')}</Link>
        <Link href={buildLocalizedUrl('/blog')}>{t('blog')}</Link>
        <Link href={buildLocalizedUrl('/contact')}>{t('contact')}</Link>
      </nav>
      <LocalSwitcher />
    </header>
  );
}
