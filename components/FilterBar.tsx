"use client";

import { Badge } from "./ui/badge";
import { useState } from "react";
import type { Budget, Region, Environment, Season } from "@/data/cities";

// Phase 2: 새로운 필터 상태 타입 정의
export interface FilterState {
  budget: Budget | "전체";
  region: Region | "전체";
  environment: Environment[];
  bestSeason: Season[];
}

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    budget: "전체",
    region: "전체",
    environment: [],
    bestSeason: [],
  });

  // 예산 필터 옵션 (단일 선택)
  const budgetOptions: (Budget | "전체")[] = [
    "전체",
    "100만원 이하",
    "100~200만원",
    "200만원 이상",
  ];

  // 지역 필터 옵션 (단일 선택)
  const regionOptions: (Region | "전체")[] = [
    "전체",
    "수도권",
    "경상도",
    "전라도",
    "강원도",
    "제주도",
    "충청도",
  ];

  // 환경 필터 옵션 (다중 선택)
  const environmentOptions: Environment[] = [
    "자연친화",
    "도심선호",
    "카페작업",
    "코워킹 필수",
  ];

  // 계절 필터 옵션 (다중 선택)
  const seasonOptions: Season[] = ["봄", "여름", "가을", "겨울"];

  // 예산 필터 변경 (단일 선택)
  const handleBudgetChange = (budget: Budget | "전체") => {
    const newFilters = { ...filters, budget };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 지역 필터 변경 (단일 선택)
  const handleRegionChange = (region: Region | "전체") => {
    const newFilters = { ...filters, region };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 환경 필터 토글 (다중 선택)
  const handleEnvironmentToggle = (env: Environment) => {
    const newEnvironment = filters.environment.includes(env)
      ? filters.environment.filter((e) => e !== env)
      : [...filters.environment, env];
    const newFilters = { ...filters, environment: newEnvironment };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 계절 필터 토글 (다중 선택)
  const handleSeasonToggle = (season: Season) => {
    const newBestSeason = filters.bestSeason.includes(season)
      ? filters.bestSeason.filter((s) => s !== season)
      : [...filters.bestSeason, season];
    const newFilters = { ...filters, bestSeason: newBestSeason };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 모든 필터 초기화
  const handleClearAll = () => {
    const newFilters: FilterState = {
      budget: "전체",
      region: "전체",
      environment: [],
      bestSeason: [],
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 선택된 필터 개수 계산
  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.budget !== "전체") count++;
    if (filters.region !== "전체") count++;
    count += filters.environment.length;
    count += filters.bestSeason.length;
    return count;
  };

  const activeFilterCount = getActiveFilterCount();

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {/* 예산 필터 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              💰 예산
            </h3>
            <div className="flex flex-wrap gap-2">
              {budgetOptions.map((option) => (
                <Badge
                  key={option}
                  variant={filters.budget === option ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-primary-orange/10"
                  onClick={() => handleBudgetChange(option)}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>

          {/* 지역 필터 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              📍 지역
            </h3>
            <div className="flex flex-wrap gap-2">
              {regionOptions.map((option) => (
                <Badge
                  key={option}
                  variant={filters.region === option ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-primary-orange/10"
                  onClick={() => handleRegionChange(option)}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>

          {/* 환경 필터 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              🌿 환경
            </h3>
            <div className="flex flex-wrap gap-2">
              {environmentOptions.map((option) => (
                <Badge
                  key={option}
                  variant={
                    filters.environment.includes(option) ? "default" : "outline"
                  }
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-primary-orange/10"
                  onClick={() => handleEnvironmentToggle(option)}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>

          {/* 최고 계절 필터 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              🌸 최고 계절
            </h3>
            <div className="flex flex-wrap gap-2">
              {seasonOptions.map((option) => (
                <Badge
                  key={option}
                  variant={
                    filters.bestSeason.includes(option) ? "default" : "outline"
                  }
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-primary-orange/10"
                  onClick={() => handleSeasonToggle(option)}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>

          {/* 선택된 필터 수 및 초기화 버튼 */}
          {activeFilterCount > 0 && (
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-gray-600">
                {activeFilterCount}개 필터 적용 중
              </span>
              <button
                onClick={handleClearAll}
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
