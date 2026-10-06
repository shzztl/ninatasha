import { GraduationCap } from 'lucide-react'
import { education } from '@/data/profile'
import { Timeline, TimelineItem } from './Timeline'
import { Pill, Section, ToBeAdded } from './ui'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <div className="max-w-3xl">
        <Timeline>
          {education.map((item, i) => (
            <TimelineItem key={item.school} index={i} icon={<GraduationCap className="size-3.5 sm:size-4" />}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{item.school}</h3>
                  <p className="mt-1 font-medium text-lavender-700">{item.qualification}</p>
                </div>
                {item.dates ? (
                  <Pill className="text-xs">{item.dates}</Pill>
                ) : (
                  <ToBeAdded label="Dates to be added" />
                )}
              </div>
              {item.highlights.length > 0 && (
                <>
                  <h4 className="mt-6 text-xs font-semibold tracking-[0.15em] text-ink-muted uppercase">
                    Highlights
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <li key={h}>
                        <Pill tone="lavender">{h}</Pill>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Section>
  )
}
