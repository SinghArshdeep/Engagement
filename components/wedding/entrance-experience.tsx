'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { NishanSahib } from './sacred-symbols'

type Phase = 'closed' | 'opening' | 'entering' | 'passage' | 'leaving' | 'done'

const DARBAR_ID = 'darbar-sahib'

function DoorPanel({ side }: { side: 'left' | 'right' }) {
  return (
    <div
      className={`door-panel door-${side} absolute inset-y-0 ${side === 'left' ? 'left-0' : 'right-0'} w-1/2`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 300" preserveAspectRatio="none" className="h-full w-full">
        <defs>
          <linearGradient id={`wood-${side}`} x1="0" x2="1">
            <stop offset="0" stopColor={side === 'left' ? '#0E2623' : '#163A35'} />
            <stop offset="1" stopColor={side === 'left' ? '#163A35' : '#0E2623'} />
          </linearGradient>
        </defs>
        <rect width="100" height="300" fill={`url(#wood-${side})`} />
        <rect x="6" y="6" width="88" height="288" fill="none" stroke="#C5A15C" strokeWidth="2" />
        <rect x="12" y="12" width="76" height="276" fill="none" stroke="#C5A15C" strokeWidth="0.8" opacity="0.7" />
        <path d="M18 120 V60 C18 40, 50 30, 50 22 C50 30, 82 40, 82 60 V120 Z" fill="none" stroke="#C5A15C" strokeWidth="1.4" />
        <path d="M26 112 V64 C26 50, 50 42, 50 36 C50 42, 74 50, 74 64 V112 Z" fill="#C5A15C" opacity="0.08" stroke="#C5A15C" strokeWidth="0.6" />
        <g transform="translate(50 82)" fill="none" stroke="#E8D5A3" strokeWidth="0.9">
          {[0, 45, 90, 135].map((a) => (
            <ellipse key={a} rx="4" ry="13" transform={`rotate(${a})`} />
          ))}
          <circle r="3" fill="#C5A15C" stroke="none" />
        </g>
        <rect x="18" y="140" width="64" height="60" fill="none" stroke="#C5A15C" strokeWidth="1.2" />
        <g transform="translate(50 170)" fill="none" stroke="#C5A15C" strokeWidth="0.9">
          <rect x="-12" y="-12" width="24" height="24" transform="rotate(45)" />
          <circle r="6" />
          <circle r="2" fill="#C5A15C" />
        </g>
        <rect x="18" y="214" width="64" height="66" fill="none" stroke="#C5A15C" strokeWidth="1.2" />
        <path d="M30 266 C40 236, 60 236, 70 266" fill="none" stroke="#C5A15C" strokeWidth="0.8" />
        {[0, 1, 2, 3, 4].map((r) =>
          [0, 1, 2].map((c) => (
            <circle key={`${r}-${c}`} cx={30 + c * 20} cy={224 + r * 12} r="1.1" fill="#E8D5A3" opacity="0.75" />
          )),
        )}
        <g transform={`translate(${side === 'left' ? 88 : 12} 170)`}>
          <circle r="5.5" fill="none" stroke="#E8D5A3" strokeWidth="1.6" />
          <circle cy="-6" r="1.8" fill="#C5A15C" />
        </g>
        <line x1={side === 'left' ? 100 : 0} x2={side === 'left' ? 100 : 0} y1="0" y2="300" stroke="#C5A15C" strokeWidth="2" />
      </svg>
    </div>
  )
}

export function EntranceExperience() {
  const [phase, setPhase] = useState<Phase>('closed')
  const timers = useRef<number[]>([])
  const [announcement, setAnnouncement] = useState('')

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }

  const unlockScroll = () => {
    document.documentElement.style.overflow = ''
  }

  const jumpToDarbar = useCallback(() => {
    const target = document.getElementById(DARBAR_ID)
    target?.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' })
    target?.focus({ preventScroll: true })
  }, [])

  const finish = useCallback(() => {
    clearTimers()
    unlockScroll()
    jumpToDarbar()
    setPhase('leaving')
    setAnnouncement('You have entered the Darbar Sahib.')
    timers.current.push(window.setTimeout(() => setPhase('done'), 900))
  }, [jumpToDarbar])

  const openDoors = useCallback(() => {
    if (phase !== 'closed' && phase !== 'done') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setPhase('done')
      jumpToDarbar()
      setAnnouncement('You have entered the Darbar Sahib.')
      return
    }
    document.documentElement.style.overflow = 'hidden'
    setAnnouncement('The Gurudwara doors are opening.')
    setPhase('opening')
    timers.current.push(window.setTimeout(() => setPhase('entering'), 1500))
    timers.current.push(window.setTimeout(() => setPhase('passage'), 2500))
    timers.current.push(window.setTimeout(finish, 5600))
  }, [phase, finish, jumpToDarbar])

  useEffect(
    () => () => {
      clearTimers()
      unlockScroll()
    },
    [],
  )

  const doorsOpen = phase !== 'closed'
  const inSequence = phase === 'opening' || phase === 'entering' || phase === 'passage'
  const showPassage = phase === 'passage' || phase === 'leaving'

  return (
    <>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
          <path d="M0 1 L0 0.3 C0 0.13 0.28 0.07 0.5 0 C0.72 0.07 1 0.13 1 0.3 L1 1 Z" />
        </clipPath>
      </svg>

      <div className="stage-wrap relative min-h-0 flex-1 overflow-hidden">
        <div className="stage absolute bottom-0 left-1/2 -translate-x-1/2" data-phase={phase}>
          <img
            src="/illustrations/gurudwara-exterior.webp"
            alt="An illustrated white marble Gurudwara Sahib with golden domes and warm glowing arches beneath a deep green evening sky"
            className="absolute inset-0 h-full w-full select-none object-cover"
            draggable={false}
            fetchPriority="high"
          />

          <div
            className="absolute left-1/2 top-[42.6%] flex w-[12.5%] -translate-x-1/2 items-center justify-center rounded-[2px] border border-gold bg-ivory/95 py-[0.5%] shadow-[0_0_0_2px_rgba(16,45,42,0.35)]"
            style={{ fontSize: '2.1cqh' }}
          >
            <span lang="pa" className="font-gurmukhi font-medium leading-none text-forest">
              ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ
            </span>
          </div>

          <NishanSahib className="absolute left-[29.6%] top-[3%] h-[86%] w-[8.8%]" />

          <div
            className="door-glow pointer-events-none absolute left-[42%] top-[47%] h-[38%] w-[16%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,197,110,0.55),transparent_68%)]"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={openDoors}
            data-open={doorsOpen}
            disabled={inSequence}
            aria-label={doorsOpen ? 'Doors open. Continue to the Darbar Sahib' : 'Open the Gurudwara doors and enter'}
            className="door-frame group absolute left-[44.7%] top-[50.4%] h-[30.9%] w-[10.7%] cursor-pointer focus-visible:outline-none"
          >
            <span
              className="door-light absolute inset-0 bg-[url(/illustrations/entrance-passage.webp)] bg-cover bg-[center_70%]"
              aria-hidden="true"
            />
            <span
              className="door-light absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,226,160,0.7),rgba(255,210,130,0.1)_70%)]"
              aria-hidden="true"
            />
            <span className="absolute inset-0 [perspective:900px]">
              <DoorPanel side="left" />
              <DoorPanel side="right" />
            </span>
          </button>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-[44.7%] top-[50.4%] h-[30.9%] w-[10.7%] overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 100 L0 30 C0 13 28 7 50 0 C72 7 100 13 100 30 L100 100"
              fill="none"
              stroke="#C5A15C"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-forest via-forest/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-4 flex flex-col items-center gap-2 px-6 md:bottom-6">
          <button
            type="button"
            onClick={openDoors}
            disabled={inSequence}
            className="rounded-full border border-gold bg-forest/85 px-7 py-3 text-base font-semibold tracking-[0.14em] text-champagne uppercase shadow-[0_0_30px_rgba(197,161,92,0.25)] transition-colors hover:bg-gold hover:text-forest disabled:opacity-60"
          >
            {doorsOpen && !inSequence ? 'Enter Again' : 'Enter the Gurudwara'}
          </button>
          <p className="text-sm italic text-ivory/80">Touch the doors to enter</p>
        </div>
      </div>

      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>

      {(phase === 'entering' || showPassage) && (
        <div
          className={`fixed inset-0 z-50 overflow-hidden bg-ivory transition-opacity duration-700 ${
            showPassage && phase !== 'leaving' ? 'opacity-100' : 'opacity-0'
          } ${phase === 'leaving' ? 'pointer-events-none' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Entering the Gurudwara"
        >
          <img
            src="/illustrations/entrance-passage.webp"
            alt="A cream marble passage of carved arches and golden lanterns leading towards a warm glowing doorway"
            className={`h-full w-full object-cover ${showPassage ? 'passage-walk' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/10 via-transparent to-ivory/60" />
          <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-4 px-6 text-center">
            <button
              type="button"
              onClick={finish}
              className="rounded-full border border-forest/60 bg-ivory/85 px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  )
}
