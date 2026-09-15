interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-navy-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full" />
    </div>
  );
}
