"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Lock, ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const supabase = createClient();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      // Login successful
      router.push("/");
      router.refresh();
    } catch (err) {
      setError("로그인 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* 홈으로 돌아가기 버튼 */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-orange mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>홈으로 돌아가기</span>
        </Link>

        <Card className="shadow-lg">
          <CardHeader className="space-y-1 pb-6">
            {/* 로고 */}
            <div className="text-center mb-2">
              <div className="text-3xl font-bold text-primary-orange inline-block">
                🗺️ NOMAD KOREA
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900">
              로그인
            </h2>
            <p className="text-center text-gray-600">
              노마드 라이프를 시작하세요
            </p>
          </CardHeader>

          <CardContent>
            {/* 에러 메시지 */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              {/* 이메일 입력 */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  이메일
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* 비밀번호 입력 */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  비밀번호
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* 비밀번호 찾기 */}
              <div className="flex justify-end">
                <Link href="#" className="text-sm text-primary-orange hover:underline">
                  비밀번호를 잊으셨나요?
                </Link>
              </div>

              {/* 로그인 버튼 */}
              <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                {isLoading ? "로그인 중..." : "로그인"}
              </Button>

              {/* 회원가입 링크 */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  아직 계정이 없으신가요?{" "}
                  <Link href="/signup" className="text-primary-orange font-semibold hover:underline">
                    회원가입
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* 추가 정보 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>로그인하면 NOMAD KOREA의{" "}
            <Link href="#" className="text-primary-orange hover:underline">
              이용약관
            </Link>
            {" "}및{" "}
            <Link href="#" className="text-primary-orange hover:underline">
              개인정보처리방침
            </Link>
            에 동의하게 됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
