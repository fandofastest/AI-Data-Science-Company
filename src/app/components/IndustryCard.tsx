import { ReactNode } from "react";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  stats?: {
    label: string;
    value: string;
  }[];
}

export function IndustryCard({ title, description, icon, stats }: IndustryCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
      {/* Icon */}
      <div className="mb-4">{icon}</div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-lg font-bold text-blue-600 font-mono">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
