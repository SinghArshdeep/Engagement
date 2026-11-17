import { wedding } from '@/lib/wedding-data'
import { Eyebrow, GoldDivider } from './ornaments'
import { Reveal } from './reveal'
import { IkOnkar } from './sacred-symbols'

export function DarbarSection() {
  return (
    <section
      id="darbar-sahib"
      tabIndex={-1}
      aria-labelledby="darbar-title"
      className="relative scroll-mt-0 bg-gradient-to-b from-marble via-ivory to-ivory px-5 pb-20 pt-16 text-charcoal outline-none md:pb-28 md:pt-24"
    >
      <p className="sr-only sm:hidden">
        With the blessings of Waheguru and our elders, we joyfully invite you to join us as we begin our journey
        together through the sacred Anand Karaj.
      </p>

      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 id="darbar-title" className="mt-3 text-balance text-2xl font-medium text-forest md:text-4xl">
          With the blessings of Waheguru, two families come together to celebrate a sacred union
        </h2>
        <GoldDivider className="mt-5" />
      </Reveal>
      
      <Reveal as="figure" className="mx-auto mt-10 w-full max-w-5xl" delay={150}>
        <div className="rounded-lg border border-gold/70 bg-ivory p-2 shadow-[0_30px_60px_-30px_rgba(16,45,42,0.45)] md:p-3">
          <img
            src="/illustrations/darbar-sahib-2.webp"
            alt="Inside the Darbar Sahib: Sri Guru Granth Sahib Ji rests beneath a golden palki, with the bride and groom seated together before the Guru."
            className="block h-auto w-full rounded-md object-contain"
            loading="lazy"
          />
        </div>
      </Reveal>


      <Reveal className="mx-auto mt-14 flex max-w-2xl flex-col items-center text-center">
        <a
          href="#ceremony"
          className="mt-8 rounded-full border border-forest bg-forest px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-transparent hover:text-forest"
        >
          Continue to the Anand Karaj
        </a>
      </Reveal>
    </section>
  )
}
