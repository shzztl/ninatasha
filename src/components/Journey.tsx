import { journey } from '@/data/profile'
import { Reveal, Section } from './ui'

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="My Journey"
      title="From fundamentals to applied technology"
      className="py-12 md:py-16"
    >
      <Reveal>
        <ol className="glass relative grid gap-3 rounded-[32px] p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-6 lg:gap-0 lg:p-4">
          {/* connecting line on desktop */}
          <span
            aria-hidden
            className="absolute top-1/2 right-16 left-16 hidden h-px bg-gradient-to-r from-lavender-200 via-olive-200 to-lavender-200 lg:block"
          />
          {journey.map((step, i) => (
            <li key={step} className="relative flex items-center lg:justify-center lg:px-1.5">
              <div className="flex w-full items-center gap-3 rounded-full bg-white/75 py-2 pr-4 pl-2 shadow-[0_6px_18px_-10px_rgb(60_50_110/0.35)] lg:flex-col lg:gap-2 lg:rounded-[24px] lg:px-3 lg:py-4 lg:text-center">
                <span
                  className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    i % 2 ? 'bg-olive-100 text-olive-700' : 'bg-lavender-100 text-lavender-700'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-snug font-medium text-ink">{step}</span>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}
