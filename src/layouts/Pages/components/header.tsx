import { useTheme } from "next-themes";
import Link from "next/link";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="max-w-screen-xl px-10 py-5 mx-auto">
      <div className="flex flex-row items-center justify-between">
        <div>
          <Link href="/" passHref>
            <a className="text-2xl font-bold">WR.</a>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div
            onClick={() => setTheme(theme === "moon" ? "dawn" : "moon")}
            className="relative text-xl"
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
                }
              }}
              className="absolute right-0"
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
                }
              }}
              className="absolute right-0"
            >
              <BsFillMoonFill className="text-text" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
