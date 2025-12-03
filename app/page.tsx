"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import CityCard from "@/components/CityCard";
import Sidebar from "@/components/Sidebar";
import { cities } from "@/data/cities";
import type { FilterState } from "@/components/FilterBar";

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    budget: "전체",
    region: "전체",
    environment: [],
    bestSeason: [],
  });

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  // 필터링 로직
  const filteredCities = cities.filter((city) => {
    // 예산 필터
    if (filters.budget !== "전체" && city.budget !== filters.budget) {
      return false;
    }

    // 지역 필터
    if (filters.region !== "전체" && city.region !== filters.region) {
      return false;
    }

    // 환경 필터 (다중 선택: 선택된 환경 중 하나라도 포함되어야 함)
    if (
      filters.environment.length > 0 &&
      !filters.environment.some((env) => city.environment.includes(env))
    ) {
      return false;
    }

    // 최고 계절 필터 (다중 선택: 선택된 계절 중 하나라도 포함되어야 함)
    if (
      filters.bestSeason.length > 0 &&
      !filters.bestSeason.some((season) => city.bestSeason.includes(season))
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Filter Bar */}
        <FilterBar onFilterChange={handleFilterChange} />

        {/* Main Content Area */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* 도시 카드 그리드 (70%) */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">
                    전체 도시 <span className="text-primary-orange">{filteredCities.length}</span>개
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCities.map((city) => (
                    <CityCard key={city.id} city={city} />
                  ))}
                </div>
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
      </main>

      <Footer />
    </div>
  );
}
