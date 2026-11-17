export type ScheduleItem = {
  time: string
  title: string
  highlight?: boolean
}

export const wedding = {
  groom: 'Jasneet Singh',
  bride: 'Harpreet Kaur',
  monogram: {
    first: 'H',
    second: 'J',
    label: 'Harpreet and Jasneet floral wedding monogram',
  },
  hashtag: '#JasDiPreet',
  dateLong: 'Friday, 11 December 2026',
  dateUpper: 'FRIDAY, 11 DECEMBER 2026',
  dateISO: '2026-12-11',
  schedule: [
    { time: '10:00 AM', title: 'Sehra Bandi' },
    { time: '11:30 AM', title: 'Anand Karaj', highlight: true },
    { time: '01:00 PM', title: 'Lunch' },
  ] satisfies ScheduleItem[],
  venue: {
    name: 'Botanix Nature Resort',
    location: 'Damdama Lake, Gurugram',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Botanix+Nature+Resort+Damdama+Lake+Gurugram',
  },
  gurbani: {
    gurmukhi: [
      'ਸਭੁ ਕਿਛੁ ਵਸਗਤਿ ਸਾਹਿਬੈ ਆਪੇ ਕਰਣ ਕਰੇਵ ॥',
      'ਸਤਿਗੁਰ ਕੈ ਬਲਿਹਾਰਣੈ ਮਨਸਾ ਸਭੁ ਪੂਰੇਵ ॥੩॥',
    ],
    translation:
      'Everything rests in the hands of the Divine Master; He alone is the Doer of all. Through the True Guru, all hopes and aspirations are fulfilled.',
  },
  families: ['Bhogal Family', 'Rayat Family'],
  // Add genuine contact details here to show RSVP buttons. Leave empty to hide them.
  rsvp: {
    phone: '',
    email: '',
    whatsappUrl: '',
  },
} as const
