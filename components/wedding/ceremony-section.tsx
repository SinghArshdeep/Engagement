import { wedding } from '@/lib/wedding-data'
import { cn } from '@/lib/utils'
import { BlossomSprig, Eyebrow, GoldDivider } from './ornaments'
import { Reveal } from './reveal'

export function CeremonySection() {
  return (
    <section id="ceremony" aria-labelledby="ceremony-title" className="bg-ivory px-4 py-16 text-charcoal md:py-24">
      <Reveal className="relative mx-auto max-w-3xl border border-gold px-5 py-14 text-center md:px-14 md:py-20">
        <div className="pointer-events-none absolute inset-2 border border-gold/40" aria-hidden="true" />
        <BlossomSprig className="absolute -left-3 -top-3 size-20 md:size-28" />
        <BlossomSprig className="absolute -right-3 -top-3 size-20 md:size-28" flip/>

        <Eyebrow className="text-[#8A6B2F]">The Wedding Ceremony</Eyebrow>
        <h2 id="ceremony-title" className="mt-3 text-5xl font-medium text-forest md:text-7xl">
          Anand Karaj
        </h2>
        <GoldDivider className="mx-auto mt-5" />

        <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed md:text-xl">
          Together with the families, we invite you to celebrate the Anand Karaj of
        </p>
        <p className="mt-6 font-script text-5xl leading-tight text-forest md:text-6xl">{wedding.groom}</p>
        <p className="my-1 text-xl italic text-[#8A6B2F]">with</p>
        <p className="font-script text-5xl leading-tight text-forest md:text-6xl">{wedding.bride}</p>

        <p className="mt-8 text-lg font-semibold tracking-[0.12em] text-burgundy md:text-xl">
          <time dateTime={wedding.dateISO}>{wedding.dateLong}</time>
        </p>

        <ol className="mx-auto mt-10 flex max-w-sm flex-col gap-3" aria-label="Order of the day">
          {wedding.schedule.map((item) => (
            <li
              key={item.title}
              className={cn(
                'flex items-center justify-between gap-4 rounded-sm border px-5 py-4 text-left',
                item.highlight
                  ? 'border-gold bg-forest text-ivory shadow-[0_18px_40px_-22px_rgba(16,45,42,0.9)]'
                  : 'border-gold/40 bg-marble/60',
              )}
            >
              <span className={cn('text-xl', item.highlight ? 'font-semibold text-champagne md:text-2xl' : 'font-medium')}>
                {item.title}
              </span>
              <span className={cn('text-base tracking-wider', item.highlight ? 'text-ivory' : 'text-muted-foreground')}>
                {item.time}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
