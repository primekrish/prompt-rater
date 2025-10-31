import MetricBar from "../MetricBar";

export default function MetricBarExample() {
  return (
    <div className="w-full max-w-md space-y-4 p-4">
      <MetricBar label="Clarity" value={85} />
      <MetricBar label="Creativity" value={60} />
      <MetricBar label="Specificity" value={45} />
    </div>
  );
}
