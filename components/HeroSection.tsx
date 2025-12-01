"use client";

import { Button } from "./ui/button";
import { Sparkles, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 메인 헤드라인 */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            데이터로 찾는 <br />
            <span className="text-primary-orange">나만의 작업 천국</span>
          </h1>

          {/* 서브 헤드라인 */}
          <p className="text-xl text-gray-600 mb-8">
            한국의 모든 도시를 데이터로 비교하고, 당신만의 최적의 장소를 발견하세요
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              <Sparkles className="mr-2 h-5 w-5" />
              무료로 시작하기
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              둘러보기
            </Button>
          </div>

          {/* 소셜 프루프 */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 border-2 border-white"
                  />
                ))}
              </div>
              <span>842명의 노마드가 사용 중</span>
            </div>
            <div>⭐⭐⭐⭐⭐ <span className="font-semibold">4.8/5.0</span></div>
            <div>🏙️ <span className="font-semibold">12개 도시</span> 데이터 제공</div>
          </div>

          {/* As seen on */}
          <div className="mt-16 pt-8 border-t">
            <p className="text-sm text-gray-500 mb-4">AS SEEN ON</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-xl font-bold text-gray-700">TechCrunch</div>
              <div className="text-xl font-bold text-gray-700">Product Hunt</div>
              <div className="text-xl font-bold text-gray-700">Hacker News</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
