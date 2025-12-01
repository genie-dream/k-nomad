import { Zap, DollarSign, Target, BarChart } from "lucide-react";

export default function ValuePropositionSection() {
  const values = [
    {
      icon: Zap,
      title: "시간 절약",
      description: "5분 안에 원하는 도시 찾기",
      color: "text-yellow-500",
    },
    {
      icon: DollarSign,
      title: "비용 절감",
      description: "데이터 기반 의사결정으로 시행착오 최소화",
      color: "text-green-500",
    },
    {
      icon: Target,
      title: "정확성",
      description: "실측 데이터와 실제 사용자 리뷰",
      color: "text-blue-500",
    },
    {
      icon: BarChart,
      title: "직관성",
      description: "복잡한 데이터를 시각적으로 쉽게 비교",
      color: "text-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            왜 노마드 코리아를 선택해야 할까요?
          </h2>
          <p className="text-lg text-gray-600">
            데이터 기반의 스마트한 도시 선택
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${value.color} mb-4`}>
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
