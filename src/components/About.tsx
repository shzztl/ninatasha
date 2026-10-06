import { about, profile } from '@/data/profile'
import { CopyText, Pill, Reveal } from './ui'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 py-16 sm:px-8 md:py-24">
      <Reveal className="glass mx-auto grid max-w-6xl gap-10 rounded-[32px] p-7 sm:p-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:p-14">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-lavender-600 uppercase">About</p>
          <h2 id="about-title" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            About Me
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Positioning">
            {profile.positioning.map((p, i) => (
              <li key={p}>
                <Pill tone={i % 2 ? 'olive' : 'lavender'}>{p}</Pill>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="space-y-4 text-base leading-relaxed text-ink-soft">
            {about.paragraphs.map((p, i) => (
              <p key={i}>
                <CopyText value={p} />
              </p>
            ))}
          </div>
          <h3 className="mt-8 text-sm font-semibold text-ink">What drives my work</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {about.values.map((v) => (
              <li key={v}>
                <Pill>{v}</Pill>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
