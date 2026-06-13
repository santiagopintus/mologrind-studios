'use client';
import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';

type PillarItem = { title: string; body: string };

export default function Vision() {
  const t = useTranslations('vision');
  const pillars = t.raw('pillars') as PillarItem[];

  return (
    <section id="vision" className="relative overflow-hidden px-6 py-28 md:py-40">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[40vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 max-w-2xl text-center md:mx-auto">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-primary">
              {t('label')}
            </p>
            <h2 className="text-4xl font-medium leading-tight md:text-6xl">
              {t.rich('heading', {
                em: (chunks) => <span className="text-ember italic">{chunks}</span>,
              })}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 140}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-10 shadow-card transition-all duration-500 hover:border-primary/40">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-6 text-3xl font-medium md:text-4xl">{pillar.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
