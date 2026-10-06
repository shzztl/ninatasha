import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="px-5 pt-4 pb-10 sm:px-8">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 rounded-full px-8 py-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-ink">{profile.name}</p>
          <p className="text-sm text-ink-muted">Computer Science • Data • IoT • Android</p>
        </div>
        <p className="text-sm text-ink-muted">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
