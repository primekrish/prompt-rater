import { motion } from "framer-motion";
import CircularScore from "./CircularScore";
import MetricBar from "./MetricBar";

export interface RatingData {
  overall: number;
  clarity: number;
  creativity: number;
  specificity: number;
  feedback: string;
}

interface RatingResultsProps {
  rating: RatingData;
}

export default function RatingResults({ rating }: RatingResultsProps) {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center">
        <CircularScore score={rating.overall} />
      </div>

      <div className="space-y-4">
        <MetricBar label="Clarity" value={rating.clarity} delay={0.1} />
        <MetricBar label="Creativity" value={rating.creativity} delay={0.2} />
        <MetricBar label="Specificity" value={rating.specificity} delay={0.3} />
      </div>

      <motion.div
        className="p-4 bg-muted/50 rounded-lg border border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-sm font-semibold mb-2">AI Feedback</h3>
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feedback">
          {rating.feedback}
        </p>
      </motion.div>
    </motion.div>
  );
}
