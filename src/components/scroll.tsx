"use client";

import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
      
      const scrollPosition = window.scrollY;
      const scrollPercent = (scrollPosition / totalHeight) * 100;

      setScroll(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    scroll > 5 && (
      <div>
      <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-15 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
      style={{
        background: `conic-gradient(#00ff88 ${scroll}%, #1f2937 ${scroll}%)`,
      }}
      >
        <span className="bg-black text-[#00ff88] rounded-full w-10 h-10 flex items-center justify-center border border-[#00ff88]">
          <MdOutlineKeyboardArrowUp size={25} />
        </span>
      </button>
      <span className="fixed bottom-7 right-7 z-50 text-green-400 text-sm ">

        {Math.round(scroll)}%
      </span>

      </div>
      
    )
  );
}
