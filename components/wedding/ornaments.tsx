import { cn } from '@/lib/utils'

export function GoldDivider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 24" className={cn('h-5 w-48 text-gold', className)} aria-hidden="true" fill="none">
      <path d="M0 12 H92" stroke="currentColor" strokeWidth="0.8" />
      <path d="M148 12 H240" stroke="currentColor" strokeWidth="0.8" />
      <path d="M92 12 C100 4, 108 4, 112 12 C108 20, 100 20, 92 12 Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M148 12 C140 4, 132 4, 128 12 C132 20, 140 20, 148 12 Z" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="120" cy="12" r="3.2" fill="currentColor" />
      <circle cx="120" cy="12" r="6.5" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="84" cy="12" r="1.2" fill="currentColor" />
      <circle cx="156" cy="12" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function BlossomSprig({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn('text-gold', className)}
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M8 112 C30 80, 52 52, 104 16" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M40 72 C48 60, 60 58, 66 60 C58 66, 50 72, 40 72 Z" fill="#A99159" opacity="0.8" />
      <path d="M62 50 C66 38, 78 32, 86 34 C80 42, 72 48, 62 50 Z" fill="#A99159" opacity="0.8" />
      <path d="M26 92 C24 80, 30 70, 36 68 C36 78, 32 86, 26 92 Z" fill="#A99159" opacity="0.8" />
      {[
        [30, 84, 1],
        [72, 44, 0.85],
        [100, 18, 0.7],
      ].map(([x, y, s]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${s})`}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="0" cy="-6" rx="3.6" ry="6.2" fill="#FFFDF8" stroke="#D8C9A6" strokeWidth="0.5" transform={`rotate(${a})`} />
          ))}
          <circle r="2" fill="#C5A15C" />
        </g>
      ))}
      <g transform="translate(52 62)">
        <circle r="7" fill="#DDB8B8" />
        <circle r="4.6" fill="#D3A3A5" />
        <path d="M-2.6 0.4 C-2 -3, 2.6 -2.8, 2.4 0.4 C2.2 2.6, -0.8 2.8, -1 0.6" fill="none" stroke="#9F5E66" strokeWidth="0.7" />
      </g>
    </svg>
  )
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-xs font-semibold uppercase tracking-[0.32em] md:text-sm', className)}>{children}</p>
  )
}
