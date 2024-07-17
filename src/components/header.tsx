import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { raleway } from '@/ui/font';


export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className={`${raleway.className} text-cyan-400 my-8 border-b-2 p-2 flex items-center justify-between`}>
      <nav className='flex gap-4 font-bold text-xl'>
        <Link href={('/')}>{t('home')}</Link>
        <Link href={('/about')}>{t('about')}</Link>
        <Link href={('/contact')}>{t('contact')}</Link>
      </nav>
      <LocalSwitcher />
    </header>
  );
}
