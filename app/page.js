import { Links } from "@/components/Links";
import { TimelineDemo } from "@/components/Timeline";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto pt-12 sm:pt-24 px-6">
      <div className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="flex justify-between gap-2">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-800">
                    Hi, I'm Debnath 👋
                  </span>
                </div>
                <div className="flex">
                  <span className="max-w-[600px] text-2xl font-semibold text-slate-800">
                    Software Engineer
                  </span>
                </div>

                <div className="pt-8">
                  <p className="text-2xl font-bold text-slate-800">About</p>
                  <p className="text-base font-semibold text-slate-600">
                    Software Engineer, love to development of web and mobile
                    applications using React.js, Next.js, React Native, Node.js,
                    Express.js and Nest.js while spearheading end-to-end
                    projects to deliver seamless and engaging user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline">
          <TimelineDemo />
        </section>

        <section id="projects">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="flex justify-between gap-2">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-800">
                    Projects
                  </span>
                </div>
                <div className="flex">
                  <span className="max-w-[600px] text-2xl font-semibold text-slate-800">
                    Some of my projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="flex justify-between gap-2">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-800">
                    Skills
                  </span>
                </div>
                <div className="flex">
                  <span className="max-w-[600px] text-2xl font-semibold text-slate-800">
                    My skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="flex justify-between gap-2">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-800">
                    Contact
                  </span>
                </div>
                <div className="flex">
                  <span className="max-w-[600px] text-2xl font-semibold text-slate-800">
                    Contact me
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="sticky bottom-5 z-50 ">
          <Links />
        </footer>
      </div>
    </div>
  );
}
