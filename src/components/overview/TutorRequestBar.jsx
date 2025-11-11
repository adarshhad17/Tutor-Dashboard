import { XMarkIcon, CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import React from "react";
import { BsPinAngle } from "react-icons/bs";
import TutorImg from "../../assets/tutor.jpg";

export default function TutorRequestBar() {
  const [visible, setVisible] = useState(false);

  // ✅ Current Date
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });




  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative bg-[#EAF9FA] border border-teal-50 py-6 px-5 mt-8">

        {/* Close Button */}
        <XMarkIcon
          className="w-7 h-7 absolute right-2 top-0 cursor-pointer text-gray-700 hover:text-black transition font-black"
          onClick={() => setVisible(false)}
        />

        <div className="max-w-[1240px] mx-auto px-6 flex flex-wrap items-center justify-between gap-y-4 ">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4 min-w-[250px]">
            <img
              src={TutorImg}
              alt="Tutor Profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="leading-tight">
              <p className="text-teal-600 font-semibold text-[14px]">Tutor Request</p>

              <div className="text-gray-500 text-[12px] font-semibold flex flex-wrap gap-x-6 gap-y-1 mt-2">
                <span>Client: Sheila Pratt</span>
                <span>Date: {formattedDate}</span>
                <span>Time: 8:00AM - 10:00AM</span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center flex-wrap gap-6 text-sm whitespace-nowrap pr-8">
            <button className="flex flex-col items-center gap-1 text-teal-600 hover:font-semibold transition">
              <CheckIcon className="w-6 h-6" />
              Accept
            </button>

            <button className="flex flex-col items-center gap-1 text-red-500 hover:font-semibold transition">
              <XMarkIcon className="w-6 h-6" />
              Decline
            </button>

            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-teal-700 transition">
              <ClockIcon className="w-6 h-6" />
              Propose new time
            </button>

            <button className="flex flex-col items-center gap-1 text-teal-600 hover:text-teal-700 transition font-medium">
              <BsPinAngle className="w-6 h-6" />
              Mark as tentative
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE POPUP ================= */}
      <div className="md:hidden fixed top-[90px] left-1/2 -translate-x-1/2 w-[95%] bg-white shadow-lg rounded-lg p-6 z-50">
        <div className="flex justify-end">
          <XMarkIcon
            className="w-6 h-6 text-gray-800 cursor-pointer"
            onClick={() => setVisible(false)}
          />
        </div>

        <div className="flex items-center gap-4">
          <img
            src={TutorImg}
            alt="Tutor Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="space-y-2">
            <p className="text-teal-600 font-bold text-lg">New Tutor Request</p>
            <p className="text-gray-600 text-base font-medium">Client: Sheila Pratt</p>
            <p className="text-gray-600 text-base font-medium">Date: {formattedDate}</p>
            <p className="text-gray-600 text-base font-medium">Time: 8:00AM - 10:00AM</p>
          </div>
        </div>

        <div className="flex justify-around mt-6 text-center text-sm">
          <button className="flex flex-col items-center text-teal-600 font-medium">
            <CheckIcon className="w-6 h-6" />
            Accept
          </button>

          <button className="flex flex-col items-center text-red-500 font-medium">
            <XMarkIcon className="w-6 h-6" />
            Decline
          </button>

          <button className="flex flex-col items-center text-gray-700 font-medium">
            <ClockIcon className="w-6 h-6" />
            Reschedule
          </button>
        </div>
      </div>
    </>
  );
}
