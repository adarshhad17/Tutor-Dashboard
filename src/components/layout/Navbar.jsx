import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  PresentationChartBarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { MdOutlineDashboard, MdOutlineSmartDisplay } from "react-icons/md";
import Logo from "../../assets/logo.png";
import NavbarTabs from "./NavbarTabs";

export default function Navbarr() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false); 
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/*--------- TOP NAV */}
      <nav className="w-full bg-white border-b border-gray-200">
  <div className="max-w-[1240px] mx-auto px-6 py-3 flex items-center justify-between">

    {/* LEFT - LOGO */}
    <div className="flex items-center gap-2">
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-8" />
        <span className="font-bold text-lg tracking-wide text-gray-800">
          LOREMLOGO
        </span>
      </Link>
    </div>

    {/* CENTER MENU (Desktop only) */}
    <div className="hidden lg:flex items-center gap-8 text-[15px] text-gray-700 font-semibold">
      <button className="hover:text-teal-600">K-12 Videos</button>
      <button className="hover:text-teal-600">Podcasts</button>
      <button className="hover:text-teal-600">FAQs</button>
      <button className="hover:text-teal-600">Help and Support</button>
    </div>

    {/* RIGHT SIDE (Profile + Bell) */}
    <div className="hidden lg:flex items-center gap-6">

      {/* Profile */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-[15px]">
          V
        </div>

        <div className="text-gray-500 text-[14px] flex items-center gap-1">
          Hello, <span className="font-semibold text-gray-900">Victor</span>
          <span className="text-teal-500 text-[8px]">▼</span>
        </div>
      </div>

      {/* Notification */}
      <div className="relative cursor-pointer">
        <BellIcon className="w-6 h-6 text-teal-600" />
        <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
          4
        </span>
      </div>

    </div>

    {/* MOBILE MENU TOGGLE BUTTON */}
    <button className="lg:hidden" onClick={() => setOpen(!open)}>
      {open ? (
        <XMarkIcon className="w-7 h-7 text-gray-700" />
      ) : (
        <Bars3Icon className="w-7 h-7 text-gray-700" />
      )}
    </button>

  </div>
</nav>


      {/* SECOND ROW TABS */}
      <NavbarTabs />

      {/* ----------- Mobile / Tablet Sidebar -------- */}
      <div
        className={`fixed top-0 left-0 h-full w-[50%] max-w-[290px] bg-white z-50 shadow-xl transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* ------Logo */}
        <div className="flex items-center justify-between px-5 py-4">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <img src={Logo} className="w-8" alt="Logo" />
            <span className="font-semibold text-[13px] tracking-wide text-gray-800">
              LOREMLOGO
            </span>
          </Link>
        </div>

        <div className="px-6 py-5 flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-[13px]">
            V
          </div>
          <span className="text-gray-500 text-[16px]">
            Hello, <span className="font-semibold text-gray-700">Victor</span>
          </span>
        </div>

        {/* ------- Menu ---------- */}
        <div className="px-6 pt-6 space-y-7 text-[14px] text-gray-600 mt-10">
          <NavLink to="/overview" onClick={() => setOpen(false)} className={({ isActive }) =>
            `flex items-center gap-3 ${isActive ? "text-teal-600 font-semibold" : ""}`}>
            <MdOutlineDashboard className="w-5 h-5" />
            Overview
          </NavLink>

          <NavLink to="/sessions" onClick={() => setOpen(false)} className={({ isActive }) =>
            `flex items-center gap-3 ${isActive ? "text-teal-600 font-semibold" : ""}`}>
            <Bars3Icon className="w-5 h-5" />
            Sessions
          </NavLink>

          <NavLink to="/notifications" onClick={() => setOpen(false)} className={({ isActive }) =>
            `flex items-center gap-3 ${isActive ? "text-teal-600 font-semibold" : ""}`}>
            <BellIcon className="w-5 h-5" />
            Notifications
          </NavLink>

          <NavLink to="/media" onClick={() => setOpen(false)} className={({ isActive }) =>
            `flex items-center gap-3 ${isActive ? "text-teal-600 font-semibold" : ""}`}>
            <MdOutlineSmartDisplay className="w-5 h-5" />
            Media
          </NavLink>

          <NavLink to="/whiteboard" onClick={() => setOpen(false)} className={({ isActive }) =>
            `flex items-center gap-3 ${isActive ? "text-teal-600 font-semibold" : ""}`}>
            <PresentationChartBarIcon className="w-5 h-5" />
            Whiteboard
          </NavLink>

          <NavLink to="/account" onClick={() => setOpen(false)} className={({ isActive }) =>
            `flex items-center gap-3 ${isActive ? "text-teal-600 font-semibold" : ""}`}>
            <UserIcon className="w-5 h-5" />
            Account
          </NavLink>
        </div>

        {/* ---------------Lower Section */}
        <div className="px-6 pt-10 space-y-5 text-[14px] text-gray-700 font-medium mt-10">
          <button className="text-left w-full hover:text-teal-600">K-12 Videos</button>
          <button className="text-left w-full hover:text-teal-600">Podcasts</button>
          <button className="text-left w-full hover:text-teal-600">FAQs</button>
          <button className="text-left w-full hover:text-teal-600">Help and Support</button>
        </div>
      </div>

      {/* CLICK OUTSIDE TO CLOSE */}
      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}
    </>
  );
}
