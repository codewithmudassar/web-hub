"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FiverrIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  UpworkIcon,
} from "./icon";
import SunIcon from "./SunIcon";
import { motion } from "framer-motion";
import useThemeSwither from "./hook/useThemeSwither";
import { useRouter } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handlecli = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handlecli}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // STICKY NAVBAR WHEN IT'S SCROLL ----------------
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [mode, setMode] = useThemeSwither();


  return (
    <header className={` w-full px-4 py-4 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-8 md:px-8 sm:px-8 ${scrolled ? "bg-white dark:bg-black shadow-md" : ""}`}>
      <button
        className=" flex-col justify-center items-center lg:hidden flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full lg:flex justify-between items-center hidden">
        <nav>
          <CustomLink href={"/"} title="Home" className="mr-4" />
          <CustomLink href={"/about"} title="About" className="mx-4" />
          <CustomLink href={"/team"} title="Team" className="mx-4" />
          <CustomLink href={"/contact"} title="Contact" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          {/* <motion.div className="relative group w-7 mr-4">
            <motion.a
              href="https://www.linkedin.com/in/mudassar-ali-787971235/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="block w-full"
            >
              <LinkedInIcon />
            </motion.a>
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 bg-dark text-light dark:bg-light dark:text-dark text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
              LinkedIn
            </span>
          </motion.div>
          <motion.div className="relative group w-7 mr-4">
            <motion.a
              href="https://github.com/codewithmudassar"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="block w-full"
            >
              <GithubIcon />
            </motion.a>
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 bg-dark text-light dark:bg-light dark:text-dark text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
              Github
            </span>
          </motion.div>
          <motion.div className="relative group w-7 mr-4">
            <motion.a
              href="https://www.upwork.com/freelancers/~010da425b07a99f22a"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="block w-full"
            >
              <UpworkIcon />
            </motion.a>
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 bg-dark text-light dark:bg-light dark:text-dark text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
              Upwork
            </span>
          </motion.div>
          <motion.div className="relative group w-7 mr-4">
            <motion.a
              href="https://www.fiverr.com/users/mudassar_ali222"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="block w-full"
            >
              <FiverrIcon />
            </motion.a>
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 bg-dark text-light dark:bg-light dark:text-dark text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
              Fivver
            </span>
          </motion.div> */}
          <div className="flex items-center gap-3">
          <button
  className="cursor-pointer bg-bllue rounded-md text-white font-semibold transition duration-300 ease-in-out  hover:ring-2  hover:shadow-xl hover:shadow-bllue focus:ring-bllue focus:shadow-bllue px-5 py-2"
>
  Hire 
</button>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {isClient &&
              (mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              ))}
          </button>
          </div>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center justify-center flex-col ">
            <CustomMobileLink
              href={"/"}
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/team"}
              title="Team"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/contact"}
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href={"https://www.linkedin.com/in/mudassar-ali-787971235/"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href={"https://github.com/codewithmudassar"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href={"https://www.upwork.com/freelancers/~010da425b07a99f22a"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <UpworkIcon />
            </motion.a>
            <motion.a
              href={"https://www.fiverr.com/users/mudassar_ali222"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <FiverrIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 w-6 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {isClient &&
                (mode === "dark" ? (
                  <SunIcon className="fill-dark" />
                ) : (
                  <MoonIcon className="fill-dark" />
                ))}
            </button>
          </nav>
        </motion.div>
      ) : null}

<button
  className="cursor-pointer bg-bllue rounded-md text-white font-semibold transition duration-300 ease-in-out  hover:ring-2  hover:shadow-xl hover:shadow-bllue focus:ring-bllue focus:shadow-bllue px-5 py-2 lg:hidden"
>
  Hire 
</button>
    </header>
  );
};

export default Navbar;