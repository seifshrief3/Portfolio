import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div className="absolute top-20 right-[8%] h-72 w-72 rounded-full bg-accent/20 blur-[100px] animate-float" />
      <div className="absolute bottom-10 left-[5%] h-64 w-64 rounded-full bg-teal/10 blur-[100px] animate-float-delay" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full pl-2 pr-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
            </span>
            <span className="font-mono text-xs text-muted tracking-wide">
              status:{" "}
              <span className="text-text">available for new projects</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
          >
            <span className="text-muted">Hi, I'm </span>
            <span className="text-gradient">Seif Shreif</span>
            <br />
            Full Stack Developer
            <br />& AI Automation Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
          >
            Building scalable systems, AI agents, and automation workflows that
            solve real business problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 bg-white text-bg font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-white/90 transition-all focus-ring"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 glass text-text font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-white/[0.06] transition-all focus-ring"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
