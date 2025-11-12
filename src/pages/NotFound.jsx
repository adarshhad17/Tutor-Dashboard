import React from "react";
import { Link } from "react-router-dom";
import { ExclamationTriangleIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col justify-center items-center text-center px-6 bg-white">

      <section aria-label="404 Error" className="flex flex-col items-center">
        
        <div className="animate-bounce mb-4">
          <ExclamationTriangleIcon 
            className="w-16 h-16 text-red-600" 
            aria-hidden="true" 
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 tracking-wide">
          404
        </h1>

        <p className="text-gray-600 text-xl md:text-2xl mt-3 font-medium">
          Page Not Found
        </p>

        <p className="text-gray-500 mt-2 max-w-md leading-relaxed">
          The page you are trying to access doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 transition flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeftIcon className="w-5 h-5" aria-hidden="true" />
          Back to Dashboard
        </Link>

      </section>

    </main>
  );
}
