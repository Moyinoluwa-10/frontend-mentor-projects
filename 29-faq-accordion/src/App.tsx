import { useState } from "react";
import faqs from "./data/faqs.json";
import FaqItem from "./components/FaqItem.jsx";

function App() {
  const [isActive, setIsActive] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setIsActive((active) => (active === id ? null : id));
  };

  return (
    <div className="hero bg-light-purple min-h-screen w-full flex flex-col items-center justify-center gap-10 py-10 px-5">
      <div className="w-full max-w-[530px] bg-white rounded-2xl p-5 md:py-10 md:px-8">
        <div className="flex items-center gap-5 mb-4">
          <img src="/icon-star.svg" alt="icon-star" />
          <h1 className="font-bold text-4xl md:text-6xl text-dark-purple">
            FAQs
          </h1>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              {...faq}
              id={i + 1}
              isActive={isActive}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

