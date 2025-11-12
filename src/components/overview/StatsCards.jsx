import React from "react";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full overflow-hidden">
      
      {/* ---------Card 1 */}
      <div className="rounded-lg h-28 p-4 flex flex-col justify-center text-white bg-[#08979C]">
        <p className="text-sm font-medium leading-tight">Upcoming Tutorials</p>
        <p className="text-3xl font-semibold mt-1">14</p>
      </div>

      {/* --------Card 2 */}
      <div className="rounded-lg h-28 p-4 flex flex-col justify-center text-white bg-[#6DE7F2]">
        <p className="text-sm leading-tight  overflow-hidden">
          Number of Tutorial Hours Tracked Last Month
        </p>
        <p className="text-3xl font-semibold mt-1">65</p>
      </div>

      {/*---------- Card 3 */}
      <div className="rounded-lg h-28 p-4 flex flex-col justify-center text-white bg-[#BDBDBD]">
        <p className="text-sm font-medium leading-tight">Pending Tutorial Requests</p>
        <p className="text-3xl font-semibold mt-1">6</p>
      </div>

    </div>
  );
}
