"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // If cursor is outside viewport → hide
      if (
        clientX <= 0 ||
        clientY <= 0 ||
        clientX >= window.innerWidth ||
        clientY >= window.innerHeight
      ) {
        setVisible(false);
        return;
      }

      setPosition({ x: clientX, y: clientY });
      setVisible(true);
    };

    const handleVisibility = () => {
      if (document.hidden) setVisible(false);
    };

    // Hover detection
    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("blur", () => setVisible(false));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#00ff88] transition-all duration-200 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${hovering ? "w-12 h-12" : "w-8 h-8"}`}
        style={{
          transform: `translate(${position.x - (hovering ? 24 : 16)}px, ${
            position.y - (hovering ? 24 : 16)
          }px)`,
        }}
      />

      {/* Center Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] w-1 h-1 bg-[#00ff88] rounded-full transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
}
