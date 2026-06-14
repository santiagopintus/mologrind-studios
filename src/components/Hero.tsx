import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import Particles from './Particles';

export default async function Hero() {
  const t = await getTranslations('hero');

  return (
    <section id="home" className="bg-hero relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div
        aria-hidden
        className="animate-glow-pulse absolute left-1/2 top-1/3 -z-10 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
      />
      <Particles />
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <Image
          src="./images/mologrind-logo.png"
          alt="Mologrind Studios crest"
          width={220}
          height={220}
          className="animate-rise-in mb-10 h-40 w-40 drop-shadow-[0_0_40px_rgba(244,166,42,0.35)] md:h-56 md:w-56"
          priority
        />
        <p
          className="animate-rise-in mb-5 text-xs font-medium uppercase tracking-[0.45em] text-primary"
          style={{ animationDelay: '120ms' }}
        >
          {t('eyebrow')}
        </p>
        <h1
          className="animate-rise-in text-balance text-5xl font-medium leading-[1.05] md:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: '220ms' }}
        >
          {t.rich('heading', {
            em: (chunks) => <span className="text-ember italic">{chunks}</span>,
          })}
        </h1>
        <p
          className="animate-rise-in mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ animationDelay: '360ms' }}
        >
          {t('subtext')}
        </p>
        <div
          className="animate-rise-in mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: '500ms' }}
        >
          <a
            href="#vision"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            {t('cta1')}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
          >
            {t('cta2')}
          </a>
        </div>
      </div>
    </section>
  );
}
