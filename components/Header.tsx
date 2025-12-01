"use client";

import { Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import AuthModal from "./AuthModal";

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* 로고 */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-orange">
              🗺️ NOMAD KOREA
            </div>
          </div>

          {/* 검색바 */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="도시 이름을 검색하세요..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* 우측 메뉴 */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex"
              onClick={() => console.log("도시 추가")}
            >
              도시 추가
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <User className="mr-2 h-4 w-4" />
              로그인
            </Button>
          </div>
        </div>
      </header>

      <AuthModal
        open={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
      />
    </>
  );
}
