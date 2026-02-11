import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface DataVisualizationProps {
  data: any[];
  type?: "line" | "bar" | "area";
  dataKey: string;
  xAxisKey: string;
  color?: string;
}

export function DataVisualization({
  data,
  type = "line",
  dataKey,
  xAxisKey,
  color = "#3b82f6",
}: DataVisualizationProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: "#6b7280", fontSize: 12 }}
          stroke="#e5e7eb"
        />
        <YAxis
          tick={{ fill: "#6b7280", fontSize: 12 }}
          stroke="#e5e7eb"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
          dot={{ fill: color, strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
