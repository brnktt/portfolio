"use client";

import React from 'react';
import Title from "@/app/(home)/components/Title";
import {HoverEffect} from "@/components/ui/card-hover-effect";
import {
  SiGit,
  SiJavascript, SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "PostgreSQL",
      Icon: SiPostgresql,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
  ];
  
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title text="Skills ⚙️" className="flex flex-col items-center justify-center -rotate-6"/>
      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;