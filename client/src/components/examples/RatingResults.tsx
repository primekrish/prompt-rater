import RatingResults from "../RatingResults";

export default function RatingResultsExample() {
  const mockRating = {
    overall: 78,
    clarity: 85,
    creativity: 65,
    specificity: 80,
    feedback:
      "Your prompt is clear and well-structured with good specificity. Consider adding more creative elements or unique perspectives to make it stand out. Try incorporating specific examples or scenarios.",
  };

  return (
    <div className="w-full max-w-md p-4">
      <RatingResults rating={mockRating} />
    </div>
  );
}
