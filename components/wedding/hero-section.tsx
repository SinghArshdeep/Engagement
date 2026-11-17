import { wedding } from '@/lib/wedding-data'
import { EntranceExperience } from './entrance-experience'
import { MonogramMark } from './monogram-mark'
import { IkOnkar } from './sacred-symbols'

export function HeroSection() {
  return (
    <section
      id="entrance"
      aria-labelledby="hero-title"
      className="relative flex h-svh min-h-[640px] flex-col overflow-hidden bg-forest text-ivory"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(45deg,#C5A15C_0_1px,transparent_1px_26px),repeating-linear-gradient(-45deg,#C5A15C_0_1px,transparent_1px_26px)]"
        aria-hidden="true"
      />

      <header className="relative z-10 flex items-center justify-between px-4 pt-3 md:px-8 md:pt-5">
        <MonogramMark
          tone="gold"
          className="size-11 md:size-14"
        />
        <a
          href="#darbar-sahib"
          className="rounded-full px-3 py-1.5 text-sm italic text-champagne underline-offset-4 hover:underline"
        >
          Skip to invitation
        </a>
      </header>

      <div className="rise-in relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 text-center">
        <IkOnkar className="font-gurmukhi text-3xl leading-none text-gold md:text-4xl" />
        <h1 id="hero-title" className="mt-1">
          <span className="block text-xl font-medium uppercase tracking-[0.4em] text-ivory md:text-2xl">
            Anand Karaj
          </span>
          <span className="mt-1 block font-script text-[2.1rem] leading-tight text-champagne md:text-5xl">
            {wedding.groom} <span className="font-serif text-xl italic text-ivory/80 md:text-2xl">&</span>{' '}
            {wedding.bride}
          </span>
        </h1>
        <p className="mt-1 text-sm tracking-[0.25em] text-ivory/90 md:text-base">{wedding.dateUpper}</p>
      </div>

      <EntranceExperience />
    </section>
  )
}
