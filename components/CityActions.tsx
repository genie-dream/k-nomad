"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share2, ArrowLeft, Home } from "lucide-react";

interface CityActionsProps {
  initialLikes: number;
  initialDislikes: number;
}

export function CityActions({ initialLikes, initialDislikes }: CityActionsProps) {
  const router = useRouter();
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [dislikesCount, setDislikesCount] = useState(initialDislikes);
  const [shareButtonText, setShareButtonText] = useState("공유하기");

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

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareButtonText("복사됨!");
      setTimeout(() => {
        setShareButtonText("공유하기");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Like Button */}
      <Button
        variant={userLiked ? "default" : "outline"}
        size="default"
        onClick={handleLike}
        className={userLiked ? "bg-primary-orange hover:bg-primary-orange/90" : ""}
      >
        <ThumbsUp className="h-4 w-4 mr-2" fill={userLiked ? "currentColor" : "none"} />
        좋아요 ({likesCount})
      </Button>

      {/* Dislike Button */}
      <Button
        variant={userDisliked ? "destructive" : "outline"}
        size="default"
        onClick={handleDislike}
      >
        <ThumbsDown className="h-4 w-4 mr-2" fill={userDisliked ? "currentColor" : "none"} />
        싫어요 ({dislikesCount})
      </Button>

      {/* Share Button */}
      <Button variant="secondary" size="default" onClick={handleShare}>
        <Share2 className="h-4 w-4 mr-2" />
        {shareButtonText}
      </Button>

      {/* Divider */}
      <div className="hidden sm:block w-px h-8 bg-gray-300" />

      {/* Back Button */}
      <Button variant="ghost" size="default" onClick={handleBack}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        뒤로가기
      </Button>

      {/* Home Button */}
      <Button variant="ghost" size="default" onClick={handleHome}>
        <Home className="h-4 w-4 mr-2" />
        홈으로
      </Button>
    </div>
  );
}
