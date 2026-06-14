'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';

type ProjectItem = { title: string; desc: string; image: string };

export default function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as ProjectItem[];

  return (
    <section id="projects" className="relative px-6 py-28 md:py-40">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-primary">
              {t('label')}
            </p>
            <h2 className="text-4xl font-medium leading-tight md:text-6xl">
              {t.rich('heading', {
                em: (chunks) => <span className="text-ember italic">{chunks}</span>,
              })}
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">{t('subtext')}</p>
          </div>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {items.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`./images/${project.image}`}
                    alt={project.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
                    {t('comingSoon')}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
