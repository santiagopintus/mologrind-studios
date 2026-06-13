'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggle() {
    const next = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: next });
  }

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
      aria-label={`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`}
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
