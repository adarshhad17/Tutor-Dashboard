import React from "react";

export default function Home() {
  return (
    <main className="bg-[#EAF9FA] min-h-screen w-full overflow-x-hidden flex flex-col">

      <section className="flex flex-1 items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-[700px] w-full">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Manage Your Tutoring Sessions <br /> Smarter & Faster
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Stay organized with upcoming sessions, calendar management, student
            notifications and lesson resources — all in one simple dashboard.
          </p>

        </div>
      </section>

    </main>
  );
}
