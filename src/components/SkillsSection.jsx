import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML",category: "frontend/backend", img: "public/skills/htmll.webp" },
  { name: "JavaScript", category: "frontend/backend", img: "public/skills/js.webp" },
  { name: "SQL", category: "frontend/backend", img: "public/skills/sql.webp" },
  { name: "Python", category: "programming languages", img: "public/skills/python.webp" },
  { name: "C programming", category: "programming languages", img: "public/skills/C.webp" },
  { name: "React", category: "frameworks", img: "public/skills/react.webp" },
  { name: "MongoDB", category: "frontend/backend", img: "public/skills/mongodb.webp" },
  { name: "Django", category: "frameworks", img: "public/skills/django.webp" },
  { name: "Node.js", category: "frontend/backend", img: "public/skills/nodejs.webp" },
  { name: "Frappe", category: "frameworks", img: "public/skills/frappe.webp" },
  { name: "Git/GitHub", category: "tools", img: "public/skills/git.webp" },
  { name: "Docker", category: "tools", img: "public/skills/docker.webp" },
  { name: "VS Code", category: "tools", img:"public/skills/vscode.webp" },
  { name: "Airtable", category: "tools", img: "public/skills/airtable.webp"},
  { name: "Power BI", category: "tools", img: "public/skills/power-bi-icon.webp"},
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