"use client";

export default function SortSelect() {
  return (
    <select
      className="px-4 py-2 border rounded-lg bg-white"
      onChange={(e) => console.log("Sort by:", e.target.value)}
    >
      <option value="recommended">추천순</option>
      <option value="rating">평점순</option>
      <option value="price-low">가격 낮은순</option>
      <option value="price-high">가격 높은순</option>
      <option value="popular">인기순</option>
    </select>
  );
}
