import React from "react";
import { Briefcase, MapPin, Calendar, Star } from "lucide-react";

function WorkExperience() {
  let experiences = [
    {
      id: 3,
      title: "Junior Frontend Engineer",
      company: "Galli Maps",
      startDate: "November 2024",
      endDate: "Present",
      location: "Surya Bikram Marg, Kathmandu",
    },
    {
      id: 2,
      title: "Frontend Intern",
      company: "Khatra Tech",
      startDate: "September 2024",
      endDate: "November 2024",
      location: "Shankhamul, Kathmandu",
    },
  ];

  //
  // sort dynamically → Latest job goes first
  //
  const getYear = (date) => (date === "Present" ? 9999 : parseInt(date));
  experiences = experiences.sort(
    (a, b) => getYear(b.endDate) - getYear(a.endDate)
  );

  //
  //  Mark the FIRST item as current
  //
  experiences = experiences.map((exp, i) => ({
    ...exp,
    isCurrent: i === 0,
  }));

  return (
    <section id="work">
      <div className=" bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-pink-400 mb-16 drop-shadow-[0_0_15px_rgba(255,20,147,0.7)]">
              Work Experience
            </h1>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-900 h-full"></div>

            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={exp.id} className="mb-28 relative">
                  {/* Timeline Dot-*/}
                  <div
                    className="
  absolute left-1/2 transform -translate-x-1/2 top-0 
  -mt-4 
  md:mt-0
  z-20
"
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-4 border-black flex items-center justify-center ${
                        exp.isCurrent ? "bg-pink-500" : "bg-pink-900"
                      }`}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Card Wrapper */}
                  <div
                    className={`
                    flex items-start 
                    mt-10 md:mt-0 
                    justify-center
                    ${
                      isLeft
                        ? "md:justify-start md:pr-1/2"
                        : "md:justify-end md:pl-1/2"
                    }
                  `}
                  >
                    <div
                      className={`w-full md:w-5/12 ${
                        isLeft ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      {/* CARD */}
                      <div
                        className={`
                        relative rounded-2xl p-6 backdrop-blur-sm border 
                        transition-all duration-300 hover:scale-105 
                        ${
                          exp.isCurrent
                            ? "bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 shadow-lg shadow-pink-500/50"
                            : "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
                        }
                      `}
                      >
                        {/* Only for latest job : remove if no job*/}
                        {exp.isCurrent && (
                          <div className="absolute -top-3 left-6 bg-black text-pink-500 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                            Current Role
                          </div>
                        )}

                        {/* ICONS */}
                        <div className="flex justify-between items-start mb-4">
                          <Briefcase
                            className={`w-6 h-6 ${
                              exp.isCurrent ? "text-white" : "text-pink-500"
                            }`}
                          />
                          <Star
                            className={`w-5 h-5 ${
                              exp.isCurrent ? "text-white" : "text-pink-500"
                            }`}
                          />
                        </div>

                        <h3
                          className={`text-xl font-bold mb-1 ${
                            exp.isCurrent ? "text-white" : "text-pink-400"
                          }`}
                        >
                          {exp.title}
                        </h3>

                        <p className="font-medium mb-4 text-white">
                          {exp.company}
                        </p>

                        {/* DATE */}
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar
                            className={`w-4 h-4 ${
                              exp.isCurrent ? "text-white" : "text-gray-400"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              exp.isCurrent ? "text-white" : "text-gray-400"
                            }`}
                          >
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2">
                          <MapPin
                            className={`w-4 h-4 ${
                              exp.isCurrent ? "text-white" : "text-gray-400"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              exp.isCurrent ? "text-white" : "text-gray-400"
                            }`}
                          >
                            {exp.location}
                          </span>
                        </div>

                        {/* 3 dots */}
                        <div className="absolute bottom-4 right-4 flex gap-1">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              exp.isCurrent ? "bg-white/60" : "bg-gray-600"
                            }`}
                          ></div>
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              exp.isCurrent ? "bg-white/60" : "bg-gray-600"
                            }`}
                          ></div>
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              exp.isCurrent ? "bg-white/60" : "bg-gray-600"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
