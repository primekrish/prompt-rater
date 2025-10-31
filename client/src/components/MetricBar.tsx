import { motion } from "framer-motion";

interface MetricBarProps {
  label: string;
  value: number;
  delay?: number;
}

export default function MetricBar({ label, value, delay = 0 }: MetricBarProps) {
  const getColor = (value: number) => {
    if (value >= 70) return "bg-primary";
    if (value >= 40) return "bg-chart-5";
    return "bg-destructive";
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" data-testid={`text-${label.toLowerCase()}-label`}>
          {label}
        </span>
        <span className="text-sm font-semibold" data-testid={`text-${label.toLowerCase()}-score`}>
          {value}
        </span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${getColor(value)}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
