"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

function page() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-start">
          <span className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-5xl xl:text-6xl">
            Projects
          </span>
        </div>

        <div className="py-8">
          <span className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-3xl">
            Frontend Development
          </span>

          <div className="flex flex-col md:flex-row justify-between py-4 space-y-6 md:space-y-0">
            <div className="w-full md:w-3/5">
              <div className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                Doctor Appointment Booking System
              </div>
              <div className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-2">
                A full-stack application designed to simplify the process of
                scheduling and managing doctor appointments, ensuring seamless
                communication between users and healthcare providers.
              </div>

              <div className="mt-4 space-y-4">
                <p className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Key Features:
                </p>

                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    User Functionality:
                  </p>
                  <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                    <li>Secure registration and login for users.</li>
                    <li>
                      Browse and filter doctors by categories and availability.
                    </li>
                    <li>Book appointments for future dates and time slots.</li>
                    <li>
                      Cancel appointments with real-time updates sent to
                      doctors.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Doctor Functionality:
                  </p>
                  <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                    <li>View and manage appointment schedules.</li>
                    <li>
                      Update availability or cancel appointments when necessary.
                    </li>
                    <li>
                      Receive notifications for new bookings, cancellations, or
                      changes.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Admin Module:
                  </p>
                  <p className="text-slate-800 dark:text-slate-200">
                    Manage doctor profiles, specializations, and appointment
                    categories.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Validation and Error Handling:
                  </p>
                  <p className="text-slate-800 dark:text-slate-200">
                    Appointment booking restricted to future dates and
                    non-overlapping time slots.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Tech Stack:
                  </p>
                  <p className="text-slate-800 dark:text-slate-200">
                    React, NestJS, MongoDB, Prisma ORM, Cloudinary
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Challenges Solved:
                  </p>
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
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Outcome:
                  </p>
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

            {/* <div className="w-full md:w-2/5 flex justify-center"> */}
            <PinContainer title="/doctor-appointment-booking" href="/">
              <div className=" max-w-md flex flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[500px] h-full">
                <Image
                  src="/assets/desktop.jpg"
                  alt="Doctor Appointment Booking System"
                  width={500}
                  height={900}
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </PinContainer>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
