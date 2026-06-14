'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

const NAV_KEYS = ['home', 'about', 'projects', 'vision', 'contact'] as const;
const NAV_HREFS = ['#home', '#about', '#projects', '#vision', '#contact'];

export default function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="./images/mologrind-logo.png"
            alt="Mologrind Studios"
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10"
          />
          <span className="hidden text-sm font-medium tracking-[0.18em] text-foreground sm:inline">
            MOLOGRIND
            <span className="ml-1 text-muted-foreground">STUDIOS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_KEYS.map((key, i) => (
            <a
              key={key}
              href={NAV_HREFS[i]}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
          >
            {t('followJourney')}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-foreground transition ${open ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-5 bg-foreground transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4">
            {NAV_KEYS.map((key, i) => (
              <a
                key={key}
                href={NAV_HREFS[i]}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-muted-foreground hover:text-foreground"
              >
                {t(key)}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-center text-sm font-medium text-primary"
              >
                {t('followJourney')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
