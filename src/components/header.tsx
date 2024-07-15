import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className='mb-4 bg-sky-700 flex items-center justify-between'>
      <nav className='flex gap-4 bg-red-400 font-bold text-xl'>
      <Link href='/'>{t('home')}</Link>
      <Link href='/about'>{t('about')}</Link>
      <Link href='/blog'>{t('blog')}</Link>
      <Link href='/contact'>{t('contact')}</Link>
      </nav>
      <LocalSwitcher/>
    </header>
  )
}
