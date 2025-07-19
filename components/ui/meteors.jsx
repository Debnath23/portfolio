"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Meteors = ({ number = 20, className }) => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const newStyles = Array.from({ length: number }).map(() => ({
      left: `${Math.floor(Math.random() * 800 - 400)}px`,
      animationDelay: `${Math.random() * 0.6 + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
    }));
    setStyles(newStyles);
  }, [number]);

  return (
    <>
      {styles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-blue-800 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#3b82f6] before:to-transparent",
            className
          )}
          style={{ top: 0, ...style }}
        />
      ))}
    </>
  );
};
