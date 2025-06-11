import Header from "@/components/header";
import Footer from "@/components/footer";
import LineupSchedule from "@/components/LineupSchedule";

export default function LineupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex flex-col justify-center gap-6">
        <div>
          <div className="bg-white rounded-lg shadow-lg">
            <LineupSchedule />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
