// components/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = locale === 'en' ? 'id' : 'en';

  // Jika ingin menggunakan router (tidak direkomendasikan untuk language switching)
  // const handleSwitch = () => {
  //   router.replace(`/${switchTo}${pathname}`);
  // };

  return (
    <Link href={pathname} locale={switchTo}>
      Switch to {switchTo.toUpperCase()}
    </Link>
  );
}