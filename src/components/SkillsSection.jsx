import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML",category: "frontend/backend", image: "/skill/html1.png" },
  { name: "JavaScript", category: "frontend/backend", image: "/skill/js1.png" },
  { name: "SQL", category: "frontend/backend", image: "/skill/sql1.png" },
  { name: "Python", category: "programming languages", image: "/skill/python1.png" },
  { name: "C programming", category: "programming languages", image: "/skill/c1.png" },
  { name: "React", category: "frameworks", image: "/skill/react1.png" },
  { name: "MongoDB", category: "frontend/backend", image: "/skill/mongodb1.png" },
  { name: "Django", category: "frameworks", image: "/skill/django1.png" },
  { name: "Node.js", category: "frontend/backend", image: "/skill/nodejs1.png" },
  { name: "Frappe", category: "frameworks", image: "/skill/frappe1.png" },
  { name: "Git/GitHub", category: "tools", image: "/skill/git1.png" },
  { name: "Docker", category: "tools", image: "/skill/docker1.png" },
  { name: "VS Code", category: "tools", image:"/skill/vscode1.png" },
  { name: "Airtable", category: "tools", image: "/skill/airtable.webp"},
  { name: "Power BI", category: "tools", image: "/skill/power-bi-icon1.png"},
];

const categories = ["all", "programming languages", "frontend/backend", "frameworks", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredSkills.map((skill, key) => (
    <div
      key={key}
      className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center gap-4"
    >
      {/* 1. Skill Icon (Large and centered) */}
      <div>
        {/* We assume skill.icon is a component, e.g., SiReact */}
        <img
                  src={skill.image}
                  alt={skill.name}
        />
      </div>

      {/* 2. Skill Name (Centered underneath) */}
      <h3 className="font-semibold text-lg text-center">
        {skill.name}
      </h3>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};