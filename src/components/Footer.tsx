import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/images/mologrind-logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 opacity-90"
          />
          <div>
            <p className="text-sm font-medium tracking-[0.18em] text-foreground">
              {t('studioName')}
            </p>
            <p className="text-xs text-muted-foreground">{t('tagline')}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          {t('copyright', { year })}
        </p>
      </div>
    </footer>
  );
}
