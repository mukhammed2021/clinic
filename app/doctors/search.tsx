"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Search() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const specialistTags = [
    "Терапевты",
    "Стоматологи",
    "Хирурги",
    "Эндокринологи",
    "Акушеры",
    "Невропатологи",
    "Педиатры",
    "Дерматологи",
    "Ортопеды",
    "Психотерапевты",
    "Кардиологи",
    "Рентгенологи",
    "Неврологи",
    "Ревматолог",
    "Инфекционист",
  ];

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  return (
    <div>
      <div className="container">
        <div className="relative mb-12">
          <SearchIcon className="absolute left-6 top-1/2 size-[1.875rem] -translate-y-1/2 text-[#a8a5a5]" />
          <Input
            placeholder="введите запрос"
            className="h-auto rounded-[1.25rem] border-[#dedddd] py-4 pl-[4.375rem] pr-6 font-normal text-[#a8a5a5] shadow-[0_5px_8px_-1px_rgba(57,55,55,0.19)] placeholder:font-normal placeholder:uppercase placeholder:text-[#a8a5a5]"
          />
        </div>
        <div className="hidden grid-cols-3 gap-3 md:grid lg:grid-cols-6">
          {specialistTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`rounded-[1.25rem] border px-4 py-2 text-xl shadow-[0_5px_8px_-1px_rgba(57,55,55,0.19)] transition-colors ${
                selectedTag === tag
                  ? "border-gray-300 bg-gray-100 text-gray-800"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="hide-scrollbar w-full overflow-x-auto pb-4 md:hidden">
          <div className="flex space-x-2 px-1">
            {specialistTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                  selectedTag === tag
                    ? "border-gray-300 bg-gray-100 text-gray-800"
                    : "border-gray-200 bg-white text-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
