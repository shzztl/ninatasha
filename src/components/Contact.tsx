import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { contact, links, profile } from '@/data/profile'
import { PillButton, Reveal } from './ui'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-5 py-16 sm:px-8 md:py-24">
      <Reveal className="glass relative mx-auto max-w-5xl overflow-hidden rounded-[36px] px-6 py-14 text-center sm:px-12 md:py-20">
        <span aria-hidden className="absolute -top-24 -left-20 size-72 rounded-full bg-lavender-200/70 blur-3xl" />
        <span aria-hidden className="absolute -right-20 -bottom-24 size-72 rounded-full bg-olive-200/70 blur-3xl" />
        <div className="relative">
          <h2 id="contact-title" className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{contact.body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <PillButton
              href={links.email ? `mailto:${links.email}` : null}
              variant="primary"
              icon={<Mail className="size-4" />}
            >
              Email
            </PillButton>
            <PillButton href={links.linkedin} external icon={<Linkedin className="size-4" />}>
              LinkedIn
            </PillButton>
            <PillButton href={links.github} external icon={<Github className="size-4" />}>
              GitHub
            </PillButton>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-ink-muted">
            <MapPin className="size-4" aria-hidden />
            {profile.location}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
