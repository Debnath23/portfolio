import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGoogleDrive,
  IconBrandLinkedin,
  IconBrightnessDown,
  IconHome,
  IconMoonStars,
} from "@tabler/icons-react";
import { useTheme } from "@/context/ThemeContext";

export function Links() {
  const { theme, toggleTheme } = useTheme();

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Resume",
      icon: (
        <IconBrandGoogleDrive className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1X00NswoU9utm9D0SYwwj58n_7UGT0mNP/view?usp=drive_link",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Debnath23",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/debnath-mahapatra/",
    },
    {
      title: "Theme",
      icon:
        theme === "dark" ? (
          <IconBrightnessDown
            onClick={toggleTheme}
            className="h-full w-full text-neutral-500 dark:text-neutral-300"
          />
        ) : (
          <IconMoonStars
            onClick={toggleTheme}
            className="h-full w-full text-neutral-500 dark:text-neutral-300"
          />
        ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock mobileClassName="absolute bottom-2 z-20" items={links} />
    </div>
  );
}
