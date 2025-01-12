import React from "react";
import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTypescript,
  IconBrandVscode,
} from "@tabler/icons-react";
import Image from "next/image";

function SkillsSection() {
  return (
    <div className="">
      <div className="text-start pb-4">
        <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-slate-800 dark:text-slate-200">
          Skills
        </span>
      </div>
      <div className="flex">
      <div>
        {/* Frontend Development */}
        <div className="text-lg sm:text-3xl font-bold tracking-tighter text-slate-800 dark:text-slate-200 py-2">
          Frontend Development
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-6 pb-2 sm:pb-4">
          {[
            { Icon: IconBrandHtml5, label: "HTML" },
            { Icon: IconBrandCss3, label: "CSS" },
            { Icon: IconBrandJavascript, label: "Javascript" },
            { Icon: IconBrandTypescript, label: "Typescript" },
            { Icon: IconBrandReact, label: "React.js" },
            { Icon: IconBrandNextjs, label: "Next.js" },
            { Icon: IconBrandReactNative, label: "React-Native" },
          ].map(({ Icon, label }) => (
            <div className="flex flex-col items-center" key={label}>
              <Icon className="h-6 w-6 sm:h-10 sm:w-10 text-neutral-500 dark:text-neutral-300" />
              <p className="text-[10px] sm:text-base font-bold tracking-tighter text-slate-800 dark:text-slate-200 pt-[2px] sm:pt-2">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Backend Development */}
        <div className="text-lg sm:text-3xl font-bold tracking-tighter text-slate-800 dark:text-slate-200 py-2">
          Backend Development
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-6 pb-2 sm:pb-4">
          {[
            { Icon: IconBrandNodejs, label: "Node.js" },
            { Icon: IconBrandMongodb, label: "MongoDB" },
            { Icon: IconBrandMysql, label: "MySQL" },
            { Icon: IconBrandPrisma, label: "Prisma ORM" },
          ].map(({ Icon, label }) => (
            <div className="flex flex-col items-center" key={label}>
              <Icon className="h-6 w-6 sm:h-10 sm:w-10 text-neutral-500 dark:text-neutral-300" />
              <p className="text-[10px] sm:text-base font-bold tracking-tighter text-slate-800 dark:text-slate-200 pt-2">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Other Tools */}
        <div className="text-lg sm:text-3xl font-bold tracking-tighter text-slate-800 dark:text-slate-200 py-2">
          Other Tools
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-6 pb-2 sm:pb-4">
          {[
            { Icon: IconBrandVscode, label: "VS Code" },
            { Icon: IconBrandGit, label: "Git" },
          ].map(({ Icon, label }) => (
            <div className="flex flex-col items-center" key={label}>
              <Icon className="h-6 w-6 sm:h-10 sm:w-10 text-neutral-500 dark:text-neutral-300" />
              <p className="text-[10px] sm:text-base font-bold tracking-tighter text-slate-800 dark:text-slate-200 pt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
        
      </div>
      <div className="w-auto h-auto max-md:hidden">
          <Image
            src="/assets/thinking.png"
            width={500}
            height={500}
            alt="img"
          />
        </div>
    </div>
    </div>
  );
}

export default SkillsSection;
