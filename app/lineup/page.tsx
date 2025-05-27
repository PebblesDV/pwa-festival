import Header from "@/components/header";
import Footer from "@/components/footer";
import LineupSchedule from "@/components/LineupSchedule";

export default function LineupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">Festival Lineup</h2>
          <div className="bg-white rounded-lg shadow-lg">
            <LineupSchedule />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
