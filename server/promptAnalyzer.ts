interface AnalysisResult {
  overall: number;
  clarity: number;
  creativity: number;
  specificity: number;
  feedback: string;
}

export function analyzePrompt(prompt: string): AnalysisResult {
  const trimmedPrompt = prompt.trim();
  
  // Calculate individual scores
  const clarity = calculateClarity(trimmedPrompt);
  const creativity = calculateCreativity(trimmedPrompt);
  const specificity = calculateSpecificity(trimmedPrompt);
  
  // Overall score is weighted average
  const overall = Math.round((clarity * 0.4 + creativity * 0.3 + specificity * 0.3));
  
  // Generate feedback based on scores
  const feedback = generateFeedback(clarity, creativity, specificity, trimmedPrompt);
  
  return {
    overall,
    clarity,
    creativity,
    specificity,
    feedback,
  };
}

function calculateClarity(prompt: string): number {
  let score = 50; // Base score
  
  // Length check - optimal range is 20-200 characters
  const length = prompt.length;
  if (length < 10) {
    score -= 30;
  } else if (length >= 10 && length < 20) {
    score -= 10;
  } else if (length >= 20 && length <= 200) {
    score += 20;
  } else if (length > 200 && length <= 400) {
    score += 10;
  }
  
  // Complete sentences
  const hasPunctuation = /[.!?]/.test(prompt);
  if (hasPunctuation) score += 10;
  
  // Clear structure
  const sentences = prompt.split(/[.!?]+/).filter(s => s.trim().length > 0);
  if (sentences.length >= 2) score += 10;
  
  // Question words indicate clear intent
  const hasQuestionWords = /\b(what|how|why|when|where|who|which|can|should|would|could)\b/i.test(prompt);
  if (hasQuestionWords) score += 10;
  
  // Avoid vagueness
  const vagueWords = /\b(something|anything|someone|maybe|stuff|things|kinda|sorta)\b/i.test(prompt);
  if (vagueWords) score -= 15;
  
  return Math.max(0, Math.min(100, score));
}

function calculateCreativity(prompt: string): number {
  let score = 50; // Base score
  
  // Unique or creative words
  const creativeWords = /\b(imagine|creative|unique|innovative|unusual|extraordinary|magical|futuristic|whimsical|artistic)\b/i.test(prompt);
  if (creativeWords) score += 15;
  
  // Metaphors or comparisons
  const hasComparisons = /\b(like|as if|similar to|reminds|inspired by)\b/i.test(prompt);
  if (hasComparisons) score += 10;
  
  // Emotional or sensory language
  const sensoryWords = /\b(feel|see|hear|touch|taste|smell|vibrant|colorful|bright|dark|warm|cold)\b/i.test(prompt);
  if (sensoryWords) score += 10;
  
  // Compound sentences show more thought
  const hasCompoundStructure = /\b(and|but|however|although|while|whereas)\b/i.test(prompt);
  if (hasCompoundStructure) score += 10;
  
  // Generic or overused phrases reduce creativity
  const genericPhrases = /\b(write a|create a|make a|generate|tell me about)\b/i.test(prompt);
  if (genericPhrases) score -= 10;
  
  // Too short lacks creativity
  if (prompt.length < 20) score -= 20;
  
  return Math.max(0, Math.min(100, score));
}

function calculateSpecificity(prompt: string): number {
  let score = 50; // Base score
  
  // Numbers or quantities
  const hasNumbers = /\d+|one|two|three|four|five|ten|hundred|thousand/.test(prompt);
  if (hasNumbers) score += 15;
  
  // Specific nouns and proper nouns (capitalized words mid-sentence)
  const properNouns = (prompt.match(/\b[A-Z][a-z]+\b/g) || []).length;
  score += Math.min(properNouns * 5, 20);
  
  // Technical or domain-specific terms
  const technicalTerms = /\b(algorithm|design|implement|analyze|optimize|specific|detailed|particular|exactly)\b/i.test(prompt);
  if (technicalTerms) score += 10;
  
  // Context or constraints
  const hasConstraints = /\b(must|should|needs to|required|without|only|exactly|specifically)\b/i.test(prompt);
  if (hasConstraints) score += 15;
  
  // Examples or scenarios
  const hasExamples = /\b(example|such as|like|including|for instance|e\.g\.)\b/i.test(prompt);
  if (hasExamples) score += 10;
  
  // Too vague or general
  const tooGeneral = /\b(general|basic|simple|easy|quick|any|all)\b/i.test(prompt);
  if (tooGeneral) score -= 15;
  
  return Math.max(0, Math.min(100, score));
}

function generateFeedback(clarity: number, creativity: number, specificity: number, prompt: string): string {
  const weakest = Math.min(clarity, creativity, specificity);
  const strongest = Math.max(clarity, creativity, specificity);
  
  let feedback = "";
  
  // Identify strengths
  if (strongest === clarity && clarity >= 70) {
    feedback += "Your prompt is clear and well-structured. ";
  } else if (strongest === creativity && creativity >= 70) {
    feedback += "Great creativity! Your prompt shows imaginative thinking. ";
  } else if (strongest === specificity && specificity >= 70) {
    feedback += "Excellent specificity! You've provided clear details and constraints. ";
  }
  
  // Identify areas for improvement
  if (weakest === clarity && clarity < 60) {
    feedback += "Consider making your prompt clearer by using complete sentences and avoiding vague language. ";
  } else if (weakest === creativity && creativity < 60) {
    feedback += "Try adding more creative elements, unique perspectives, or imaginative scenarios to enhance your prompt. ";
  } else if (weakest === specificity && specificity < 60) {
    feedback += "Add more specific details, examples, or constraints to make your prompt more focused and actionable. ";
  }
  
  // Length-based suggestions
  if (prompt.length < 20) {
    feedback += "Your prompt is quite short - expanding it with more context could improve results. ";
  } else if (prompt.length > 300) {
    feedback += "Consider making your prompt more concise while maintaining key details. ";
  }
  
  // General tips
  if (clarity >= 70 && creativity >= 70 && specificity >= 70) {
    feedback = "Outstanding prompt! Well-balanced across all dimensions with clear intent, creative elements, and specific details.";
  } else if (clarity < 50 || creativity < 50 || specificity < 50) {
    feedback += "Focus on defining your objectives clearly and providing concrete examples.";
  }
  
  return feedback.trim() || "Your prompt shows potential. Try adding more detail and context for better results.";
}
