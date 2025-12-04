interface RatingBarProps {
  label: string;
  score: number; // 1-5
  icon?: React.ReactNode;
}

export function RatingBar({ label, score, icon }: RatingBarProps) {
  const percentage = (score / 5) * 100;

  // Determine color based on score
  let colorClass = "bg-red-500";
  if (score >= 4) {
    colorClass = "bg-green-500";
  } else if (score >= 3) {
    colorClass = "bg-yellow-500";
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-600">{icon}</span>}
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">
          {score.toFixed(1)} / 5.0
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`${colorClass} h-2.5 rounded-full transition-all`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
