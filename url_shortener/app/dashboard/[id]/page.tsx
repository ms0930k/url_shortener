import Navbar from "@/components/common/Navbar";
import ClickHistory from "@/components/dashboard/ClickHistory";

export default function AnalyticsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8">
          URL Analytics
        </h1>

        <div
          className="
          p-6
          rounded-xl
          border
          mb-8
          "
          style={{
            backgroundColor:
              "var(--surface-color)",
            borderColor:
              "var(--border-color)",
          }}
        >
          <p>
            <strong>Short URL:</strong>
            {" "}
            short.ly/abc123
          </p>

          <p>
            <strong>Original URL:</strong>
            {" "}
            https://google.com
          </p>

          <p>
            <strong>Total Clicks:</strong>
            {" "}
            32
          </p>
        </div>

        <ClickHistory />
      </main>
    </>
  );
}