import { useTheme } from "next-themes";
import Link from "next/link";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import UndelinedLinks from "@/common/UnderlinedLinks";
import Logo from "public/logo.svg";
import Image from "next/image";
import { GoThreeBars } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import classNames from 'classnames'

const menuItems = [
  {
    name: "Blog",
    href: "/",
    mobile: false
  },
  {
    name: "Snippet",
    href: "/snippet",
    mobile: false
  },
  {
    name: "About",
    href: "/about",
    mobile: false
  },
  {
    name: "My resume",
    href: "/static/CV.pdf",
    mobile: false
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const headerContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerContainer) return;
    setHeaderHeight(headerContainer.current?.clientHeight ?? 0);
  }, [headerContainer]);

  return (
    <>
      <header className="max-w-screen-xl px-10 py-5 mx-auto">
        <div className="flex-row items-center justify-between hidden lg:flex">
          <div>
            <Link href="/" passHref>
              <a className="text-2xl font-bold">
                <Image src={Logo.src} alt="logo" width={50} height={50} />
              </a>
            </Link>
          </div>
          <div className="flex-row items-center justify-center hidden space-x-5 lg:flex">
            <UndelinedLinks items={menuItems} />
            <div
              onClick={() => setTheme(theme === "moon" ? "dawn" : "moon")}
              className="relative w-10 h-5 text-xl"
            >
              <motion.button
                type="button"
                initial={{
                  opacity: theme === "moon" ? 0 : 1,
                  y: theme === "moon" ? 0 : 50,
                }}
                animate={{
                  opacity: theme === "moon" ? 1 : 0,
                  y: theme === "moon" ? 0 : 50,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="absolute"
                aria-label="light-theme-changer"
              >
                <BsFillSunFill className="text-yellow-400" />
              </motion.button>
              <motion.button
                type="button"
                initial={{
                  opacity: theme === "dawn" ? 1 : 0,
                  y: theme === "dawn" ? 0 : -50,
                }}
                animate={{
                  opacity: theme === "dawn" ? 1 : 0,
                  y: theme === "dawn" ? 0 : -50,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="absolute"
                aria-label="dark-theme-changer"
              >
                <BsFillMoonFill className="text-text" />
              </motion.button>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-between lg:hidden"
          ref={headerContainer}
        >
          <button
            type="button"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <GoThreeBars />
          </button>
          <div>
            <Link href="/" passHref>
              <a className="text-2xl font-bold">
                <Image src={Logo.src} alt="logo" width={50} height={50} />
              </a>
            </Link>
          </div>
          <div
            onClick={() => setTheme(theme === "moon" ? "dawn" : "moon")}
            className="relative w-10 h-5 text-xl"
          >
            <motion.button
              type="button"
              initial={{
                opacity: theme === "moon" ? 0 : 1,
                y: theme === "moon" ? 0 : 50,
              }}
              animate={{
                opacity: theme === "moon" ? 1 : 0,
                y: theme === "moon" ? 0 : 50,
                transition: {
                  duration: 0.5,
                },
              }}
              className="absolute"
            >
              <BsFillSunFill className="text-yellow-400" />
            </motion.button>
            <motion.button
              type="button"
              initial={{
                opacity: theme === "dawn" ? 1 : 0,
                y: theme === "dawn" ? 0 : -50,
              }}
              animate={{
                opacity: theme === "dawn" ? 1 : 0,
                y: theme === "dawn" ? 0 : -50,
                transition: {
                  duration: 0.5,
                },
              }}
              className="absolute"
            >
              <BsFillMoonFill className="text-text" />
            </motion.button>
          </div>
        </div>
      </header>
      <AnimatePresence exitBeforeEnter>

      <motion.div
        style={{
          height: `calc(100vh - ${headerHeight}px)`,
          marginTop: ``,
        }}
        className="fixed left-0 w-screen bg-black lg:hidden bg-opacity-80"
        animate={{
          zIndex: mobileNavOpen ? 1000 : -1,
          opacity: mobileNavOpen ? 100 : 0,
        }}
      >
        <div className="flex flex-col space-y-5">
          {menuItems.map((nav, idx) => (
            <Link key={nav.name} href={nav.href}>
              <motion.a
                key={nav.name}
                className={classNames(
                  "px-12 py-4 transform ease-in-out duration-300 font-bold text-xl",
                  mobileNavOpen ? "translate-x-0" : "-translate-x-full"
                )}
                style={{
                  transitionDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                {nav.name}
              </motion.a>
            </Link>
          ))}
        </div>
      </motion.div>

      </AnimatePresence>
    </>
  );
};

export default Header;
