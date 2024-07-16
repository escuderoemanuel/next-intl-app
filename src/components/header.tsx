'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocalSwitcher from './local-switcher';
import { raleway } from '@/ui/font';

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
    <header className={`${raleway.className} text-cyan-400 my-8 border-b-2 p-2 flex items-center justify-between`}>
      <nav className='flex gap-4 font-bold text-xl'>
        <Link href={buildLocalizedUrl('/')}>{t('home')}</Link>
        <Link href={buildLocalizedUrl('/about')}>{t('about')}</Link>
        <Link href={buildLocalizedUrl('/contact')}>{t('contact')}</Link>
      </nav>
      <LocalSwitcher />
    </header>
  );
}
