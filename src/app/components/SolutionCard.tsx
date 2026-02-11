import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  gradient?: string;
}

export function SolutionCard({
  icon: Icon,
  title,
  description,
  features,
  gradient = "from-blue-500 to-indigo-600",
}: SolutionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
    >
      {/* Icon */}
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
