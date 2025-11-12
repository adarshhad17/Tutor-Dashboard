import React from "react";

const items = [
  {
    title: "Rescheduled Session",
    time: "Just Now",
    text: "This session has been rescheduled to 16th August, 2020 by student.",
  },
  {
    title: "John Manor (Student)",
    time: "Aug 10, 2020",
    text: "I have an engagement on your proposed date. Could we reschedule?",
  },
  {
    title: "Admin",
    time: "Aug 10, 2020",
    text: "Tutorial commences in 30mins. Get ready.",
  },
  {
    title: "Admin",
    time: "Aug 10, 2020",
    text: "Tutorial commences in 30mins. Get ready.",
  },
];

export default function NoticeBoard() {
  return (
    <div className="bg-white border-t-[3px] border-[#6DE7F2] p-5 shadow-sm min-h-[450px] flex flex-col ">

      <h3 className="text-teal-600 font-semibold text-[15px] pb-3">
        Notice Board
      </h3>

      <div className="relative pl-6 flex-1">

        {items.map((item, i) => (
          <div key={i} className="relative pb-6">

            {/* Dot */}
            <div
              className={`absolute left-0 top-1 w-3.5 h-3.5 rounded-full border-2 ${
                i === 0 ? "bg-teal-600 border-teal-600" : "bg-white border-teal-600"
              }`}
            ></div>

            {/*  last item) */}
            {i < items.length - 1 && (
              <div className="absolute left-1.5 top-[18px] w-px h-[calc(100%-18px)] bg-teal-500"></div>
            )}

            {/* Content */}
            <div className="ml-5">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-800 text-[14px] leading-tight">
                  {item.title}
                </p>
                <span className="text-[11px] text-gray-500 whitespace-nowrap">
                  {item.time}
                </span>
              </div>

              <p className="text-[13px] text-gray-600 mt-1 leading-snug">
                {item.text}
              </p>
            </div>

          </div>
        ))}

      </div>

      <button className="text-teal-600 text-sm font-medium flex items-center gap-1 mt-auto pt-2">
        Go to notifications <span className="text-[14px]">⌄</span>
      </button>

    </div>
  );
}
