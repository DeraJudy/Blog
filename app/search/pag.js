"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Temporary example data
      const dummyData = [
        { title: "Chaotic Thoughts: Calm in the Storm", category: "Chaotic Thoughts" },
        { title: "So Finance: Saving Smart", category: "So Finance" },
        { title: "Lifestyle: Self Care Tips", category: "Lifestyle" },
      ];

      const filtered = dummyData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
    }
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        Search Results for: <span className="text-[#FF6F61]">{query}</span>
      </h1>

      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((item, idx) => (
            <li
              key={idx}
              className="p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500">{item.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-lg">No results found for "{query}".</p>
      )}
    </div>
  );
}
