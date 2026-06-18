interface AnalyticsCardProps {
  title: string;
  value: string;
}

export default function AnalyticsCard({
  title,
  value,
}: AnalyticsCardProps) {
  return (
    <div
      className="
      p-6
      rounded-xl
      border
      "
      style={{
        backgroundColor: "var(--surface-color)",
        borderColor: "var(--border-color)",
      }}
    >
      <p className="text-sm opacity-70">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}