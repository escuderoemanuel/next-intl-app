'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = nextLocale; // Replace the locale segment
    const newPath = segments.join('/');
    
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <label className='border-none rounded text-black bg-red-400'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='font-medium rounded p-1'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>English</option>
        <option value='es'>Spanish</option>
      </select>
    </label>
  );
}
