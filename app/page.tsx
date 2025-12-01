import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import CityCard from "@/components/CityCard";
import Sidebar from "@/components/Sidebar";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SortSelect from "@/components/SortSelect";
import Pagination from "@/components/Pagination";
import { cities } from "@/data/cities";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Filter Bar */}
        <FilterBar />

        {/* Main Content Area */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* 도시 카드 그리드 (70%) */}
              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    전체 도시 <span className="text-primary-orange">{cities.length}</span>개
                  </h2>
                  <SortSelect />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <CityCard key={city.id} city={city} />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination />
              </div>

              {/* Sidebar (30%) */}
              <aside className="lg:w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <Sidebar />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <ValuePropositionSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
