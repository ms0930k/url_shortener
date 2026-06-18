import Navbar from "@/components/common/Navbar";
import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import LinksTable from "@/components/dashboard/LinksTable";

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <AnalyticsCard
            title="Total Links"
            value="15"
          />

          <AnalyticsCard
            title="Total Clicks"
            value="243"
          />
        </div>

        <LinksTable />
      </main>
    </>
  );
}