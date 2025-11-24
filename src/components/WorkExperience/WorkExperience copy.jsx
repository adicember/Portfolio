import React from "react";
import DottedLines from "./DottedLines";

function WorkExperience() {
  return (
    <div className="relative bg-white flex items-center justify-center h-screen">
      {/* Dotted Line */}
      <DottedLines />

      {/* Circle 1 - Tilted Ring */}
      <svg
        className="absolute left-52 top-1/2 -translate-y-1/2 w-32 h-32"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="100"
          cy="100"
          rx="65"
          ry="35"
          fill="none"
          stroke="#ec4899"
          strokeWidth="20"
        />
      </svg>
      {/* Circle 2 */}
      <div className="absolute right-52 -translate-y-1/2 w-32 h-32">
        {/* Marker on top */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 -top-6 w-24 h-24"
          viewBox="0 0 24 24"
          fill="#ec4899"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 
    0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
          />
        </svg>

        {/* The Oval */}
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="100"
            cy="100"
            rx="65"
            ry="35"
            fill="none"
            stroke="#ec4899"
            strokeWidth="20"
          />
        </svg>
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white rounded-lg shadow-lg border-2 border-pink-500 p-4 min-w-48">
          {/* Triangle pointer */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-pink-500"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-white"></div>

          {/* Content */}
          <div className="text-center">
            <h3 className="font-bold text-gray-800 text-lg mb-1">
              ABC Company
            </h3>
            <p className="text-gray-600 text-sm">Position: Intern</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
