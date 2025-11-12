import React, { useState } from "react";
import TutorRequestBar from "../components/overview/TutorRequestBar";
import StatsCards from "../components/overview/StatsCards";
import UpcomingList from "../components/overview/UpcomingList";
import CompletedList from "../components/overview/CompletedList";
import NoticeBoard from "../components/overview/NoticeBoard";
import CalendarWidget from "../components/overview/CalendarWidget";

export default function Overview() {
  
  const [showCalendarMobile, setShowCalendarMobile] = useState(false);

  return (
    <div className="lg:bg-[#fffffb] min-h-screen w-full overflow-x-hidden pt-2 pb-10">

      {/* ----------------------Tutor req ----------------------------- */}
      <div className="max-w-[1240px] w-full mx-auto px-4 md:px-6">

        {/* -------- Desktop ≥1280px) -------- */}
        <div className="hidden xl:block">
          <div className="grid grid-cols-[70%_30%] gap-8">
            <div className="col-span-2">
              <TutorRequestBar />
            </div>
          </div>
        </div>

        {/* ---- Mobile + Tablet + iPad Pro (≤1279px) ---- */}
        <div className="xl:hidden">
          <TutorRequestBar />
        </div>
      </div>

      {/* ------------------- PAGE CONTENT  */}
      <div className="max-w-[1240px] w-full mx-auto px-4 md:px-6">

        {/* -------- Desk Layout (≥1280px) -------- */}
        <div className="hidden xl:grid grid-cols-[70%_30%] gap-8 mt-6">

          {/* -------Left*/}
          <div className="space-y-6 min-w-0">
            <StatsCards />

            <div className="grid sm:grid-cols-2 gap-6 min-w-0">
              <UpcomingList />
              <CompletedList />
            </div>
          </div>

          {/* ---------Right */}
          <div className="space-y-6 min-w-0">
            <CalendarWidget />
            <NoticeBoard />
          </div>
        </div>

        {/* -------- Mobile + Tablet + iPad Pro Layout (≤1279px) -------- */}
        <div className="xl:hidden mt-6">
          {showCalendarMobile ? (
            <>
              <div className="space-y-6">
                <CalendarWidget />
                <NoticeBoard />
              </div>

              <button
                onClick={() => setShowCalendarMobile(false)}
                className="mt-8 w-full py-3 bg-gray-300 text-gray-700 rounded-lg font-medium"
              >
                Back to Dashboard
              </button>
            </>
          ) : (
            <>
              <StatsCards />

              <div className="space-y-6 mt-6">
                <UpcomingList />
                <CompletedList />
              </div>

              <button
                onClick={() => setShowCalendarMobile(true)}
                className="mt-8 w-full py-3 bg-[#6DE7F2] text-white rounded-lg font-medium hover:bg-teal-700 transition"
              >
                See Calendar
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
