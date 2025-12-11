import { useState } from "react";

export default function FilterBar({ categories, onFilter }) {
  const [active, setActive] = useState("All");

  const handleClick = (category) => {
    setActive(category);
    onFilter(category);
  };

  return (
    <div className="flex gap-3 flex-wrap mb-6">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-full border text-sm transition
            ${
              active === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
