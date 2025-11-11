import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 ">  
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 gap-6">

          {/* LEFT — BRAND SECTION */}
          <div className="min-w-[180px]">
            <h2 className="text-xl font-semibold text-white ">
              Tutor<span className="text-teal-600">Pro</span>
            </h2>
            <p className="text-white text-sm mt-1 max-w-240px ">
              A platform designed to make teaching and learning seamless.
            </p>
          </div>

          {/* CENTER — QUICK LINKS */}
          <nav className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-white ">
            <a href="#" className="hover:text-teal-600 transition">Dashboard</a>
            <a href="#" className="hover:text-teal-600 transition">Sessions</a>
            <a href="#" className="hover:text-teal-600 transition">Students</a>
            <a href="#" className="hover:text-teal-600 transition">Support</a>
          </nav>

          {/* RIGHT — SOCIAL ICONS */}
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:text-teal-600 transition">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-teal-600 transition">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-teal-600 transition">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* BOTTOM SMALL TEXT */}
        <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TutorPro — Designed with care.
        </div>

      </div>
    </footer>
  );
}
