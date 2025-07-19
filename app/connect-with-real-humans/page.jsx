"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Links } from "@/components/Links";

function Page() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} bg-white dark:bg-neutral-950`}>
      <div className="flex flex-col bg-white dark:bg-neutral-950 px-4 sm:px-6 md:px-10 xl:px-[220px] pt-8 md:pt-12 pb-4">
        <div className="pb-16">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 py-4">
            {/* Left Section */}
            <div className="w-full lg:w-3/5">
              <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                Connect with Real Humans
              </h1>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-2">
                A video-enabled application enabling real-time communication
                with automated recording. Designed for seamless video sessions
                and secure cloud-based storage/playback.
              </p>

              {/* Features */}
              <div className="mt-6 space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 pb-2">
                    Key Features:
                  </h2>

                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      User Functionality:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>
                        Join LiveKit rooms for real-time video interaction.
                      </li>
                      <li>Trigger recording with dynamic room IDs.</li>
                      <li>
                        View private video recordings stored securely in S3.
                      </li>
                      <li>Play back recordings via signed URLs on click.</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Admin Functionality:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>
                        Start/stop composite room recordings programmatically.
                      </li>
                      <li>
                        Recordings are automatically stored in versioned folders
                        in S3.
                      </li>
                      <li>
                        Access controls and bucket policies enforced for
                        privacy.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      AWS S3 Integration:
                    </h3>
                    <p className="text-slate-800 dark:text-slate-200">
                      Used to store all LiveKit recordings. Videos are private
                      and accessible via signed URLs only.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Validation and Error Handling:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    Robust checks ensure egress recordings are valid and
                    correctly stored. Playback links are validated before
                    rendering.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Tech Stack:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    Next.js, LiveKit Server SDK, AWS S3, Redis (optional),
                    TypeScript
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Challenges Solved:
                  </h3>
                  <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                    <li>
                      Integrated video egress with proper file storage and error
                      recovery.
                    </li>
                    <li>
                      Implemented private S3 video access and listing system
                      with signed URLs.
                    </li>
                    <li>
                      Successfully developed a secure, real-time video system
                      with S3 recording capabilities. Enabled scalable,
                      persistent session capture with playback features for both
                      users and admins.
                    </li>
                    <li className="text-red-600 dark:text-red-400 font-bold">
                      ⚡ Implemented a Pub/Sub model for scalable video
                      architecture — avoiding peer-to-peer WebRTC and
                      third-party services completely.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Outcome:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    Successfully developed a secure, real-time video system with
                    S3 recording capabilities. Enabled scalable, persistent
                    session capture with playback features for both users and
                    admins.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Links:
                  </h3>
                  <div className="space-y-1">
                    {/* Check It Out */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                      <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold">
                        Check It Out:
                      </span>
                      <a
                        href="https://connect-with-real-humans.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline text-sm"
                      >
                        https://connect-with-real-humans.vercel.app/
                      </a>
                    </div>
                    {/* Code */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                      <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold">
                        Code:
                      </span>
                      <a
                        href="https://github.com/Debnath23/connect-with-real-humans"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline text-sm"
                      >
                        https://github.com/Debnath23/connect-with-real-humans
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-[60px] md:pt-[120px]">
              <PinContainer
                title="connect-with-real-humans.vercel.app"
                href="https://connect-with-real-humans.vercel.app/"
              >
                <div className="max-w-md flex flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[360px] md:w-[500px] h-auto">
                  <Image
                    src="/assets/p-1.png"
                    alt="Doctor Appointment Booking System"
                    width={500}
                    height={900}
                    className="rounded-lg w-full shadow-lg"
                  />
                </div>
              </PinContainer>
              <p className="text-slate-600 dark:text-slate-300 mt-10 text-center text-sm font-medium">
                Hover on it
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="sticky z-50 bottom-3">
        <Links />
      </footer>
    </div>
  );
}

export default Page;
