import { Check, Github } from 'lucide-react'
import { projects, type Project } from '@/data/profile'
import { cn } from '@/lib/utils'
import { Pill, PillButton, Reveal, Section } from './ui'

const toneStyles: Record<Project['tone'], string> = {
  lavender: 'from-lavender-200/90 via-lavender-50 to-white',
  olive: 'from-olive-200/90 via-olive-50 to-white',
  sky: 'from-[#cfe3ef] via-[#eef5f9] to-white',
  rose: 'from-[#efd6e1] via-[#f9eff3] to-white',
}

export function Projects() {
  const [featured, ...rest] = projects
  return (
    <Section
      id="projects"
      eyebrow="Selected Projects"
      title="Things I've built"
      intro="Android, IoT and data work — from embedded prototypes to research dashboards."
    >
      <div className="grid gap-6">
        <ProjectCard project={featured} featured />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={(i + 1) * 80} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function ProjectCard({ project, featured, delay = 0 }: { project: Project; featured?: boolean; delay?: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={cn(
        'glass glass-hover flex flex-col overflow-hidden rounded-[32px]',
        featured && 'lg:grid lg:grid-cols-[0.8fr_1.2fr]',
      )}
    >
      <div
        className={cn(
          'relative m-2 overflow-hidden rounded-[26px] bg-gradient-to-br p-6',
          toneStyles[project.tone],
          featured ? 'min-h-48 lg:min-h-full lg:p-10' : 'min-h-32',
        )}
      >
        <span aria-hidden className="absolute -right-10 -bottom-10 size-40 rounded-full border border-white/80 bg-white/30" />
        <span aria-hidden className="absolute right-10 bottom-14 size-16 rounded-full border border-white/80 bg-white/40" />
        <Pill className="relative bg-white/80 text-xs font-semibold text-ink">{project.category}</Pill>
        {featured && (
          <p className="relative mt-6 max-w-xs text-sm font-medium text-ink-soft">Featured project</p>
        )}
      </div>

      <div className={cn('flex flex-1 flex-col p-6 pt-4', featured && 'lg:p-10')}>
        <h3 className={cn('font-semibold text-ink', featured ? 'text-2xl sm:text-3xl' : 'text-xl')}>
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{project.summary}</p>

        {project.features && (
          <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-ink-soft">
                <Check className="size-4 shrink-0 text-olive-600" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t}>
              <Pill tone="lavender" className="px-3 py-1 text-xs">
                {t}
              </Pill>
            </li>
          ))}
        </ul>

        {project.showRepo && (
          <div className="mt-auto pt-8">
            <PillButton href={project.repo} external icon={<Github className="size-4" />}>
              View on GitHub
            </PillButton>
          </div>
        )}
      </div>
    </Reveal>
  )
}
