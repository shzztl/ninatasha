import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { links, profile } from '@/data/profile'
import { CopyText, PillButton, Reveal } from './ui'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="px-5 pt-32 pb-16 sm:px-8 md:pt-40 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <Reveal className="order-2 text-center lg:order-1 lg:text-left">
          <p className="text-sm font-semibold tracking-[0.25em] text-lavender-600 uppercase">Hello, I'm</p>
          <h1
            id="hero-title"
            className="mt-4 text-[2.6rem] leading-[1.05] font-bold tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-ink-soft sm:text-2xl">{profile.title}</p>
          <p className="mt-2 text-base font-medium text-olive-700 sm:text-lg">
            {profile.focus.join(' • ')}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft lg:mx-0">
            <CopyText value={profile.bio} />
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <PillButton href="#experience" variant="primary" icon={<ArrowRight className="size-4" />}>
              View My Experience
            </PillButton>
            <PillButton href="#projects">Explore My Projects</PillButton>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
            <PillButton href={links.linkedin} external icon={<Linkedin className="size-4" />} className="px-4 py-2.5">
              LinkedIn
            </PillButton>
            <PillButton href={links.github} external icon={<Github className="size-4" />} className="px-4 py-2.5">
              GitHub
            </PillButton>
            <PillButton
              href={links.email ? `mailto:${links.email}` : null}
              icon={<Mail className="size-4" />}
              className="px-4 py-2.5"
            >
              Email
            </PillButton>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={120}>
          <Portrait />
        </Reveal>
      </div>
    </section>
  )
}

function Portrait() {
  const [a, b, c] = profile.floatingPills
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem]">
      {/* soft halo */}
      <div
        aria-hidden
        className="absolute inset-6 rounded-full bg-gradient-to-br from-lavender-200 via-white to-olive-200 opacity-80 blur-2xl"
      />
      <div className="glass absolute inset-8 overflow-hidden rounded-full p-3">
        {profile.photo ? (
          <img
            src={`/.netlify/images?url=${profile.photo}&w=640&fm=webp`}
            alt={`Portrait of ${profile.name}`}
            className="size-full rounded-full object-cover"
            width={640}
            height={640}
          />
        ) : (
          <div
            role="img"
            aria-label="Abstract glass placeholder for profile photo"
            className="relative size-full overflow-hidden rounded-full bg-gradient-to-br from-lavender-100 via-white to-olive-100"
          >
            <span aria-hidden className="absolute -top-6 -left-4 size-40 rounded-full bg-lavender-200/80 blur-xl" />
            <span aria-hidden className="absolute -right-6 -bottom-8 size-44 rounded-full bg-olive-200/80 blur-xl" />
            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/35 shadow-[inset_0_1px_0_white] backdrop-blur-md"
            />
            <span
              aria-hidden
              className="absolute top-[28%] left-[30%] size-[30%] rounded-full border border-white/70 bg-white/30 backdrop-blur-sm"
            />
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center text-4xl font-semibold tracking-[0.2em] text-ink/70 sm:text-5xl"
            >
              {profile.initials}
            </span>
          </div>
        )}
      </div>

      <FloatingPill className="top-4 -left-2 sm:-left-8" delay="0s" {...a} />
      <FloatingPill className="top-[46%] -right-3 sm:-right-10" delay="1.5s" {...b} />
      <FloatingPill className="bottom-3 left-2 sm:left-0" delay="3s" {...c} />
    </div>
  )
}

function FloatingPill({
  label,
  value,
  className,
  delay,
}: {
  label: string
  value: string
  className: string
  delay: string
}) {
  return (
    <div
      className={`glass-strong drift absolute rounded-full px-4 py-2 text-xs whitespace-nowrap sm:text-sm ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="text-ink-muted">{label} · </span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  )
}
