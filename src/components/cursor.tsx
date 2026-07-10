"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const shouldReduceMotion = useReducedMotion();

  // Create smooth spring animations for the cursor parts
  // The center dot is highly responsive (low damping/mass), while the outer ring has a fluid lag
  const dotSpringConfig = { damping: 45, stiffness: 700, mass: 0.1 };
  const ringSpringConfig = { damping: 28, stiffness: 220, mass: 0.5 };

  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    // Detect desktop (mouse devices)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Detect clickable elements
      const isClickable = target.closest("a, button, [role='button'], .cursor-pointer");
      setHovered(!!isClickable);

      // Detect text input fields to hide the dot and shrink the ring
      const isInputElement = target.closest("input, textarea, select");
      setIsInput(!!isInputElement);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, visible]);

  if (!isDesktop || shouldReduceMotion) return null;

  return (
    <>
      {/* Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#00ff88] mix-blend-screen"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 48 : isInput ? 18 : 32,
          height: hovered ? 48 : isInput ? 18 : 32,
          backgroundColor: hovered ? "rgba(0, 255, 136, 0.15)" : "rgba(0, 255, 136, 0)",
          borderWidth: isInput ? "1px" : "1.5px",
          borderColor: isInput ? "rgba(0, 255, 136, 0.4)" : "#00ff88",
        }}
        animate={{
          scale: visible ? 1 : 0,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
      />

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#00ff88] mix-blend-screen"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 6 : isInput ? 0 : 4,
          height: hovered ? 6 : isInput ? 0 : 4,
        }}
        animate={{
          scale: visible ? 1 : 0,
          opacity: visible ? (isInput ? 0 : 1) : 0,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
      />
    </>
  );
}