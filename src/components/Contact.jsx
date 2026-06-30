import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Download,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import SectionLabel from "./SectionLabel";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "seifshreif195@gmail.com",
    href: "mailto:seifshreif195@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 114 290 0845",
    href: "tel:+201142900845",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/seifshrief3",
    href: "https://github.com/seifshrief3",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/seif-shreif",
    href: "https://linkedin.com/in/seif-shreif",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="04" label="contact" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-semibold text-3xl sm:text-4xl tracking-tight mb-5"
            >
              Have a system worth building?
            </motion.h2>
            <p className="text-muted leading-relaxed mb-10 max-w-sm">
              I'm currently available for new projects — full stack builds, AI
              automation, or both. Reach out and tell me what you're working on.
            </p>

            <div className="space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center justify-between glass rounded-xl px-5 py-4 hover:bg-white/[0.05] transition-colors focus-ring"
                >
                  <div className="flex items-center gap-3">
                    <c.icon size={16} className="text-accent-light" />
                    <div>
                      <div className="text-xs text-muted font-mono">
                        {c.label}
                      </div>
                      <div className="text-sm text-text">{c.value}</div>
                    </div>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-muted group-hover:text-text group-hover:translate-x-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-3xl p-8 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono">
                  Available For
                </span>

                <h3 className="font-display text-3xl mt-3 mb-5">
                  Full-Time Opportunities & Freelance Projects
                </h3>

                <p className="text-muted leading-relaxed">
                  I'm currently open to Full Stack Developer roles, AI
                  Automation projects, and freelance opportunities. If you're
                  building something interesting or looking for an engineer who
                  can deliver production-ready systems, let's connect.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-5">
                  <p className="text-xs text-muted mb-2 font-mono">
                    Specialization
                  </p>
                  <h4 className="font-medium">
                    Full Stack Development
                    <br />
                    AI Automation
                  </h4>
                </div>

                <div className="glass rounded-2xl p-5">
                  <p className="text-xs text-muted mb-2 font-mono">Location</p>
                  <h4 className="font-medium">
                    Egypt
                    <br />
                    Open to Remote
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
