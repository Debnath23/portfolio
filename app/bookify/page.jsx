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
        <div className="pb-12">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-10 py-4">
            {/* Left Section */}
            <div className="w-full md:w-3/5">
              <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                Doctor Appointment Booking System
              </h1>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-2">
                A full-stack application designed to simplify the process of
                scheduling and managing doctor appointments, ensuring seamless
                communication between users and healthcare providers.
              </p>

              {/* Features */}
              <div className="mt-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Key Features:
                  </h2>

                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      User Functionality:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>Secure registration and login for users.</li>
                      <li>
                        Browse and filter doctors by categories and
                        availability.
                      </li>
                      <li>
                        Book appointments for future dates and time slots.
                      </li>
                      <li>
                        Cancel appointments with real-time updates sent to
                        doctors.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Doctor Functionality:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>View and manage appointment schedules.</li>
                      <li>
                        Update availability or cancel appointments when
                        necessary.
                      </li>
                      <li>
                        Receive notifications for new bookings, cancellations,
                        or changes.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Admin Module:
                    </h3>
                    <p className="text-slate-800 dark:text-slate-200">
                      Manage doctor profiles, specializations, and appointment
                      categories.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Validation and Error Handling:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    Appointment booking restricted to future dates and
                    non-overlapping time slots.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Tech Stack:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    React, NestJS, MongoDB, Prisma ORM, Cloudinary
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Challenges Solved:
                  </h3>
                  <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                    <li>
                      Developed robust date and time validation to ensure only
                      valid appointments are booked.
                    </li>
                    <li>
                      Designed a scalable system capable of handling multiple
                      concurrent bookings efficiently.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Links:
                  </h3>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="text-slate-800 dark:text-slate-200">
                        Check It Out:
                      </span>
                      <a
                        href="/"
                        target="_blank"
                        className="text-blue-700 underline"
                      >
                        https://bookify.com
                      </a>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-800 dark:text-slate-200">
                        Swagger APIs:
                      </span>
                      <a
                        href="https://doctor-appointment-booking-backend-165h.onrender.com/swagger#/"
                        target="_blank"
                        className="text-blue-700 underline"
                      >
                        https://bookify.com/swagger#/
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Outcome:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    Successfully built a reliable, user-friendly, and scalable
                    solution that enhanced appointment scheduling and
                    management. The application streamlined interactions between
                    users and doctors, reducing scheduling conflicts and
                    improving user satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-[120px] max-md:hidden">
              <PinContainer title="/bookify" href="/">
                <div className="max-w-md flex flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[500px] h-auto">
                  <Image
                    src="/assets/p-1.png"
                    alt="Doctor Appointment Booking System"
                    width={500}
                    height={900}
                    className="rounded-lg w-full shadow-lg"
                  />
                </div>
              </PinContainer>
              <p className="text-slate-800 dark:text-slate-200 mt-10 text-center text-sm font-medium">
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
