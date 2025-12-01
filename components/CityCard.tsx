"use client";

import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ThumbsUp, MessageCircle, Star, Users, Wifi, Coffee, Train } from "lucide-react";
import { City } from "@/data/cities";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      {/* 도시 이미지 */}
      <div className="relative h-48 bg-gradient-to-br from-orange-400 to-pink-400">
        <div className="absolute top-3 left-3">
          <Badge className="bg-white text-gray-900 hover:bg-white">
            {city.region}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {city.rating}
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        {/* 도시 이름 */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{city.name}</h3>
          <span className="text-2xl">{city.weatherIcon}</span>
        </div>

        {/* 가격 */}
        <div className="text-2xl font-bold text-primary-orange mb-3">
          ₩{city.monthlyCost.toLocaleString()}
          <span className="text-sm text-gray-500 font-normal">/월</span>
        </div>

        {/* 지표들 */}
        <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
          <div className="flex items-center gap-1">
            <Coffee className="h-4 w-4 text-gray-500" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full mr-0.5 ${
                    i < city.cafeScore ? "bg-primary-orange" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-700">
            <Wifi className="h-4 w-4" />
            <span>{city.internetSpeed} Mbps</span>
          </div>
          <div className="flex items-center gap-1">
            <Train className="h-4 w-4 text-gray-500" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full mr-0.5 ${
                    i < city.transportScore ? "bg-primary-orange" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 태그들 */}
        <div className="flex flex-wrap gap-1 mb-3">
          {city.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* 현재 노마드 수 */}
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
          <Users className="h-4 w-4" />
          <span className="font-semibold">{city.currentNomads}명</span>
          <span>작업 중</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <button className="flex items-center gap-1 hover:text-primary-orange">
            <ThumbsUp className="h-4 w-4" />
            <span>{city.likes}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-primary-orange">
            <MessageCircle className="h-4 w-4" />
            <span>{city.comments}</span>
          </button>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => console.log("View city:", city.id)}
        >
          상세보기
        </Button>
      </CardFooter>
    </Card>
  );
}
