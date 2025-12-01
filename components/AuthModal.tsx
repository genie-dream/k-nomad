"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auth submit:", mode);
    // 실제 로그인/회원가입 기능은 구현하지 않음
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {mode === "login" ? "로그인" : "회원가입"}
          </DialogTitle>
          <DialogDescription>
            {mode === "login"
              ? "노마드 코리아에 다시 오신 것을 환영합니다"
              : "노마드 코리아와 함께 여행을 시작하세요"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              이메일
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              비밀번호
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          {mode === "signup" && (
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-sm font-medium">
                비밀번호 확인
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
          )}

          <Button type="submit" className="w-full">
            {mode === "login" ? "로그인" : "회원가입"}
          </Button>

          {/* 소셜 로그인 (UI만) */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                또는
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => console.log("Kakao login")}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FEE500">
                <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7-.2.8-.7 2.8-.8 3.2-.1.5.2.5.4.4.3-.1 3.7-2.5 4.3-2.9.5.1 1 .1 1.5.1 5.5 0 10-3.6 10-8S17.5 3 12 3z"/>
              </svg>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => console.log("Naver login")}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#03C75A">
                <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/>
              </svg>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => console.log("Google login")}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="text-center text-sm">
            {mode === "login" ? (
              <>
                계정이 없으신가요?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="text-primary-orange hover:underline"
                >
                  회원가입
                </button>
              </>
            ) : (
              <>
                이미 계정이 있으신가요?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-primary-orange hover:underline"
                >
                  로그인
                </button>
              </>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
