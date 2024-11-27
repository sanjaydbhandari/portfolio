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

const navLinks = [
  {
    name: "Home",
    icon: `<TooltipContent side="bottom">`,
  },
];

const Navbar = () => {
  const [navLink, setNavLink] = useState("Home");
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const changeTheme = () => {
    themeMode == "light" ? lightTheme() : darkTheme();
  };

  return (
    <div className="fixed py-5 px-5 left-1/2 translate-x-[-50%] z-10 w-full sm:w-[700px]">
      <ul className="flex flex-wrap py-2 px-6 border-2 items-center justify-around gap-2 rounded-full backdrop-blur-lg bg-opacity-60 shadow-lg">
        <NavLink
          icon={<HiOutlineHome className="text-xl" />}
          name={"Home"}
          navLink
          setNavLink={setNavLink}
        />
        <NavLink
          icon={<DiCode className="text-xl" />}
          navLink
          name={"Projects"}
          setNavLink={setNavLink}
        />
        <NavLink
          icon={<FiUser className="text-xl" />}
          navLink
          name={"About"}
          setNavLink={setNavLink}
        />
        <NavLink
          icon={<SlGraduation className="text-xl" />}
          navLink
          name={"Education"}
          setNavLink={setNavLink}
        />
        <NavLink
          icon={<CiFileOn className="text-xl" />}
          navLink
          name={"Resume"}
          setNavLink={setNavLink}
        />
        <NavLink
          icon={<FaLinkedin className="text-xl" />}
          navLink
          name={"Linkedin"}
          setNavLink={setNavLink}
        />
        <NavLink
          icon={<FaGithub className="text-xl" />}
          navLink
          name={"Github"}
          setNavLink={setNavLink}
        />

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
          {/* <span class="tooltip">{themeMode} Mode</span> */}
        </li>
      </ul>
    </div>
  );
};

const NavLink = ({ navLink, setNavLink, icon, name }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <li
          className={`icon flex flex-col items-center tracking-wide ${
            navLink === name && `-text--color-link-primary`
          } ease-in-out duration-300 ...`}
          onClick={() => {
            setNavLink(name);
          }}
        >
          <TooltipTrigger>
            {icon}
            <TooltipContent side="bottom">
              <p>{name}</p>
            </TooltipContent>
          </TooltipTrigger>
        </li>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Navbar;
