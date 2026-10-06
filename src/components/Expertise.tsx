import { ChartColumn, CircuitBoard, Cpu, Smartphone } from 'lucide-react'
import { expertise } from '@/data/profile'
import { Reveal } from './ui'

const icons = { cpu: Cpu, chart: ChartColumn, phone: Smartphone, chip: CircuitBoard }
const tints = [
  'from-lavender-100 to-white text-lavender-700',
  'from-olive-100 to-white text-olive-700',
  'from-lavender-100 to-olive-50 text-lavender-700',
  'from-olive-100 to-lavender-50 text-olive-700',
]

export function Expertise() {
  return (
    <section aria-label="Areas of expertise" className="px-5 pb-8 sm:px-8">
      <ul className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((item, i) => {
          const Icon = icons[item.icon]
          return (
            <Reveal as="li" key={item.title} delay={i * 80} className="glass glass-hover rounded-[28px] p-6">
              <span
                className={`inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tints[i]} shadow-[inset_0_1px_0_white]`}
              >
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
