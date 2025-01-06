"use client"
import React from "react";
import { Links } from "@/components/Links";
import { TimelineDemo } from "@/components/Timeline";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {

  const { theme } = useTheme();

  return (
    <div className={`${theme} bg-white dark:bg-neutral-950`}>
      <div className="flex flex-col">
        <section id="hero" className="bg-white dark:bg-neutral-950 px-[220px] pt-24">
          <div className="mx-auto w-full">
            <div className="flex justify-between gap-2">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-800 dark:text-slate-200">
                    Hi, I'm Debnath 👋
                  </span>
                </div>
                <div className="flex">
                  <span className="max-w-[600px] text-2xl font-semibold text-slate-800 dark:text-slate-200">
                    Software Engineer
                  </span>
                </div>

                <div className="pt-8">
                  <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    About
                  </p>
                  <p className="text-base font-semibold text-slate-600 dark:text-slate-400">
                    Software Engineer, love to develop web and mobile
                    applications using React.js, Next.js, React Native, Node.js,
                    Express.js, and Nest.js while spearheading end-to-end
                    projects to deliver seamless and engaging user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className="bg-white dark:bg-neutral-950 px-[220px] py-16">
          <TimelineDemo />
        </section>

        <section id="projects" className="bg-white dark:bg-neutral-950 px-[220px]">
          <div className="">
            <div className="flex justify-between gap-2">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-800 dark:text-slate-200">
                    Projects
                  </span>
                </div>
                <div className="flex">
                  <span className="max-w-[600px] text-2xl font-semibold text-slate-800 dark:text-slate-200">
                    Some of my projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-white dark:bg-neutral-950 px-[220px]">
          <div className="">
            <div className="flex justify-between gap-2">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-800 dark:text-slate-200">
                    Skills
                  </span>
                </div>
                <div className="flex">
                  <span className="max-w-[600px] text-2xl font-semibold text-slate-800 dark:text-slate-200">
                    My skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white dark:bg-neutral-950 px-[220px]">
          <div className="">
            <div className="flex justify-between gap-2">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-800 dark:text-slate-200">
                    Contact
                  </span>
                </div>
                <div className="flex">
                  <span className="max-w-[600px] text-2xl font-semibold text-slate-800 dark:text-slate-200">
                    Contact me
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="sticky z-50 bottom-3">
          <Links />
        </footer>
      </div>
    </div>
  );
}
