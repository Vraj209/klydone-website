interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  badge?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = true,
  badge
}: SectionHeaderProps) {
  const alignmentClass = centered ? 'text-center mx-auto' : '';
  
  return (
    <div className={`mb-16 max-w-3xl ${alignmentClass}`}>
      {badge && (
        <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold border border-gray-700 bg-black text-white rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

