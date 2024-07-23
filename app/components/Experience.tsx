"use client";

import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
import { MdWorkspacePremium } from "react-icons/md";

const Experience = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Check the initial theme
  // setIsDarkMode(
  //   window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme:dark)").matches
  // );
  //   }, []);

  return (
    <div className="min-h-max h-full  pb-[30px] md:pt-[40px] ">
      <h1 className="text-center py-[30px] font-semibold tracking-wide">
        WHAT I DONE SO FAR
      </h1>
      <VerticalTimeline lineColor="#915EFF" className="-z-10 mb-[20px]">
        {/* -------------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          date="2022 - Present"
          visible={true}
          contentStyle={{
            backgroundColor: isDarkMode ? "#221845" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          icon={
            <div className="flex justify-center items-center w-full h-full ">
              <img
                src="./assets/capgemini.png"
                alt="Capgemini-logo"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{ backgroundColor: "#221845", color: "#fff" }}
          contentArrowStyle={{ borderRight: "5px solid #915EFF" }}
        >
          <h1 className="uppercase tracking-wide ">
            Capgemini Technology Services India Limited
          </h1>
          <h3 className="flex  tracking-wide text-sm my-4">
            <span className="pt-[4px] px-4">
              <MdWorkspacePremium />
            </span>
            MERN Developer
          </h3>
          <div>
            <ul className="w-full flex">
              <span className="px-[10px] ">&#8227;</span>
              <li className="text-xs ">
                Developed and maintained responsive web applictions using
                ReactJS library.
              </li>
            </ul>

            <ul className="w-full flex pt-[8px]">
              <span className="px-[10px] ">&#8227;</span>
              <li className="text-xs ">
                Worked closely on creation of REST Api's using Node and Express
                Js and testing them using Postman.
              </li>
            </ul>

            <ul className="w-full flex pt-[8px]">
              <span className="px-[10px] ">&#8227;</span>
              <li className="text-xs ">
                Implemented the Authentication and Authorization on the UI part
                with RBAC, Dependent UI, Routing etc
              </li>
            </ul>

            <ul className="w-full flex pt-[8px]">
              <span className="px-[10px] ">&#8227;</span>
              <li className="text-xs ">
                Leveraged the Jasmine testing framework to design and implement
                a suite of unit and integration test cases for diverse
                components within the application.
              </li>
            </ul>

            <ul className="w-full flex pt-[8px]">
              <span className="px-[10px] ">&#8227;</span>
              <li className="text-xs ">
                Maintained version control systems like Git, collaborating with
                teams using platforms like GitHub to manage codebase, track
                changes, and merge code branches efficiently.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        {/* --------------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          date="2021 - 2022"
          visible={true}
          contentStyle={{
            backgroundColor: isDarkMode ? "#221845" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="https://static.wixstatic.com/media/6f8a9b_4f6a6d70cf324fa7acd8433f8d143adb~mv2.png/v1/crop/x_163,y_318,w_678,h_363/fill/w_240,h_126,al_c,q_95,enc_auto/3695_MissAudioVideo_Logo_02.png"
                alt="Capgemini-logo"
                className="w-[60%] h-[60%] object-cover"
              />
            </div>
          }
          iconStyle={{ backgroundColor: "#221845", color: "#fff" }}
          contentArrowStyle={{ borderRight: "5px solid #915EFF" }}
        >
          <h1 className="uppercase tracking-wide ">Miss Audio Video</h1>
          <h3 className="flex  tracking-wide text-sm my-4">
            <span className="pt-[4px] px-4">
              <MdWorkspacePremium />
            </span>
            ReactJS Developer
          </h3>
          <div>
            <ul className="w-full flex ">
              <span className="px-[10px] ">&#8227;</span>
              <li className="text-xs ">
                Transformed UI and UX designs into pixel-perfect, responsive,
                and interactive web applications through meticulous coding.
              </li>
            </ul>

            <ul className="w-full flex pt-[9px]">
              <span className="px-[10px] ">&#8227;</span>
              <li className="text-xs ">
                Skilled in translating design mockups and wireframes into clean,
                semantic HTML, CSS, and JavaScript code, ensuring seamless user
                experiences across various devices and screen sizes.
              </li>
            </ul>

            <ul className="w-full flex pt-[9px]">
              <span className="px-[10px] ">&#8227;</span>
              <li className="text-xs ">
                Worked on Backend-as-a-Service (BaaS) platform such as Firebase.
                Implemented authentication, real-time database, cloud storage,
                and more, allowing them to focus on building the frontend and
                user experience of their applications.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        {/* ------------------------------------------------------------------------------------------------------ */}
        <VerticalTimelineElement
          date="2020 - 2021"
          visible={true}
          contentStyle={{
            backgroundColor: isDarkMode ? "#221845" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="https://media.licdn.com/dms/image/C560BAQHdBDAQgo1HuA/company-logo_200_200/0/1631377741965?e=1720051200&v=beta&t=raFUj4I6Qu6wNJQXNCsotA25C2uOoRlV_e4k2mR2J2w"
                alt="Capgemini-logo"
                className="w-[60%] h-[60%] object-cover rounded-full"
              />
            </div>
          }
          iconStyle={{ backgroundColor: "#221845", color: "#fff" }}
          contentArrowStyle={{ borderRight: "5px solid #915EFF" }}
        >
          <h1 className="uppercase tracking-wide ">RC Diamonds</h1>
          <h3 className="flex  tracking-wide text-sm my-4">
            <span className="pt-[4px] px-4">
              <MdWorkspacePremium />
            </span>
            Frontend Developer
          </h3>

          <ul className="w-full flex ">
            <span className="px-[10px] ">&#8227;</span>
            <li className="text-xs ">
              Demonstrated ability to build complex, interactive user interfaces
              using HTML, CSS, Javascript.
            </li>
          </ul>

          <ul className="w-full flex pt-[9px]">
            <span className="px-[10px] ">&#8227;</span>
            <li className="text-xs ">
              Utilized popular UI libraries and frameworks such as Material-UI,
              Ant Design, or Chakra UI to create visually appealing and
              responsive designs
            </li>
          </ul>

          <ul className="w-full flex pt-[9px]">
            <span className="px-[10px] ">&#8227;</span>
            <li className="text-xs ">
              Designed and implemented responsive web applications that provide
              seamless user experiences across various devices and screen sizes
              using media queries
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
