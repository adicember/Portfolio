// import React from "react";
// import htmlImg from "../../Assets/img/html-icon.png";
// import cssimg from "../../Assets/img/css-icon.png";
// import jsimg from "../../Assets/img/javascript-programming-language-icon.png";
// import reactimg from "../../Assets/img/react-js-icon.png";
// import tailwindimg from "../../Assets/img/tailwind-css-icon.png";
// import mui from "../../Assets/img/material-ui-icon.png";
// import Github from "../../Assets/img/github-icon.png";
// import Git from "../../Assets/img/git-icon.png";
// import GitLab from "../../Assets/img/gitlab-icon.png";
// import Figma from "../../Assets/img/figma-icon.png";
// import Postman from "../../Assets/img/postman-icon.png";
// import Jest from "../../Assets/img/jest-js-icon.png";
// import Storybook from "../../Assets/img/storybook-icon.png";
// import Zustand from "../../Assets/img/zustand-original-512px.png";

// function SkillsSection() {
//   const devSkills = [
//     { name: "HTML", img: htmlImg },
//     { name: "CSS", img: cssimg },
//     { name: "Javascript", img: jsimg },
//     { name: "React JS", img: reactimg },
//     { name: "Tailwind CSS", img: tailwindimg },
//     { name: "Material UI", img: mui },
//   ];

//   const toolSkills = [
//     { name: "Git", img: Git },
//     { name: "Github", img: Github },
//     { name: "Gitlab", img: GitLab },
//     { name: "Figma", img: Figma },
//     { name: "Postman", img: Postman },
//     { name: "Jest", img: Jest },
//     { name: "Storybook", img: Storybook },
//     { name: "Zustand", img: Zustand },
//   ];

//   return (
//     <section
//       id="skills"
//       className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-16 mb-0"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-6">
//         Skills
//       </h2>

//       <p className="text-gray-300 text-center max-w-2xl mb-12">
//         I am a frontend developer skilled in modern web technologies.
//       </p>

//       {/* SCROLLING ROWS */}
//       <div className="flex flex-col w-full max-w-6xl gap-10">
//         {/* ==== ROW 1 - Left → Right ==== */}
//         <div className="relative overflow-hidden">
//           <div className="flex gap-6 animate-scroll-left whitespace-nowrap">
//             {[...devSkills, ...devSkills].map((skill, index) => (
//               <div
//                 key={index}
//                 className="bg-neutral-900 min-w-[140px] shadow-md rounded-xl px-6 py-5 flex flex-col items-center gap-2"
//               >
//                 <img src={skill.img} alt={skill.name} className="w-12 h-12" />
//                 <p className="text-white text-sm">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ==== ROW 2 - Right → Left ==== */}
//         <div className="relative overflow-hidden">
//           <div className="flex gap-6 animate-scroll-right whitespace-nowrap">
//             {[...toolSkills, ...toolSkills].map((skill, index) => (
//               <div
//                 key={index}
//                 className="bg-neutral-900 min-w-[140px] shadow-md rounded-xl px-6 py-5 flex flex-col items-center gap-2"
//               >
//                 <img src={skill.img} alt={skill.name} className="w-12 h-12" />
//                 <p className="text-white text-sm">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SkillsSection;

import React from "react";
import htmlImg from "../../Assets/img/html-icon.png";
import cssimg from "../../Assets/img/css-icon.png";
import jsimg from "../../Assets/img/javascript-programming-language-icon.png";
import reactimg from "../../Assets/img/react-js-icon.png";
import tailwindimg from "../../Assets/img/tailwind-css-icon.png";
import mui from "../../Assets/img/material-ui-icon.png";
import Github from "../../Assets/img/github-icon.png";
import Git from "../../Assets/img/git-icon.png";
import GitLab from "../../Assets/img/gitlab-icon.png";
import Figma from "../../Assets/img/figma-icon.png";
import Postman from "../../Assets/img/postman-icon.png";
import Jest from "../../Assets/img/jest-js-icon.png";
import Storybook from "../../Assets/img/storybook-icon.png";
import Zustand from "../../Assets/img/zustand-original-512px.png";

function SkillsSection() {
  const allSkills = [
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssimg },
    { name: "Javascript", img: jsimg },
    { name: "React JS", img: reactimg },
    { name: "Tailwind CSS", img: tailwindimg },
    { name: "Material UI", img: mui },
    { name: "Git", img: Git },
    { name: "Github", img: Github },
    { name: "Gitlab", img: GitLab },
    { name: "Figma", img: Figma },
    { name: "Postman", img: Postman },
    { name: "Jest", img: Jest },
    { name: "Storybook", img: Storybook },
    { name: "Zustand", img: Zustand },
  ];

  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center px-6 py-28 bg-black "
    >
      <h1 className="text-4xl font-bold text-pink-400 mb-16 drop-shadow-[0_0_15px_rgba(255,20,147,0.7)]">
        Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {allSkills.map((skill, index) => (
          <div
            className="
    flex items-center gap-3
    px-5 py-3
    rounded-full
  bg-white/10 backdrop-blur-md 
    border border-pink-500/40
    shadow-[0_0_20px_rgba(255,20,147,0.25)]
    hover:shadow-[0_0_35px_rgba(255,20,147,0.45)]
    transition-all duration-200 hover:scale-105

  "
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
            />
            <p className="text-white text-sm md:text-base">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
