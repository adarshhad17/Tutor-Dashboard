import { useMemo, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

function buildCalendar(year, month) {
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(first.getDate() - ((first.getDay() + 6) % 7)); 

  const days = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
}

export default function CalendarWidget() {
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const days = useMemo(() => buildCalendar(year, month), [year, month]);
  const monthName = cursor.toLocaleString("default", { month: "long" });

  const dots = new Set(["2025-11-07", "2025-11-12", "2025-11-19"]);

  return (
    <div className="bg-white  border border-gray-200 p-5 shadow-sm w-full overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between px-1">
        <button onClick={() => setCursor(new Date(year, month - 1, 1))}>
          <ChevronLeftIcon className="w-5 h-5 text-gray-600 hover:text-black transition" />
        </button>

        <p className="font-medium text-gray-700 text-sm">
          {monthName} <span className="text-gray-500">{year}</span>
        </p>

        <button onClick={() => setCursor(new Date(year, month + 1, 1))}>
          <ChevronRightIcon className="w-5 h-5 text-gray-600 hover:text-black transition" />
        </button>
      </div>

      {/* WEEKDAYS */}
      <div className="mt-3 grid grid-cols-7 text-center text-xs text-gray-500 tracking-wide">
        {["MO","TU","WE","TH","FR","SA","SU"].map((d) => (
          <div key={d} className="py-1">{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-y-2 text-sm mt-1 select-none">
        {days.map((d, i) => {
          const inMonth = d.getMonth() === month;
          const isToday = d.toDateString() === today.toDateString();
          const key = d.toISOString().slice(0, 10);

          return (
            <div key={i} className="py-1 text-center">
              <div
                className={`
                  relative w-8 h-8 mx-auto flex items-center justify-center rounded-full
                  cursor-pointer transition
                  ${inMonth ? "text-gray-800" : "text-gray-300"}
                  ${isToday ? "bg-[#6DE7F2] text-white font-semibold shadow-sm" : "hover:bg-teal-50"}
                `}
              >
                {d.getDate()}
                {dots.has(key) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-600 rounded-full" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
