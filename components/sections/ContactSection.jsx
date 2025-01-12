import Image from "next/image";
import React from "react";

function ContactSection() {
  return (
    <div className="md:pb-16 flex flex-col justify-center items-center">
      <div className="w-[60px] h-[60px] md:w-auto md:h-auto pb-4">
        <Image src="/assets/contact.png" width={150} height={150} alt="img" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-200 text-center pb-6">
          Get In Touch
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 text-center w-[240px] md:w-[520px]">
          Want to chat? Just shoot me a dm with a{" "}
          <a
            href="https://www.linkedin.com/in/debnath-mahapatra/"
            target="_blank"
          >
            <span className="text-blue-700 cursor-pointer">
              direct question on linkedin
            </span>
          </a>{" "}
          and I'll respond whenever I can.
        </p>
      </div>
    </div>
  );
}

export default ContactSection;
