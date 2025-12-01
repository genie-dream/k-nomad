"use client";

import { Badge } from "./ui/badge";
import { useState } from "react";

export default function FilterBar() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const weatherFilters = [
    { id: "warm", label: "🔥 따뜻한", emoji: "🔥" },
    { id: "pleasant", label: "🌤️ 쾌적한", emoji: "🌤️" },
    { id: "cool", label: "❄️ 시원한", emoji: "❄️" },
    { id: "fourseasons", label: "🌈 사계절", emoji: "🌈" },
  ];

  const featureFilters = [
    { id: "cafes", label: "카페 많음" },
    { id: "quiet", label: "조용함" },
    { id: "nature", label: "자연 친화" },
    { id: "urban", label: "도심" },
    { id: "beach", label: "해변" },
    { id: "mountain", label: "산" },
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
    console.log("Filter toggled:", filterId);
  };

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {/* 날씨 필터 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              🌡️ 날씨
            </h3>
            <div className="flex flex-wrap gap-2">
              {weatherFilters.map((filter) => (
                <Badge
                  key={filter.id}
                  variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-primary-orange/10"
                  onClick={() => toggleFilter(filter.id)}
                >
                  {filter.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* 특징 필터 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              ☕ 특징
            </h3>
            <div className="flex flex-wrap gap-2">
              {featureFilters.map((filter) => (
                <Badge
                  key={filter.id}
                  variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-primary-orange/10"
                  onClick={() => toggleFilter(filter.id)}
                >
                  {filter.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* 선택된 필터 수 */}
          {selectedFilters.length > 0 && (
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-gray-600">
                {selectedFilters.length}개 필터 적용 중
              </span>
              <button
                onClick={() => setSelectedFilters([])}
                className="text-sm text-primary-orange hover:underline"
              >
                모두 지우기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
