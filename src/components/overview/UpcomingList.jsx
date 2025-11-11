import React from "react";
import Avatar1 from "../../assets/dq.jpg";
import Avatar2 from "../../assets/arya.jpg";
import Avatar3 from "../../assets/mt.jpg";

const data = [
  { 
    name: "Sheila Moore, Mackle Moore", 
    tag: "TODAY", 
    date: "FRIDAY, MAY 18", 
    mode: "Online", 
    avatars: [Avatar1, Avatar2, ] 
  },
  { 
    name: "John F Kennedy. | Grade 3 Maths", 
    tag: "TODAY", 
    date: "FRIDAY, MAY 18", 
    mode: "In-house", 
    avatars: [Avatar2] 
  },
  { 
    name: "John F Kennedy. | Grade 3 Maths", 
    tag: "IN 2 DAYS", 
    date: "FRIDAY, MAY 18", 
    mode: "Online", 
    avatars: [Avatar3] 
  },
];

export default function UpcomingList() {
  return (
    <div className="bg-white rounded-xl border border-teal-100 p-3 md:p-5 shadow-sm w-full lg:min-h-[720px] flex flex-col">
      
      <h3 className="text-teal-600 font-semibold mb-4 text-[15px]">
        Upcoming sessions this week
      </h3>

      <ol className="flex-1 space-y-4 min-w-0">
        {data.map((item, index) => (
          <li key={index} className="flex items-center justify-between py-2 min-w-0">
            
            {/* LEFT */}
            <div className="flex items-start gap-3 min-w-0">
              <span className="text-gray-500 text-sm w-5 shrink-0">{index + 1}.</span>

              <div className="min-w-0">
                <p className="text-gray-500 font-medium text-[14px] truncate">
                  {item.name}
                </p>

                <div className="flex items-center flex-wrap gap-3 text-[11px] text-gray-600 mt-1">
                  <span className="bg-teal-600 text-white px-2 py-px rounded-sm text-[9px] whitespace-nowrap">
                    {item.tag}
                  </span>

                  <span className="text-[8px] text-gray-600 whitespace-nowrap font-medium">
                    {item.date}
                  </span>

                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <svg className="w-3.5 h-3.5 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
                    </svg>
                    {item.mode}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT (Avatars + Menu) */}
            <div className="flex items-center gap-2 shrink-0">
              
              <div className="flex -space-x-2">
                {item.avatars.map((imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    alt="Student avatar"
                    className="w-8 h-8 rounded-full border object-cover"
                  />
                ))}
              </div>

              <button className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500 text-lg leading-none">⋯</span>
              </button>

            </div>

          </li>
        ))}
      </ol>
    </div>
  );
}
