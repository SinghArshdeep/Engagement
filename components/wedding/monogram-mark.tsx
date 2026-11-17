
import { cn } from '@/lib/utils'

type MonogramMarkProps = {
  className?: string
  tone?: 'gold' | 'burgundy'
}

export function MonogramMark({
  className,
  tone = 'burgundy',
}: MonogramMarkProps) {
  return (
    <span
      role="img"
      aria-label="HJ heart monogram"
      className={cn('block', className)}
      style={{
        backgroundColor: tone === 'gold' ? '#C5A15C' : '#71394F',
        maskImage: "url('/hj-monogram.png')",
        WebkitMaskImage: "url('/hj-monogram.png')",
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
      }}
    />
  )
}
