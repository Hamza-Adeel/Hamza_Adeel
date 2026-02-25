"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Profile from "../../public/assets/Profile.png";
import Shadow from "../../public/assets/shadow.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="px-2">
    <section className="relative bg-gradient-to-b from-[#000000] to-[#2E2D2D] border-2 mt-25 rounded-3xl md:rounded-4xl border-green-500 text-gray-200 px-6 sm:px-8 md:px-30 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side Content */}
      <div className="relative max-w-xl space-y-5 text-center md:text-left">
        {/* Green glowing shadow background */}
        <Image
          src={Shadow}
          alt=""
          className="absolute inset-0 pointer-events-none opacity-2 mix-blend-screen"
        />

        {/* <p className="text-sm sm:text-base text-green-400">Hi, I am</p> */}
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
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <Link href="#projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold shadow-md hover:shadow-green-500/40 hover:scale-105 transition"
            >
              View My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold shadow-md hover:shadow-green-500/40 hover:scale-105 transition"
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Side Image + Icons */}
      <div className="relative flex flex-col items-center mt-5 md:mt-0">
        {/* Profile Image with green glow */}
        <Image
          src={Profile}
          alt="Profile"
          className="w-52 sm:w-64 md:w-[350px] h-auto drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]"
        />

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-6 text-xl">
          <Link href="#" className="text-2xl">
            <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
              <FaFacebookF />
            </div>
          </Link>
          <Link href="#" className="text-2xl">
            <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
              <FaXTwitter />
            </div>
          </Link>
          <Link href="https://www.instagram.com/hamza.adeel._.14/" target="_blank" className="text-2xl">
            <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
              <FaInstagram />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/hamza-adeel-a13804272/" target="_blank" className="text-2xl">
            <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
              <FaLinkedinIn />
            </div>
          </Link>
          <Link href="https://github.com/Hamza-Adeel" target="_blank" className="text-2xl">
            <div className="flex justify-center items-center h-[45px] w-[45px] rounded-full border-2 border-green-500/40 hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-400/50">
              <FaGithub />
            </div>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}