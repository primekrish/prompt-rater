import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { analyzePrompt } from "./promptAnalyzer";
import { z } from "zod";

const rateRequestSchema = z.object({
  prompt: z.string().min(1, "Prompt cannot be empty"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // POST /api/rate - Analyze a prompt and return ratings
  app.post("/api/rate", async (req, res) => {
    try {
      const { prompt } = rateRequestSchema.parse(req.body);
      const result = analyzePrompt(prompt);
      res.json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors[0].message });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
