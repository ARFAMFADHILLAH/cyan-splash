interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md border border-cyan-100/50 p-6
        ${hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : ""}
        ${className}`}
    >
      {children}
    </div>
  );
}
