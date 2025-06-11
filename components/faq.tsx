"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-gray-100 hover:bg-gray-100 transition-colors flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-black">{item.question}</span>
              <span className="text-black">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white">
                <p
                  className="text-black"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
