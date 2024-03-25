import React from 'react';
import Title from "@/app/(home)/components/Title";
import {
  SiAmazonaws,
  SiBootstrap,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiReact,
  SiTailwindcss
} from "react-icons/si";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {DirectionAwareHover} from "@/components/ui/direction-aware-hover";

function Projects() {
  const projects = [
    {
      title: "Siemens Financial Services (SFS)",
      tech: [SiDotnet, SiMicrosoftsqlserver],
      link: "https://www.siemens.com/global/en/company/about/businesses/financial-services.html",
      cover: "/sfs.png",
      background: "bg-blue-500",
    },
    {
      title: "Groups360",
      tech: [SiDotnet, SiReact, SiTailwindcss, SiAmazonaws],
      link: "https://groups360.com/",
      cover: "/groups360.png",
      background: "bg-green-500",
    },
    {
      title: "Mooney",
      tech: [SiReact, SiDotnet, SiBootstrap],
      link: "https://www.mooney.it/",
      cover: "/mooney.png",
      background: "bg-indigo-500",
    },
    {
      title: "B-One Software",
      tech: [SiMicrosoftsqlserver, SiDotnet, SiReact],
      link: "https://www.b-onesoftware.com/",
      cover: "/b-one.png",
      background: "bg-cyan-500",
    },
  ];
  
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title text="Projects 💡" className="flex flex-col items-center justify-center rotate-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return <Link href={project.link} key={index} target="_blank">
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