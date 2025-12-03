"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { City } from "@/data/cities";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(city.likes);
  const [dislikesCount, setDislikesCount] = useState(city.dislikes);

  const handleLike = () => {
    if (userLiked) {
      // 좋아요 취소
      setUserLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      // 좋아요 선택
      setUserLiked(true);
      setLikesCount(likesCount + 1);
      // 싫어요가 선택되어 있으면 취소
      if (userDisliked) {
        setUserDisliked(false);
        setDislikesCount(dislikesCount - 1);
      }
    }
  };

  const handleDislike = () => {
    if (userDisliked) {
      // 싫어요 취소
      setUserDisliked(false);
      setDislikesCount(dislikesCount - 1);
    } else {
      // 싫어요 선택
      setUserDisliked(true);
      setDislikesCount(dislikesCount + 1);
      // 좋아요가 선택되어 있으면 취소
      if (userLiked) {
        setUserLiked(false);
        setLikesCount(likesCount - 1);
      }
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      {/* 도시 이미지 */}
      <div className="relative h-48 bg-gradient-to-br from-orange-400 to-pink-400">
        <div className="absolute top-3 left-3">
          <Badge className="bg-white text-gray-900 hover:bg-white">
            {city.region}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        {/* 도시 이름 */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{city.name}</h3>
          <span className="text-2xl">{city.weatherIcon}</span>
        </div>

        {/* Key-Value 형태 정보 */}
        <div className="space-y-2 mb-3">
          <div className="text-sm">
            <span className="font-semibold text-gray-700">예산:</span>{" "}
            <span className="text-gray-900">{city.budget}</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-gray-700">환경:</span>{" "}
            <span className="text-gray-900">{city.environment.join(", ")}</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-gray-700">최고 계절:</span>{" "}
            <span className="text-gray-900">{city.bestSeason.join(", ")}</span>
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
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center gap-3">
        <button
          className={`flex items-center gap-1 text-sm transition-colors ${
            userLiked
              ? "text-orange-500"
              : "text-gray-600 hover:text-orange-500"
          }`}
          onClick={handleLike}
        >
          <ThumbsUp className="h-4 w-4" fill={userLiked ? "currentColor" : "none"} />
          <span>{likesCount}</span>
        </button>
        <button
          className={`flex items-center gap-1 text-sm transition-colors ${
            userDisliked
              ? "text-orange-500"
              : "text-gray-600 hover:text-orange-500"
          }`}
          onClick={handleDislike}
        >
          <ThumbsDown className="h-4 w-4" fill={userDisliked ? "currentColor" : "none"} />
          <span>{dislikesCount}</span>
        </button>
      </CardFooter>
    </Card>
  );
}
