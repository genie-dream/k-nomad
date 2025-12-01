"use client";

export default function Pagination() {
  return (
    <div className="mt-8 flex justify-center gap-2">
      <button
        className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        onClick={() => console.log("Previous page")}
      >
        ← 이전
      </button>
      <button className="px-4 py-2 bg-primary-orange text-white rounded-lg">
        1
      </button>
      <button
        className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        onClick={() => console.log("Page 2")}
      >
        2
      </button>
      <button
        className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        onClick={() => console.log("Page 3")}
      >
        3
      </button>
      <button
        className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        onClick={() => console.log("Next page")}
      >
        다음 →
      </button>
    </div>
  );
}
