import React from 'react';
import Link from "next/link";
import {MovingBorderBtn} from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-0 items-center justify-between min-h-[60vh]">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">Nice to meet you! 👋🏻<br/> <span className="underline underline-offset-8 decoration-green-500">{"I'm Alessandro."}</span></h1>
        <p className="md:w-96 text-lg text-gray-300">
          {"Based in Poland. I'm a Fullstack developer passionate about building a modern web applications that users love."}
        </p>
        <Link href={"mailto:brk.alessandro@gmail.com"} className="inline-block group">
          <h2 className="text-3xl font-bold group-hover:text-green-500 transition-all">Contact Me 📬</h2>
          <div className="w-40 h-2 bg-green-500 rounded-full"></div>
          <div className="w-40 h-2 bg-blue-500 rounded-full translate-x-2"></div>
        </Link>
      </div>
      
      <div className="relative">
        <div className="size-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="size-32 rounded-2xl bg-green-500"></div>
            <div className="size-32 rounded-full bg-blue-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="size-32 rounded-2xl bg-blue-500"></div>
            <div className="size-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-[50%] -z-10"></div>
        </div>
        <div className="absolute bottom-14 -left-4">
          <MovingBorderBtn borderRadius="0.5rem" className="p-2 font-semibold">
            <p>💼 Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;