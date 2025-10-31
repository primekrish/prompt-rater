import { useState } from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/components/LoadingSpinner";
import RatingResults, { type RatingData } from "@/components/RatingResults";
import { apiRequest } from "@/lib/queryClient";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState<RatingData | null>(null);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setRating(null);

    try {
      const response = await apiRequest("POST", "/api/rate", { prompt });
      const data = await response.json();
      setRating(data);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to analyze prompt",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Analyze Your Prompt</h2>
            <p className="text-sm text-muted-foreground">
              Enter any text prompt to receive instant feedback and ratings
            </p>
          </div>

          <div className="space-y-4">
            <Textarea
              placeholder="Type your prompt here…"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-32 resize-none"
              disabled={isLoading}
              data-testid="input-prompt"
            />

            <Button
              onClick={handleSubmit}
              disabled={!prompt.trim() || isLoading}
              className="w-full"
              data-testid="button-submit"
            >
              Rate My Prompt
            </Button>
          </div>

          {isLoading && <LoadingSpinner />}

          {rating && !isLoading && <RatingResults rating={rating} />}
        </div>
      </motion.div>
    </div>
  );
}
