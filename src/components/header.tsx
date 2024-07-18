// header.jsx
import { raleway } from '@/ui/font';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import LocalSwitcher from './local-switcher';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();

  return (
    <header className={`${raleway.className} text-cyan-400 my-8 border-b-2 p-2 flex items-center justify-between`}>
      <nav className='flex gap-4 font-bold text-xl'>
        <Link href={`/${locale}/`}>{t('home')}</Link>
        <Link href={`/${locale}/about`}>{t('about')}</Link>
        <Link href={`/${locale}/contact`}>{t('contact')}</Link>
      </nav>
        <LocalSwitcher />
    </header>
  );
}
