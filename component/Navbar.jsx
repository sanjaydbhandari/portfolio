import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";
import { CiFileOn } from "react-icons/ci";
import { SlGraduation } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { DiCode } from "react-icons/di";
import useTheme from "../contexts/theme";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
// import { TooltipProvider } from "@radix-ui/react-tooltip";

const Navbar = () => {
  const [navLink, setNavLink] = useState("Home");
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const changeTheme = () => {
    themeMode == "light" ? lightTheme() : darkTheme();
  };

  return (
    <div className="fixed py-5 px-5 left-1/2 translate-x-[-50%] z-10 w-full sm:w-[700px]">
      <ul className="flex flex-wrap py-2 px-6 border-2 items-center justify-around gap-2 rounded-full backdrop-blur-lg bg-opacity-60 shadow-lg">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <li
              className={`icon flex flex-col items-center tracking-wide ${
                navLink === "Home" && `-text--color-link-primary`
              } ease-in-out duration-300 ...`}
              onClick={() => {
                setNavLink("Home");
              }}
            >
              <TooltipTrigger>
                <HiOutlineHome className="text-xl" />
                <TooltipContent side="bottom">
                  <p>Home</p>
                </TooltipContent>
              </TooltipTrigger>
            </li>
          </Tooltip>
        </TooltipProvider>
        <li
          className={`icon flex flex-col items-center tracking-wide ${
            navLink === "Projects" && `-text--color-link-primary`
          } ease-in-out duration-300 ...`}
          onClick={() => {
            setNavLink("Projects");
          }}
        >
          <DiCode className="text-xl" />
          <span class="tooltip">Projects</span>
        </li>

        <li
          className={`icon flex flex-col items-center tracking-wider ${
            navLink === "About" && `-text--color-link-primary`
          } ease-in-out duration-300 hover:-text--color-link-primary ...`}
          onClick={() => {
            setNavLink("About");
          }}
        >
          <FiUser className="text-xl" />
          <span class="tooltip">About</span>
        </li>

        <li
          className={`icon flex flex-col items-center tracking-wider ${
            navLink === "Education" && `-text--color-link-primary`
          } ease-in-out duration-300 hover:-text--color-link-primary ...`}
          onClick={() => {
            setNavLink("Education");
          }}
        >
          <SlGraduation />
          <span class="tooltip">Education</span>
          {/* <li className="">Education</li> */}
        </li>

        <li
          className={`icon flex flex-col items-center tracking-wider ${
            navLink === "Resume" && `-text--color-link-primary`
          } ease-in-out duration-300 hover:-text--color-link-primary ...`}
          onClick={() => {
            setNavLink("Resume");
          }}
        >
          <CiFileOn className="text-xl" />
          <span class="tooltip">Resume</span>
        </li>
        <li
          className={`icon flex flex-col items-center tracking-wider ${
            navLink === "Linkedin" && `-text--color-link-primary`
          } ease-in-out duration-300 hover:-text--color-link-primary ...`}
          onClick={() => {
            setNavLink("Linkedin");
          }}
        >
          <FaLinkedin className="text-xl" />
          <span class="tooltip">LinkedIn</span>
        </li>
        <li
          className={`icon flex flex-col items-center tracking-wider ${
            navLink === "Github" && `-text--color-link-primary`
          } ease-in-out duration-300 hover:-text--color-link-primary ...`}
          onClick={() => {
            setNavLink("Github");
          }}
        >
          <FaGithub className="text-xl" />
          <span class="tooltip">Github</span>
        </li>
        <div className="border-r-2 h-7 dark:border-gray-100 border-black "></div>
        <li
          className={`icon flex flex-col items-center tracking-wider hover:-text--color-link-primary ...`}
          onClick={() => changeTheme()}
        >
          {themeMode == "light" ? (
            <IoSunnyOutline className="text-xl" />
          ) : (
            <RxMoon className="text-xl" />
          )}
          <span class="tooltip">{themeMode} Mode</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
