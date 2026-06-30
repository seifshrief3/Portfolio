function SectionLabel({ index, label, accent = 'accent' }) {
  const dotColor = accent === 'teal' ? 'bg-teal' : 'bg-accent'
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
      <span className="font-mono text-xs tracking-widest text-muted uppercase">
        {index} <span className="text-text/30 mx-1">/</span> {label}
      </span>
    </div>
  )
}

export default SectionLabel
