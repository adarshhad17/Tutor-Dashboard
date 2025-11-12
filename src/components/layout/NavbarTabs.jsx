import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiBell, FiMonitor, FiUser } from "react-icons/fi";
import { MdOutlineSmartDisplay } from "react-icons/md";
import React from "react";

export default function NavbarTabs() {
  const tabs = [
    { to: "/overview", label: "Overview", icon: <MdOutlineDashboard size={20} /> },
    { to: "/sessions", label: "Sessions", icon: <IoReorderThreeOutline size={22} /> },
    { to: "/notifications", label: "Notifications", icon: <FiBell size={20} /> },
    { to: "/media", label: "Media", icon: <MdOutlineSmartDisplay size={20} /> },
    { to: "/whiteboard", label: "Whiteboard", icon: <FiMonitor size={19} /> },
    { to: "/account", label: "Account", icon: <FiUser size={19} /> },
  ];

  return (
    <div className="bg-white lg:border-b  border-gray-100 lg:shadow">

      {/* ------mob */}
      <div className="block sm:hidden px-4 py-3">
        <h2 className="text-[14px] font-semibold text-gray-800">
          Tutor Dashboard
        </h2>
      </div>

      {/* -------tab */}
      <div className="hidden sm:block xl:hidden overflow-x-auto no-scrollbar bg-white">
        
        <div className="flex gap-6 px-4 py-3 text-[14px] text-gray-600 whitespace-nowrap">
          
          {tabs.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `pb-1 ${
                  isActive
                    ? "text-teal-600 font-semibold border-b-2 border-teal-600"
                    : "text-gray-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/*-------desk*/}
      <div className="hidden xl:flex max-w-[1240px] mx-auto px-6 items-center  gap-65">

        <h2 className="py-3 text-[16px] font-semibold text-gray-800 whitespace-nowrap">
          Tutor Dashboard
        </h2>

        <div className="flex items-center gap-5 text-[15px] font-semibold text-gray-500 whitespace-nowrap">
          {tabs.map(({ to, label, icon }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `relative flex items-center gap-2 h-12 px-1 transition 
                ${isActive ? "text-teal-600 font-medium" : "hover:text-gray-700"}`
              }
            >
              {({ isActive }) => (
                <>
                  {icon}
                  {label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-teal-600"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

      </div>
    </div>
  );
}
