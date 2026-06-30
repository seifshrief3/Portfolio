import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const points = [
  {
    title: 'Full-stack development',
    desc: 'End-to-end web applications with React, Node.js, and PostgreSQL — built for production, not demos.',
  },
  {
    title: 'AI automation systems',
    desc: 'Designing AI agents and workflows that connect tools, eliminate manual work, and run unattended.',
  },
  {
    title: 'Real-world products',
    desc: 'CRM platforms and booking systems shipped to real users, with auth, dashboards, and data that matters.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionLabel index="01" label="about" />
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight"
            >
              I build the systems
              <br />
              behind the product.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-muted leading-relaxed max-w-md"
            >
              I'm a full stack developer and AI automation engineer focused on
              shipping production-grade software — from scalable web apps to
              the AI agents and pipelines that automate the work around them.
            </motion.p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors ${
                  i === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="font-mono text-xs text-accent-light">{`0${i + 1}`}</span>
                <h3 className="font-display font-medium text-lg mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
