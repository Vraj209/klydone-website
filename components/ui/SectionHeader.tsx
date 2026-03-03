interface SectionHeaderProps {
  title:      string;
  subtitle?:  string;
  centered?:  boolean;
  badge?:     string;
  light?:     boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  badge,
  light    = false,
}: SectionHeaderProps) {
  const align = centered ? 'text-center mx-auto' : '';

  return (
    <div className={`mb-14 max-w-3xl ${align}`}>
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700">
          {badge}
        </span>
      )}
      <h2
        className={`font-display mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-white/80' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
