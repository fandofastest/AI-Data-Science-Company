import { DataPanel } from "./DataPanel";
import { DataVisualization } from "./DataVisualization";
import { BarChartComponent } from "./BarChartComponent";

const sampleData = [
  { month: "Jan", revenue: 45000, predictions: 48000 },
  { month: "Feb", revenue: 52000, predictions: 54000 },
  { month: "Mar", revenue: 48000, predictions: 51000 },
  { month: "Apr", revenue: 61000, predictions: 58000 },
  { month: "May", revenue: 55000, predictions: 62000 },
  { month: "Jun", revenue: 67000, predictions: 65000 },
];

const performanceData = [
  { metric: "Accuracy", value: 98.5 },
  { metric: "Precision", value: 97.2 },
  { metric: "Recall", value: 96.8 },
  { metric: "F1-Score", value: 97.0 },
];

export function DemoCharts() {
  return (
    <div className="space-y-6">
      <DataPanel
        title="Revenue Analytics"
        subtitle="AI-powered revenue forecasting vs actual"
      >
        <div className="h-80">
          <DataVisualization
            data={sampleData}
            dataKey="revenue"
            xAxisKey="month"
            color="#3b82f6"
          />
        </div>
      </DataPanel>

      <DataPanel
        title="Model Performance Metrics"
        subtitle="Real-time AI model accuracy"
      >
        <div className="h-80">
          <BarChartComponent
            data={performanceData}
            dataKey="value"
            xAxisKey="metric"
            color="#6366f1"
            height={320}
          />
        </div>
      </DataPanel>
    </div>
  );
}
