import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Noto_Sans_Gurmukhi, Pinyon_Script } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pinyon',
  display: 'swap',
})

const gurmukhi = Noto_Sans_Gurmukhi({
  subsets: ['gurmukhi'],
  weight: ['400', '500', '600'],
  variable: '--font-gurmukhi',
  display: 'swap',
})

const description =
  'With the blessings of the Almighty, Jasneet Singh and Harpreet Kaur are getting married.'

export const metadata: Metadata = {
  title: 'Jasneet & Harpreet | Anand Karaj',
  description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: 'Jasneet & Harpreet | Anand Karaj',
    description,
    type: 'website',
    images: [{ url: '/og-image1.jpg', width: 1200, height: 630, alt: 'An illustrated Sikh Gurudwara Sahib at dusk' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasneet & Harpreet | Anand Karaj',
    description,
    images: ['/og-image1.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#102D2A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${pinyon.variable} ${gurmukhi.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
