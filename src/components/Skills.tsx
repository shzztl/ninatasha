import { skills } from '@/data/profile'
import { Pill, Reveal, Section } from './ui'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Toolkit">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 80} className="glass rounded-[28px] p-6">
            <h3 className="text-sm font-semibold tracking-[0.12em] text-ink uppercase">{group.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li key={s}>
                  <Pill tone={i % 2 ? 'olive' : 'lavender'} className="px-3 py-1 text-xs">
                    {s}
                  </Pill>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
