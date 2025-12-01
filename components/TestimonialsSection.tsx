import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "김민수",
      role: "프론트엔드 개발자",
      location: "제주",
      rating: 5,
      comment:
        "제주에서 한달살기를 계획하는데 노마드 코리아 덕분에 완벽한 정보를 얻을 수 있었어요. 실제 데이터가 정말 도움이 되었습니다!",
      avatar: "👨‍💻",
    },
    {
      name: "이지은",
      role: "UX 디자이너",
      location: "부산",
      rating: 5,
      comment:
        "부산의 카페 정보와 생활비 데이터가 정말 정확해요. 이제는 매번 다른 도시로 이동할 때마다 이 사이트를 확인해요.",
      avatar: "👩‍🎨",
    },
    {
      name: "박준혁",
      role: "백엔드 개발자",
      location: "강릉",
      rating: 5,
      comment:
        "강릉으로 이주하기 전에 이 사이트로 충분히 조사했어요. 실제로 와보니 정보가 거의 일치해서 놀랐습니다. 강력 추천합니다!",
      avatar: "👨‍💼",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💬 사용자 후기
          </h2>
          <p className="text-lg text-gray-600">
            실제 디지털 노마드들의 생생한 이야기
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                {/* 별점 */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* 후기 내용 */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* 사용자 정보 */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary-orange">
                      📍 {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
