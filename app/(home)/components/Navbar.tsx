import React from 'react';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";
import {IconType} from "react-icons";

interface Social {
  link: string;
  label: string;
  Icon: IconType;
}

function Navbar() {
  const socials: Social[] = [
    {
      link: "https://www.linkedin.com/in/alessandrobranchetti/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/brnktt",
      label: "GitHub",
      Icon: SiGithub,
    },
  ];
  
  return (
    <nav className="py-10 flex justify-between items-center">
      <h2 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Alessandro Branchetti 👨🏻‍💻</h2>
      <div className="flex items-center gap-5">
        {socials.map((social: Social, index: number) => {
          const Icon: IconType = social.Icon;
          
          return <Link href={social.link} key={index} aria-label={social.label}>
            <Icon className="size-5 hover:scale-125 transition-all" />
          </Link>
        })}
      </div>
    </nav>
  );
}

export default Navbar;