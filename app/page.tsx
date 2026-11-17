import { CeremonySection } from '@/components/wedding/ceremony-section'
import { DarbarSection } from '@/components/wedding/darbar-section'
import { HeroSection } from '@/components/wedding/hero-section'
import { RsvpSection } from '@/components/wedding/rsvp-section'
import { VenueSection } from '@/components/wedding/venue-section'
import { wedding } from '@/lib/wedding-data'

export default function Page() {
  return (
    <>
      <main>
        <HeroSection />
        <DarbarSection />
        <CeremonySection />
        <VenueSection />
        <RsvpSection />
      </main>
      <footer className="bg-forest px-5 py-8 text-center text-sm tracking-[0.2em] text-champagne/80 uppercase">
        {wedding.hashtag} &middot; {wedding.dateLong}
      </footer>
    </>
  )
}
