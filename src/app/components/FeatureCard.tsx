import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
      <div className="relative bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
