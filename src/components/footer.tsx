import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdMailOutline, MdLocalPhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../public/assets/Hamza_Logo - Copy.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bottom-0 right-0 left-0 z-50 border-t border-emerald-500/20 bg-[#0D0D0D] text-gray-300">
      <div className="px-5 md:px-32">
        {/* Logo */}
        <div className="flex justify-center py-4">
          <Image src={Logo} alt="Hamza Logo" height={50} />
        </div>

        {/* Nav Links */}
        <div className="flex justify-center">
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
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6 text-2xl">
          <Link
            href="https://www.facebook.com/share/1D5onVH6Rd/"
            aria-label="Facebook"
            className="flex justify-center items-center h-12 w-12 rounded-full hover:text-[#00FF66] transition"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://x.com/HamzaAdeel25"
            aria-label="Twitter"
            className="flex justify-center items-center h-12 w-12 rounded-full hover:text-[#00FF66] transition"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/hamza.adeel._.14/"
            target="_blank"
            aria-label="Instagram"
            className="flex justify-center items-center h-12 w-12 rounded-full hover:text-[#00FF66] transition"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hamza-adeel-a13804272/"
            target="_blank"
            aria-label="LinkedIn"
            className="flex justify-center items-center h-12 w-12 rounded-full hover:text-[#00FF66] transition"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://github.com/Hamza-Adeel"
            target="_blank"
            aria-label="GitHub"
            className="flex justify-center items-center h-12 w-12 rounded-full hover:text-[#00FF66] transition"
          >
            <FaGithub />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-5">
          <div className="flex items-center gap-2">
            <MdMailOutline className="text-[#00FF66] text-xl" />
            <span>Hamzaadeel0025@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MdLocalPhone className="text-[#00FF66] text-xl" />
            <span>+92 324 1272531</span>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10">
          <hr className="border-[#00FF66]/30" />
          <div className="flex justify-center items-center gap-2 py-5 text-sm sm:text-md text-gray-400">
            &copy; 2025
            <span className="text-[#00FF66] font-semibold">Hamza Adeel.</span>
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
