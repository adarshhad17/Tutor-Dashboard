import React from "react";
import Tutor1 from "../../assets/dq.jpg";
import Tutor2 from "../../assets/mrunal.webp";

const rows = [
  { title: "Sheila Moore, Mackle Moore", sub: "FRIDAY, MAY 18", mode: "Online", tutors: [Tutor1, Tutor2] },
  { title: "John F Kennedy. | Grade 3 Maths", sub: "FRIDAY, MAY 18", mode: "In-house", tutors: [Tutor2, Tutor1] },
  { title: "John F Kennedy. | Grade 3 Maths", sub: "FRIDAY, MAY 18", mode: "Online", tutors: [Tutor1, Tutor2] },
  { title: "John F Kennedy. | Grade 3 Maths", sub: "FRIDAY, MAY 18", mode: "Online", tutors: [Tutor1, Tutor2] },
  { title: "John F Kennedy. | Grade 3 Maths", sub: "FRIDAY, MAY 18", mode: "Online", tutors: [Tutor2, Tutor1] },
  { title: "John F Kennedy. | Grade 3 Maths", sub: "FRIDAY, MAY 18", mode: "Online", tutors: [Tutor1, Tutor2] },
];

export default function CompletedList() {
  return (
    <div className="bg-white rounded-xl border border-teal-100 p-5 shadow-sm lg:min-h-[720px] flex flex-col">

      <h3 className="text-teal-600 font-semibold mb-4 text-[15px]">
        Completed
      </h3>

      {/* ------------ MOBILE (Only 3 items------------ */}
      <ul className="flex-1 space-y-8 min-w-0 md:hidden">
        {rows.slice(0,3).map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </ul>

      {/* ---------- DESKTOP (All items)---------- */}
      <ul className="flex-1 space-y-8 min-w-0 hidden md:block">
        {rows.map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </ul>

    </div>
  );
}

function ListItem({ item }) {
  return (
    <li className="flex items-center justify-between gap-4 min-w-0">

      {/* --------LEFT----------- */}
      <div className="flex items-start gap-3 min-w-0 flex-1">
        <span className="shrink-0 mt-1">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="12" fill="#0CA6A6"/>
            <path d="M10.2 13.8L8.1 11.7L6.7 13.1L10.2 16.6L17.3 9.5L15.9 8.1L10.2 13.8Z" fill="white"/>
          </svg>
        </span>

        <div className="min-w-0">
          <p className="text-gray-500 font-medium text-[12px] truncate">
            {item.title}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[9px] text-gray-600 mt-1 font-bold">
            <span>{item.sub}</span>

            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              {item.mode}
            </span>
          </div>
        </div>
      </div>

      
      <div className="flex -space-x-2 shrink-0">
        {item.tutors.map((imgSrc, j) => (
          <img key={j} src={imgSrc} alt="Student avatar" className="w-8 h-8 rounded-full border object-cover" />
        ))}
      </div>

    </li>
  );
}
