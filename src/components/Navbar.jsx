import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "automation", label: "AI & Automation" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-glow" : ""
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick("hero");
            }}
            className="font-display font-semibold text-sm tracking-tight flex items-center gap-2 focus-ring"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
            Seif<span className="text-accent-light">.</span>Shreif
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`relative px-4 py-2 text-sm rounded-lg transition-colors focus-ring ${
                  active === link.id
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/5 rounded-lg"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => handleClick("contact")}
              className="text-sm font-medium px-4 py-2 rounded-lg bg-white text-bg hover:bg-white/90 transition-colors focus-ring"
            >
              Let's talk
            </button>
          </div>

          <button
            className="md:hidden text-text focus-ring rounded-lg p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className="text-left px-3 py-2.5 rounded-lg text-sm text-muted hover:text-text hover:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("contact")}
              className="mt-1 text-sm font-medium px-3 py-2.5 rounded-lg bg-white text-bg text-center"
            >
              Let's talk
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
