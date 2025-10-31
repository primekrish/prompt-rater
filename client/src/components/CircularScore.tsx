import { motion } from "framer-motion";

interface CircularScoreProps {
  score: number;
}

export default function CircularScore({ score }: CircularScoreProps) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (score: number) => {
    if (score >= 70) return "hsl(162, 63%, 36%)";
    if (score >= 40) return "hsl(36, 100%, 50%)";
    return "hsl(0, 84%, 60%)";
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        className="relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <svg width="150" height="150" className="-rotate-90">
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth="12"
            fill="none"
          />
          <motion.circle
            cx="75"
            cy="75"
            r={radius}
            stroke={getColor(score)}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            data-testid="text-overall-score"
          >
            {score}
          </motion.span>
        </div>
      </motion.div>
      <span className="text-sm text-muted-foreground font-medium">
        Overall Score
      </span>
    </div>
  );
}
