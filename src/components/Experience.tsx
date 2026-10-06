import { Briefcase, Sparkles } from 'lucide-react'
import { experience } from '@/data/profile'
import { Timeline, TimelineItem } from './Timeline'
import { CopyText, Pill, Section, ToBeAdded } from './ui'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Work Experience"
      title="Where I've applied it"
      intro="Roles across project management, data and network operations — newest first."
    >
      <Timeline>
        {experience.map((job, i) => (
          <TimelineItem
            key={job.role}
            index={i}
            tone={i % 2 ? 'olive' : 'lavender'}
            icon={<Briefcase className="size-3.5 sm:size-4" />}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">{job.role}</h3>
                <p className="mt-1 font-medium text-lavender-700">{job.organisation}</p>
              </div>
              {job.dates ? (
                <Pill tone={i === 0 ? 'olive' : 'neutral'} className="text-xs font-semibold">
                  {job.dates}
                </Pill>
              ) : (
                <ToBeAdded label="Dates to be added" />
              )}
            </div>

            {job.context && <p className="mt-4 text-sm text-ink-muted">{job.context}</p>}

            <div className="mt-5">
              <h4 className="text-xs font-semibold tracking-[0.15em] text-ink-muted uppercase">Experience</h4>
              {job.points.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-ink-soft">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-lavender-400" />
                      <CopyText value={p} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3">
                  <ToBeAdded label="Responsibilities to be added" />
                </p>
              )}
            </div>

            {job.highlight && (
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender-100 to-olive-100 px-4 py-2 text-sm font-semibold text-ink">
                <Sparkles className="size-4 text-lavender-600" aria-hidden />
                {job.highlight}
              </p>
            )}

            {job.skills && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills used">
                {job.skills.map((s) => (
                  <li key={s}>
                    <Pill tone="olive">{s}</Pill>
                  </li>
                ))}
              </ul>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  )
}
