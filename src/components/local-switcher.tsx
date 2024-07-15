'use client'

import { useLocale } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react'

export default function LocalSwitcher() {
  const [isPending ,startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>)=> {
    const nextLocale = e.target.value;

    // Construir la nueva URL con el locale seleccionado
    const newUrl = new URL(window.location.href);
    newUrl.pathname = newUrl.pathname.replace(`/${localActive}`, `/${nextLocale}`);

    // Agregar query params si existen
    if (searchParams) {
      newUrl.search = searchParams.toString();
    }

    startTransition(() => {
      router.replace(newUrl.toString());
    });
  }
    

  // Render
  return (
      <label className='border-2 rounded'>
        <p className='sr-only'>Change Language</p>
        <select defaultValue={localActive} className='text-black  font-medium bg-red-400' name="" id="" onChange={onSelectChange} disabled={isPending}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </label>
  )
}
