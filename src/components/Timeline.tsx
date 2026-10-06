import type { ReactNode } from 'react'
import { Reveal } from './ui'

/** Vertical timeline with a soft rail and glass node markers. */
export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative space-y-6 pl-8 sm:pl-12">
      <span
        aria-hidden
        className="absolute top-3 bottom-3 left-[11px] w-px bg-gradient-to-b from-lavender-400/60 via-olive-400/50 to-transparent sm:left-[15px]"
      />
      {children}
    </ol>
  )
}

export function TimelineItem({
  icon,
  tone = 'lavender',
  index,
  children,
}: {
  icon: ReactNode
  tone?: 'lavender' | 'olive'
  index: number
  children: ReactNode
}) {
  return (
    <Reveal as="li" delay={index * 90} className="relative">
      <span
        aria-hidden
        className={`glass-strong absolute top-6 -left-8 inline-flex size-6 items-center justify-center rounded-full sm:-left-12 sm:size-8 ${
          tone === 'olive' ? 'text-olive-700' : 'text-lavender-700'
        }`}
      >
        {icon}
      </span>
      <div className="glass glass-hover rounded-[28px] p-6 sm:p-8">{children}</div>
    </Reveal>
  )
}
