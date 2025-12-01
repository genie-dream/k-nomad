"use client";

import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 브랜드 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">🗺️ NOMAD KOREA</h3>
            <p className="text-gray-400 text-sm">
              한국 디지털 노마드의 모든 것
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">도시 탐색</a></li>
              <li><a href="#" className="hover:text-white">도시 비교</a></li>
              <li><a href="#" className="hover:text-white">리뷰 작성</a></li>
              <li><a href="#" className="hover:text-white">커뮤니티</a></li>
            </ul>
          </div>

          {/* 도움말 */}
          <div>
            <h4 className="font-semibold mb-4">도움말</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">이용약관</a></li>
              <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">고객센터</a></li>
            </ul>
          </div>

          {/* 뉴스레터 */}
          <div>
            <h4 className="font-semibold mb-4">뉴스레터 구독</h4>
            <p className="text-sm text-gray-400 mb-4">
              매주 새로운 도시 정보를 받아보세요
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="이메일 주소"
                className="bg-gray-800 border-gray-700"
              />
              <Button size="sm">
                구독
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Nomad Korea. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
