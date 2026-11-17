import { Mail, MessageCircle, Phone } from 'lucide-react'
import { wedding } from '@/lib/wedding-data'
import { Reveal } from './reveal'
import Image from 'next/image'

export function RsvpSection() {
  const { phone, email, whatsappUrl } = wedding.rsvp
  type Contact = { href: string; label: string; icon: typeof Phone; external?: boolean }
  const contacts: Contact[] = []
  if (phone) contacts.push({ href: `tel:${phone}`, label: 'Call', icon: Phone })
  if (whatsappUrl) contacts.push({ href: whatsappUrl, label: 'WhatsApp', icon: MessageCircle, external: true })
  if (email) contacts.push({ href: `mailto:${email}`, label: 'Email', icon: Mail })

  return (
    <section
      id="rsvp"
      aria-labelledby="rsvp-title"
      className="bg-[linear-gradient(180deg,#F6E6D6,#F3DCC8)] px-4 py-16 text-charcoal md:py-24"
    >
      <Reveal className="relative mx-auto max-w-md border border-charcoal/70 bg-[#FBEADB]/70 px-6 py-14 text-center shadow-[0_30px_60px_-40px_rgba(38,35,31,0.6)]">
        <Image
          src="/hj-monogram.png"
          alt="H and J intertwined heart monogram"
          width={346}
          height={402}
          className="mx-auto h-auto w-48 md:w-56"
        />
        <p className="mt-8 text-3xl font-semibold italic text-charcoal">{wedding.hashtag}</p>

        <h2 id="rsvp-title" className="mt-8 font-script text-5xl text-charcoal md:text-6xl">
          R.S.V.P.
        </h2>
        <p className="mx-auto mt-4 max-w-xs text-pretty text-lg leading-relaxed">
          Your presence and blessings would mean the world to us.
        </p>
        <ul className="mt-6 space-y-1 text-2xl italic">
          {wedding.families.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        {contacts.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {contacts.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 rounded-full border border-charcoal px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-charcoal hover:text-ivory"
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  )
}
