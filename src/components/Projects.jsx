import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    name: "Clinic Booking System",
    tag: "PERN · Production",
    desc: "A full-stack appointment platform for clinics — patient-facing booking flow, secure authentication, and an admin dashboard for managing schedules in real time.",
    features: [
      "Authentication with Clerk",
      "Real-time appointment scheduling",
      "Admin dashboard & analytics",
      "PostgreSQL relational schema",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Clerk",
      "Vercel",
      "Railway",
    ],
    accent: "accent",
    link: "https://clinic-booking-tan.vercel.app/",
    github: "https://github.com/seifshrief3/Clinic-booking",
  },
  {
    name: "CRM System",
    tag: "Full Stack · SaaS",
    desc: "A lead management platform built for sales teams — track leads through the pipeline, manage records, and read performance at a glance from a live analytics dashboard.",
    features: [
      "Lead management & pipeline tracking",
      "Full CRUD record management",
      "Dashboard analytics UI",
      "Fully responsive interface",
    ],
    stack: ["React", "Supabase", "Tailwind CSS"],
    accent: "teal",
    link: "https://crm-vert-nu-23.vercel.app/",
    github: "https://github.com/seifshrief3/CRM",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="02" label="selected work" />
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-3xl sm:text-4xl tracking-tight mb-14 max-w-xl"
        >
          Systems shipped to real users, not tutorial clones.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-border bg-surface/60 p-8 overflow-hidden transition-colors hover:border-white/20"
            >
              <div
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  project.accent === "teal" ? "bg-teal/25" : "bg-accent/25"
                }`}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-muted tracking-wide">
                    {project.tag}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <h3 className="font-display font-semibold text-2xl mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {project.desc}
                </p>

                <ul className="space-y-2 mb-7">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-text/80"
                    >
                      <span
                        className={`mt-1.5 h-1 w-1 rounded-full shrink-0 ${
                          project.accent === "teal" ? "bg-teal" : "bg-accent"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-border text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex-1 text-center text-sm font-medium px-4 py-2.5 rounded-xl bg-white text-bg hover:bg-white/90 transition-colors focus-ring"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border border-border hover:bg-white/[0.05] transition-colors focus-ring"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
