import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="bg-[#f2f2eb] min-h-screen w-full overflow-x-hidden flex flex-col">

      {/* Center Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-[700px] w-full px-4 sm:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Manage Your Tutoring Sessions <br /> Smarter & Faster
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Stay organized with upcoming sessions, calendar management, student 
            notifications and lesson resources — all in one simple dashboard.
          </p>

        </div>
      </div>

    </div>
  );
}
