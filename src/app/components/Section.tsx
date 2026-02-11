import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient";
}

export function Section({ children, className = "", background = "white" }: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gradient-to-b from-gray-50 to-white",
    gradient: "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
  };

  return (
    <section className={`py-20 sm:py-24 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
