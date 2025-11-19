import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML",category: "frontend/backend", img: "@/public/skills/html1.png" },
  { name: "JavaScript", category: "frontend/backend", img: "public/skills/js1.png" },
  { name: "SQL", category: "frontend/backend", img: "public/skills/sql1.png" },
  { name: "Python", category: "programming languages", img: "public/skills/python1.png" },
  { name: "C programming", category: "programming languages", img: "public/skills/c1.png" },
  { name: "React", category: "frameworks", img: "public/skills/react1.png" },
  { name: "MongoDB", category: "frontend/backend", img: "public/skills/mongodb1.png" },
  { name: "Django", category: "frameworks", img: "public/skills/django1.png" },
  { name: "Node.js", category: "frontend/backend", img: "public/skills/nodejs1.png" },
  { name: "Frappe", category: "frameworks", img: "public/skills/frappe1.png" },
  { name: "Git/GitHub", category: "tools", img: "public/skills/git1.png" },
  { name: "Docker", category: "tools", img: "public/skills/docker1.png" },
  { name: "VS Code", category: "tools", img:"public/skills/vscode1.png" },
  { name: "Airtable", category: "tools", img: "public/skills/airtable1.png"},
  { name: "Power BI", category: "tools", img: "public/skills/power-bi-icon1.png"},
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
      <div className="text-5xl text-primary">
        {/* We assume skill.icon is a component, e.g., SiReact */}
        <img
                  src={skill.img}
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