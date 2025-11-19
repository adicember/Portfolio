import React from "react";
import { Github, Linkedin, Gitlab } from "lucide-react";

function Socialmedia() {
  const size = 28;
  const color = "#ffffff";
  const hoverColor = "#a855f7";

  const icons = [
    { name: "GitHub", link: "https://github.com/your-username", icon: <Github size={size} /> },
    { name: "LinkedIn", link: "https://linkedin.com/in/your-username", icon: <Linkedin size={size} /> },
    // { name: "GitLab", link: "https://gitlab.com/your-username", icon: <Gitlab size={size} /> },
  ];

  return (
    <div className="flex gap-6">
      {icons.map(
        (item) =>
          item.link && (
            <div key={item.name} className="relative group">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300"
                style={{ color }}
                onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = color)}
              >
                {item.icon}
              </a>

              {/* Tooltip */}
              <span
                className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs rounded-md 
                bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all
                whitespace-nowrap"
              >
                {item.name}
              </span>
            </div>
          )
      )}
    </div>
  );
}

export default Socialmedia;
