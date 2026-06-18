const clicks = [
  "2026-06-18 10:20",
  "2026-06-18 11:15",
  "2026-06-18 12:45",
];

export default function ClickHistory() {
  return (
    <div
      className="
      rounded-xl
      border
      overflow-hidden
      "
      style={{
        borderColor: "var(--border-color)",
      }}
    >
      <div
        className="p-4 font-bold"
        style={{
          backgroundColor:
            "var(--surface-color)",
        }}
      >
        Click History
      </div>

      {clicks.map((click, index) => (
        <div
          key={index}
          className="
          p-4
          border-t
          "
        >
          {click}
        </div>
      ))}
    </div>
  );
}