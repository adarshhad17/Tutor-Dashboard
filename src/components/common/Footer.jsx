import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">

        {/* Top 4 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-14">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              LOREMLOGO
            </h2>
            <p className="text-sm leading-6 mt-3 max-w-xs">
              A powerful platform that simplifies the teaching and learning experience.
              Our mission is to create meaningful, seamless, and collaborative educational interactions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="hover:text-teal-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-teal-400 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-teal-400 transition"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition">Dashboard</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Tutoring Sessions</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Student Management</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Class Schedules</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:support@loremlogo.com" className="hover:text-teal-400">support@loremlogo.com</a></li>
              <li>Phone: <a href="tel:+919876543210" className="hover:text-teal-400">+91 98765 43210</a></li>
              <li>Address:</li>
              <p className="text-gray-400 text-xs leading-5 max-w-[180px]">
                3rd Floor, Lorem Tech Park,  
                Kochi, Kerala - 682021
              </p>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} LOREMLOGO. All Rights Reserved. Built with passion & purpose.
        </div>

      </div>
    </footer>
  );
}
