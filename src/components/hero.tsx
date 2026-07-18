"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Profile from "../../public/assets/image-1.png";
import Shadow from "../../public/assets/shadow.png";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function HeroSection() {
  return (
    <div className="px-2">
      <section className="relative bg-gradient-to-b from-[#000000] to-[#2E2D2D] border-2 mt-23 rounded-3xl md:rounded-4xl border-green-500 text-gray-200 px-6 sm:px-8 md:px-16 lg:px-30 py-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
        {/* Left Side Content */}
        <ScrollReveal direction="left" delay={0.1} className="relative max-w-xl space-y-5 text-center md:text-left z-10">
          {/* Green glowing shadow background */}
          <Image
            src={Shadow}
            alt=""
            className="absolute inset-0 pointer-events-none opacity-2 mix-blend-screen"
          />

          <h2 className="text-lg sm:text-xl font-semibold text-green-500">
            Hi, I am Hamza Adeel
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Web - Agentic AI <br />
            <span className="block md:inline md:ml-[14vw] bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            As a student and developer, I focus on building real-world skills in web
            development and AI. I’m eager to apply my knowledge, gain experience,
            and contribute to exciting projects. Hire me to grow and innovate together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <Link href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold shadow-md hover:shadow-green-500/40 hover:scale-105 transition"
              >
                View My Work
              </Button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold shadow-md hover:shadow-green-500/40 hover:scale-105 transition"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Right Side Image + Icons */}
        <ScrollReveal direction="right" delay={0.2} className="relative flex flex-col items-center mt-5 md:mt-0 flex-shrink-0 z-10 w-full md:w-auto">
          {/* Profile Image with green glow */}
          <div className="relative flex justify-center items-center overflow-visible max-w-full">
            <Image
              src={Profile}
              alt="Profile"
              priority
              className="w-52 sm:w-64 md:w-[320px] lg:w-[360px] h-auto object-contain drop-shadow-[0_0_20px_rgba(81,68,75)]"
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-6 text-xl">
            <Link href="#" aria-label="Facebook" className="text-2xl">
              <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
                <FaFacebookF />
              </div>
            </Link>
            <Link href="#" aria-label="Twitter" className="text-2xl">
              <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
                <FaXTwitter />
              </div>
            </Link>
            <Link href="https://www.instagram.com/hamza.adeel._.14/" target="_blank" aria-label="Instagram" className="text-2xl">
              <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
                <FaInstagram />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/hamza-adeel-a13804272/" target="_blank" aria-label="LinkedIn" className="text-2xl">
              <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/Hamza-Adeel" target="_blank" aria-label="GitHub" className="text-2xl">
              <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
                <FaGithub />
              </div>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}