'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    const newUrl = new URL(window.location.href);
    newUrl.pathname = newUrl.pathname.replace(`/${localActive}`, `/${nextLocale}`);

    if (searchParams) {
      newUrl.search = searchParams.toString();
    }

    startTransition(() => {
      router.replace(newUrl.toString());
    });
  };

  return (
    <label className='border-none text-black'>
      <p className='sr-only'>Change Language</p>
      <select
        defaultValue={localActive}
        className='font-medium rounded p-1'
        name=""
        id=""
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </label>
  );
}
