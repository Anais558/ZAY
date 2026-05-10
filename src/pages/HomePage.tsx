import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { hero1 } from '@/assets/hero1'
import { paths } from '@/routes/paths'

/**
 * Homepage — vitrine conversion-first. Cœur du funnel : pousser vers catalogue / recherche.
 * Animations conservées 150–400ms (spring léger) pour un rendu premium sans coût CLS.
 */
export function HomePage() {
  const navLinks = [
    { label: 'Home', to: paths.home },
    { label: 'About', to: paths.about },
    { label: 'Services', to: paths.catalogue },
    { label: 'Blog', to: paths.search },
    { label: 'Team', to: paths.account },
    { label: 'Contact', to: paths.auth },
  ]

  return (
    <div className="bg-background text-foreground">
      <section className="relative w-full overflow-hidden">
        <div className="relative px-4 pb-20 pt-4 sm:px-6 md:px-10 md:pb-28 md:pt-8">
          <header className="mb-8 flex flex-col gap-5 md:mb-12 md:flex-row md:items-center md:justify-between lg:mb-14">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary-pale ring-1 ring-brand-primary-light">
              <span className="h-5 w-5 rounded-sm bg-primary/80" />
            </div>
            <nav className="flex flex-wrap items-center gap-2 md:gap-3" aria-label="Navigation principale">
              {navLinks.map((item, idx) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={
                    idx === 0
                      ? 'rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_6px_16px_rgba(212,83,126,0.34)]'
                      : 'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary-pale/75 hover:text-foreground'
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-10">
            <motion.div
              className="space-y-5 md:space-y-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary-light/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                New collection
              </div>
              <h1 className="max-w-xl font-serif text-[2.3rem] leading-[1.08] text-primary sm:text-5xl md:text-6xl">
                Woman New Collection 2022
              </h1>
              <p className="max-w-lg text-sm leading-7 text-muted-foreground md:text-[1rem]">
                Elegantly crafted premium pieces for confident women. Distinctive silhouettes, refined
                finishes, and a graceful palette that elevates every moment.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="rounded-full px-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(212,83,126,0.38)]"
                >
                  <Link to={paths.catalogue}>Shop now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-8 text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-brand-primary-pale/60"
                >
                  <Link to={paths.search}>Explore</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative flex min-h-[340px] items-center justify-center sm:min-h-[380px] md:min-h-[430px]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-brand-primary-light/50" />
              <div className="absolute h-[260px] w-[260px] rounded-full border border-brand-primary-light/70 md:h-[360px] md:w-[360px]" />
              <div className="absolute h-[330px] w-[330px] rounded-full border border-brand-primary-light/40 md:h-[460px] md:w-[460px]" />
              <div className="relative h-[230px] w-[230px] overflow-hidden rounded-full bg-brand-primary-pale ring-1 ring-brand-primary-light shadow-[0_14px_34px_rgba(212,83,126,0.22)] md:h-[320px] md:w-[320px]">
                <img
                  src={hero1}
                  alt="Mannequin collection ZAY"
                  loading="eager"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <span className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white md:left-8">
                Sale
              </span>
              <span className="absolute right-6 top-[42%] inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-[0_6px_15px_rgba(212,83,126,0.4)] md:right-12">
                Y
              </span>
              <span className="absolute right-0 top-12 h-14 w-14 rounded-full bg-primary/70 blur-[1.5px] md:h-20 md:w-20" />
            </motion.div>
          </div>

          <span className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-2 border-primary/45 md:-left-5 md:h-14 md:w-14" />
          <div className="absolute bottom-7 left-8 grid grid-cols-8 gap-3 md:bottom-9 md:left-16">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-brand-primary-light/80" />
            ))}
          </div>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 220"
          className="absolute inset-x-0 bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="waveBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.8" />
            </filter>
          </defs>
          <path
            d="M0,110 C230,10 360,180 540,130 C710,80 860,40 1050,120 C1180,170 1310,190 1440,95 L1440,220 L0,220 Z"
            className="fill-brand-primary-light/70"
          />
          <path
            d="M0,125 C220,30 360,190 545,145 C735,95 895,52 1075,130 C1225,190 1330,195 1440,110 L1440,220 L0,220 Z"
            className="fill-primary/75"
          />
          <path
            d="M0,125 C220,30 360,190 545,145 C735,95 895,52 1075,130 C1225,190 1330,195 1440,110"
            fill="none"
            stroke="rgba(212,83,126,0.52)"
            strokeWidth="6"
            filter="url(#waveBlur)"
          />
        </svg>
      </section>
      <section className="mx-auto mt-5 flex w-full max-w-7xl flex-wrap justify-center gap-3 px-4 pb-6 md:mt-7 md:px-8">
        {['Dresses', 'Tops', 'Pants', 'Accessories'].map((label) => (
          <Button
            key={label}
            variant="outline"
            className="rounded-full px-7 text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-brand-primary-pale/65"
          >
            {label}
          </Button>
        ))}
      </section>
    </div>
  )
}
