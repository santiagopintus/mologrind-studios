'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';

export default function About() {
  const t = useTranslations('about');
  const pillars = t.raw('pillars') as string[];

  return (
    <section id="about" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-primary">
            {t('label')}
          </p>
          <h2 className="text-4xl font-medium leading-tight md:text-6xl">
            {t.rich('heading', {
              em: (chunks) => <span className="text-ember italic">{chunks}</span>,
            })}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t('body')}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative rounded-2xl border border-border bg-card/60 p-8 shadow-card backdrop-blur md:p-10">
            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-60 blur-xl" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {t('foundationsLabel')}
            </p>
            <ul className="mt-6 divide-y divide-border">
              {pillars.map((pillar, i) => (
                <li key={pillar} className="flex items-center justify-between py-4">
                  <span className="text-lg text-foreground md:text-xl">{pillar}</span>
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
