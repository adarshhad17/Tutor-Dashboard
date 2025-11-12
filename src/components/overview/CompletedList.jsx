import React from "react";
import Tutor1 from "../../assets/dq.jpg";
import Tutor2 from "../../assets/mrunal.webp";
import { HiLocationMarker } from "react-icons/hi";  
import { FaCheckCircle } from "react-icons/fa";     

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

      {/* ------------ Mob------------------------------ */}
      <ul className="flex-1 space-y-8 min-w-0 md:hidden">
        {rows.slice(0,3).map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </ul>

      {/* ---------- Desk--------------------------- */}
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
          <FaCheckCircle className="w-4 h-4 text-teal-600" />
        </span>

        <div className="min-w-0">
          <p className="text-gray-500 font-medium text-[12px] truncate">
            {item.title}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[9px] text-gray-600 mt-1 font-bold">
            <span>{item.sub}</span>

            <span className="flex items-center gap-1">
              <HiLocationMarker className="w-3.5 h-3.5 text-teal-600" />
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
