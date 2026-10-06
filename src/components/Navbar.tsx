import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '@/data/profile'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  // Track which section is in view for the active indicator
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary"
        className="glass-strong mx-auto flex max-w-4xl items-center justify-between gap-2 rounded-full py-2 pr-2 pl-5"
      >
        <a
          href="#home"
          className="text-base font-bold tracking-wide text-ink"
          aria-label={`${profile.name} — back to top`}
        >
          {profile.initials}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                  active === item.id
                    ? 'bg-white text-ink shadow-[0_4px_14px_-6px_rgb(60_50_110/0.3)]'
                    : 'text-ink-muted hover:bg-white/60 hover:text-ink',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full bg-white/70 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="glass-strong mx-auto mt-3 max-w-4xl rounded-[28px] p-2 md:hidden"
      >
        <ul className="grid gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'block rounded-full px-5 py-3 text-base font-medium',
                  active === item.id ? 'bg-white text-ink' : 'text-ink-soft hover:bg-white/60',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
