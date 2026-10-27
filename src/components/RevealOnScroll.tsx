import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: 'div' | 'section'
}

export function RevealOnScroll({
  children,
  className = '',
  delayMs = 0,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style = { ['--reveal-delay' as string]: `${delayMs}ms` } as CSSProperties

  return (
    <Tag
      ref={ref as never}
      className={`reveal-on-scroll ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  )
}
