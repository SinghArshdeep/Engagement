import { MapPin } from 'lucide-react'
import { wedding } from '@/lib/wedding-data'
import { Eyebrow, GoldDivider } from './ornaments'
import { Reveal } from './reveal'

export function VenueSection() {
  return (
    <section id="venue" aria-labelledby="venue-title" className="bg-forest px-5 py-16 text-ivory md:py-24">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Eyebrow className="text-champagne">The Venue</Eyebrow>
        <p className="mt-4 text-lg italic text-ivory/80">The Anand Karaj will be held at</p>
        <h2 id="venue-title" className="mt-2 text-balance text-4xl font-medium text-ivory md:text-6xl">
          {wedding.venue.name}
        </h2>
        <p className="mt-2 text-lg tracking-[0.18em] text-champagne uppercase">{wedding.venue.location}</p>
        <GoldDivider className="mt-5" />
      </Reveal>

      <Reveal as="figure" className="mx-auto mt-10 max-w-5xl" delay={120}>
        <div className="rounded-md border border-gold/70 p-2 md:p-3">
          <img
            src="/illustrations/botanix-venue.webp"
            alt="An illustrated lakeside resort at Damdama Lake with green hills, thatched cottages, garden lawns and ivory drapery lining a pathway"
            className="aspect-[1376/768] w-full rounded-sm object-cover"
            loading="lazy"
          />
        </div>
      </Reveal>

      <Reveal className="mt-10 flex justify-center">
        <a
          href={wedding.venue.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:bg-transparent hover:text-champagne"
        >
          <MapPin className="size-4" aria-hidden="true" />
          View Directions
          <span className="sr-only">(opens Google Maps in a new tab)</span>
        </a>
      </Reveal>
    </section>
  )
}
