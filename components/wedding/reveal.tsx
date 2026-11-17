'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'figure' | 'li'
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-visible={visible}
      className={cn('reveal', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
