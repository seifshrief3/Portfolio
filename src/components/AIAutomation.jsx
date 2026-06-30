import { motion } from 'framer-motion'
import { Workflow, Plug, Bot, GaugeCircle } from 'lucide-react'
import SectionLabel from './SectionLabel'

const features = [
  {
    icon: Workflow,
    title: 'Workflow automation',
    desc: 'Multi-step automation systems that move data between tools and trigger actions without manual input.',
  },
  {
    icon: Plug,
    title: 'API integrations',
    desc: 'Connecting disconnected platforms — CRMs, calendars, payment systems — into one working pipeline.',
  },
  {
    icon: Bot,
    title: 'AI agents',
    desc: 'Autonomous agents that handle defined tasks end-to-end: research, drafting, routing, and follow-up.',
  },
  {
    icon: GaugeCircle,
    title: 'Productivity pipelines',
    desc: 'Automation that removes repetitive operational work, so teams spend time on what actually needs a human.',
  },
]

export default function AIAutomation() {
  return (
    <section id="automation" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-teal/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="03" label="AI & automation engineering" accent="teal" />
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight max-w-lg">
              Where the work happens without anyone watching it.
            </h2>
          </div>
          <p className="text-sm text-muted max-w-xs leading-relaxed">
            I design and build the automation layer that sits behind a product —
            quiet, reliable, and running on its own.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 hover:shadow-glow-teal transition-shadow"
            >
              <div className="h-10 w-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-5">
                <f.icon size={18} className="text-teal" />
              </div>
              <h3 className="font-display font-medium text-base mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
