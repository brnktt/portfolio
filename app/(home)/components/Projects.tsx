import React from 'react';
import Title from "@/app/(home)/components/Title";
import {SiNextdotjs, SiReact, SiTailwindcss} from "react-icons/si";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {DirectionAwareHover} from "@/components/ui/direction-aware-hover";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      tech: [SiNextdotjs, SiReact, SiTailwindcss],
      link: "http://localhost:3000/",
      cover: "/project-1.png",
      background: "bg-blue-500",
    },
    {
      title: "Project 2",
      tech: [SiNextdotjs, SiReact, SiTailwindcss],
      link: "http://localhost:3000/",
      cover: "/project-2.png",
      background: "bg-green-500",
    },
    {
      title: "Project 3",
      tech: [SiNextdotjs, SiReact, SiTailwindcss],
      link: "http://localhost:3000/",
      cover: "/project-3.png",
      background: "bg-indigo-500",
    },
    {
      title: "Project 4",
      tech: [SiNextdotjs, SiReact, SiTailwindcss],
      link: "http://localhost:3000/",
      cover: "/project-4.png",
      background: "bg-cyan-500",
    },
  ];
  
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title text="Projects 💡" className="flex flex-col items-center justify-center rotate-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return <Link href={project.link} key={index}>
            <div className={cn("p-5 rounded-md", project.background)}>
              <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer ">
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-5 items-center">
                    {project.tech.map((Icon, index) => {
                      return <Icon key={index} className={"size-8"}/>
                    })}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        })}
      </div>
    </div>
  );
}

export default Projects;