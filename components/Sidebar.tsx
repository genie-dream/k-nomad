"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, Users, BarChart3 } from "lucide-react";
import { getTrendingCities } from "@/data/cities";

export default function Sidebar() {
  const trendingCities = getTrendingCities();

  return (
    <div className="space-y-6">
      {/* 이번 주 급상승 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary-orange" />
            이번 주 급상승
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {trendingCities.map((city, index) => (
              <div
                key={city.id}
                className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-gray-300">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{city.name}</div>
                    <div className="text-xs text-gray-500">
                      {city.currentNomads}명
                    </div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-green-600">
                  +{(Math.random() * 50 + 20).toFixed(0)}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 실시간 통계 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary-orange" />
            실시간 통계
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">온라인</span>
            </div>
            <span className="font-semibold">842명</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">오늘 방문</span>
            <span className="font-semibold">1,234명</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">누적 사용자</span>
            <span className="font-semibold">12,381명</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">도시 이동</span>
            <span className="font-semibold">2,456회</span>
          </div>
        </CardContent>
      </Card>

      {/* 최근 리뷰 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">📰 최근 리뷰</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="border-l-2 border-primary-orange pl-3 py-1">
              <p className="text-gray-700">"제주 한달살기 최고!"</p>
              <p className="text-xs text-gray-500 mt-1">1시간 전</p>
            </div>
            <div className="border-l-2 border-gray-200 pl-3 py-1">
              <p className="text-gray-700">"부산 카페 추천합니다"</p>
              <p className="text-xs text-gray-500 mt-1">3시간 전</p>
            </div>
            <div className="border-l-2 border-gray-200 pl-3 py-1">
              <p className="text-gray-700">"강릉 작업 환경 좋아요"</p>
              <p className="text-xs text-gray-500 mt-1">5시간 전</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 인기 도시 TOP 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="h-5 w-5 text-primary-orange" />
            인기 도시 TOP 3
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {trendingCities.map((city, index) => (
              <div key={city.id} className="flex items-center justify-between">
                <span className="text-gray-700">
                  {index + 1}. {city.name}
                </span>
                <span className="font-semibold">({city.currentNomads}명)</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
