'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';

const SOCIALS = [
  { key: 'youtube', href: '#' },
  { key: 'discord', href: '#' },
  { key: 'twitter', href: '#' },
  { key: 'email', href: 'mailto:hello@mologrind.studio' },
] as const;

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-primary">
            {t('label')}
          </p>
          <h2 className="text-4xl font-medium leading-tight md:text-6xl">
            {t.rich('heading', {
              em: (chunks) => <span className="text-ember italic">{chunks}</span>,
            })}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg">
            {t('subtext')}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                className="rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                {t(s.key)}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
