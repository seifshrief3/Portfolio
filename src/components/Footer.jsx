export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Seif Shreif — built with React & Tailwind
        </span>
        <span className="font-mono text-xs text-muted/70">
          status: <span className="text-teal">all systems operational</span>
        </span>
      </div>
    </footer>
  );
}
