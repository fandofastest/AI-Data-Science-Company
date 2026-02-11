import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: number;
  trendLabel?: string;
  iconColor?: string;
}

export function KPICard({
  icon: Icon,
  label,
  value,
  trend,
  trendLabel,
  iconColor = "text-blue-600",
}: KPICardProps) {
  const isPositive = trend && trend > 0;
  const isNegative = trend && trend < 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2.5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        {trend !== undefined && (
          <div
            className={`flex items-center space-x-1 text-xs font-medium ${
              isPositive
                ? "text-green-600"
                : isNegative
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {isPositive && <TrendingUp className="w-3.5 h-3.5" />}
            {isNegative && <TrendingDown className="w-3.5 h-3.5" />}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-gray-900 font-mono">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
        {trendLabel && <p className="text-xs text-gray-500">{trendLabel}</p>}
      </div>
    </div>
  );
}
