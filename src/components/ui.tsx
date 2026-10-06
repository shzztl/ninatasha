import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { Copy } from '@/data/profile'
import { cn } from '@/lib/utils'

/** Fades children in once they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'article'
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as any}
      className={cn('reveal', visible && 'is-visible', className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id: string
  eyebrow?: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('px-5 py-16 sm:px-8 md:py-24', className)}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-lavender-600 uppercase">{eyebrow}</p>
          )}
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-ink-soft">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Pill({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode
  tone?: 'neutral' | 'lavender' | 'olive'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-medium',
        tone === 'neutral' && 'border-white/80 bg-white/60 text-ink-soft',
        tone === 'lavender' && 'border-lavender-200/80 bg-lavender-50/80 text-lavender-700',
        tone === 'olive' && 'border-olive-200/80 bg-olive-50/80 text-olive-700',
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Small marker for content that still needs real information. */
export function ToBeAdded({ label = 'To be added' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-lavender-400/70 bg-lavender-50/70 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-lavender-700 not-italic">
      <span aria-hidden className="size-1.5 rounded-full bg-lavender-400" />
      {label}
    </span>
  )
}

/** Renders profile copy, flagging placeholder text. */
export function CopyText({ value, className }: { value: Copy; className?: string }) {
  if (typeof value === 'string') return <span className={className}>{value}</span>
  return (
    <span className={cn('placeholder-copy', className)}>
      {value.text} <ToBeAdded label="Placeholder" />
    </span>
  )
}

type ButtonProps = {
  href: string | null
  children: ReactNode
  variant?: 'primary' | 'glass'
  icon?: ReactNode
  external?: boolean
  className?: string
}

/**
 * Pill button. When `href` is null (link not yet provided) it renders as a
 * disabled, clearly marked placeholder rather than a fake link.
 */
export function PillButton({ href, children, variant = 'glass', icon, external, className }: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300',
    variant === 'primary' &&
      'bg-ink text-white shadow-[0_10px_24px_-10px_rgb(38_35_58/0.55)] hover:-translate-y-0.5 hover:bg-lavender-700',
    variant === 'glass' && 'glass-strong text-ink hover:-translate-y-0.5 hover:bg-white/90',
    className,
  )

  if (!href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title="Link to be added"
        className={cn(base, 'cursor-not-allowed opacity-60 hover:translate-y-0')}
      >
        {icon}
        {children}
        <span className="sr-only">(link to be added)</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      className={base}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon}
      {children}
    </a>
  )
}
