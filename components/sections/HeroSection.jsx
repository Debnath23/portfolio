import React from "react";
import { Meteors } from "../ui/meteors";

function HeroSection() {
  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-col flex flex-1 space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-slate-800 dark:text-slate-200">
            Hi, I'm Debnath 👋
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200">
            Software Engineer
          </p>
          <div className="pt-2 space-y-2">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              About
            </h2>
            <p className="text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
              Software Engineer, love to develop web and mobile applications
              using React.js, Next.js, React Native, Node.js, Express.js, and
              Nest.js while spearheading end-to-end projects to deliver seamless
              and engaging user experiences.
            </p>
          </div>
        </div>
      </div>
      <Meteors number={20} className="max-md:hidden" />
    </div>
  );
}

export default HeroSection;
