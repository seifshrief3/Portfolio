import { motion } from "framer-motion";

const stack = [
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Supabase",
  "Shopify",
  "n8n",
  "AI Agents",
  "Automation",
];

export default function TechStack() {
  return (
    <section className="relative border-y border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-muted whitespace-nowrap hidden sm:block">
            stack —
          </span>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="font-mono text-xs text-muted/90 px-3 py-1.5 rounded-lg border border-border bg-surface/60 hover:border-accent/40 hover:text-text transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
