import { getCityById, cities } from "@/data/cities";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Wallet, Wifi, Coffee, Car, Laptop, DollarSign, MapPin, Trees, Calendar, Sprout } from "lucide-react";
import { RatingBar } from "@/components/RatingBar";
import { CityActions } from "@/components/CityActions";

export async function generateStaticParams() {
  return cities.map((city) => ({
    id: city.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const city = getCityById(id);

  if (!city) {
    return {
      title: "도시를 찾을 수 없습니다 - K-Nomad",
    };
  }

  return {
    title: `${city.name} (${city.nameEn}) - K-Nomad`,
    description: city.description,
    openGraph: {
      title: `${city.name} - K-Nomad`,
      description: city.description,
      images: [city.image],
    },
  };
}

export default async function CityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const city = getCityById(id);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Hero Section */}
      <div className="relative h-48 md:h-64 lg:h-80 bg-gradient-to-r from-primary-blue to-primary-orange">
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {city.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-2">
            {city.nameEn} · {city.region}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-yellow-400 text-2xl">★</span>
            <span className="text-white text-xl font-semibold">{city.rating}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Action Buttons */}
          <div className="flex justify-center lg:justify-start">
            <CityActions initialLikes={city.likes} initialDislikes={city.dislikes} />
          </div>

          {/* Main Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Monthly Cost */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  월 생활비
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary-orange">
                  {city.monthlyCost.toLocaleString()}원
                </div>
                <p className="text-xs text-gray-500 mt-1">{city.budget}</p>
              </CardContent>
            </Card>

            {/* Current Nomads */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  현재 노마드
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary-blue">
                  {city.currentNomads}명
                </div>
                <p className="text-xs text-gray-500 mt-1">이 도시에서 활동 중</p>
              </CardContent>
            </Card>

            {/* Likes */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">
                  좋아요
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {city.likes}
                </div>
                <p className="text-xs text-gray-500 mt-1">추천 수</p>
              </CardContent>
            </Card>

            {/* Dislikes */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">
                  싫어요
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {city.dislikes}
                </div>
                <p className="text-xs text-gray-500 mt-1">비추천 수</p>
              </CardContent>
            </Card>
          </div>

          {/* Environment Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">환경 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Internet Speed */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Wifi className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">인터넷 속도</p>
                    <p className="text-lg font-bold">{city.internetSpeed} Mbps</p>
                  </div>
                </div>

                {/* Cafe Score */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Coffee className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">카페 점수</p>
                    <p className="text-lg font-bold">{city.cafeScore} / 5</p>
                  </div>
                </div>

                {/* Transport Score */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Car className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">교통 점수</p>
                    <p className="text-lg font-bold">{city.transportScore} / 5</p>
                  </div>
                </div>

                {/* Weather */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg text-2xl">
                    {city.weatherIcon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">현재 날씨</p>
                    <p className="text-lg font-bold">{city.temperature}°C</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Items */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">상세 평가</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RatingBar
                  label="작업 환경"
                  score={city.workEnvironment}
                  icon={<Laptop className="h-4 w-4" />}
                />
                <RatingBar
                  label="생활비"
                  score={city.costOfLiving}
                  icon={<DollarSign className="h-4 w-4" />}
                />
                <RatingBar
                  label="편의성"
                  score={city.convenience}
                  icon={<MapPin className="h-4 w-4" />}
                />
                <RatingBar
                  label="자연 환경"
                  score={city.nature}
                  icon={<Trees className="h-4 w-4" />}
                />
              </div>
            </CardContent>
          </Card>

          {/* Description and Tags */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">도시 소개</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{city.description}</p>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">추가 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Environment Types */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sprout className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-semibold text-gray-700">환경 특성</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {city.environment.map((env) => (
                      <Badge key={env} variant="secondary">
                        {env}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Best Season */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-semibold text-gray-700">최적 시즌</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {city.bestSeason.map((season) => (
                      <Badge key={season} variant="outline">
                        {season}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">도시 특징</CardTitle>
              <CardDescription>이 도시의 주요 특징과 키워드</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {city.tags.map((tag) => (
                  <Badge key={tag} variant="default" className="text-sm py-1 px-3">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
