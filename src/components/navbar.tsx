"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
// import Image from "next/image";
// import Hamza_Logo from "../../public/assets/Hamza_Logo - Copy - Copy.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <nav className="fixed top-0 right-0 left-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-lg shadow-md border-b border-emerald-500/20 p-3">
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#0D0D0D] shadow-md border-b border-emerald-500/20 p-5">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        {/* Logo */}
        {/* <Link href="/" className="flex items-center">
          <Image
            className="m-2 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]"
            src={Hamza_Logo}
            alt="Hamza Logo"
            height={50}
          />
        </Link> */}
        <Link href="/" className="flex items-center group">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#00FFA3] font-bold text-2xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            Hamza Adeel
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#39FF14] to-[#00FFA3] transition-all duration-300 group-hover:w-full"></span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 text-sm sm:text-base font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="transition duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-500">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Resume Button */}
          <Link href="/My-Resume.pdf" download>
            <Button
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold border-0 shadow-md hover:shadow-green-400/40 hover:scale-105 transition"
            >
              Download Resume
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <RiMenu3Fill size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-[#0B0B0B]/95 backdrop-blur-lg rounded-xl border border-emerald-500/20 p-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-200 text-sm font-medium">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-500"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/My-Resume.pdf" download>
                <Button
                  size="sm"
                  onClick={() => setMenuOpen(false)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold shadow-md hover:scale-105 transition"
                >
                  Download CV
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
