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
          <Link href="/">
            <a className="text-2xl font-bold">WR.</a>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center">
          <motion.div>
            <div onClick={() => setTheme(theme === "moon" ? "dawn" : "moon")}>
              <motion.button
                type="button"
                initial={{
                  opacity: theme === "moon" ? 0 : 1,
                  y: theme === "moon" ? 0 : -100
                }}
                animate={{
                  opacity: theme === "moon" ? 1 : 0,
                  y: theme === "moon" ? 0 : -100,
                }}
              >
                <BsFillSunFill className="text-white" />
              </motion.button>
              <motion.button
                type="button"
                initial={{
                  opacity: theme === "dawn" ? 1 : 0,
                  y: theme === "dawn" ? 0 : -100
                }}
                animate={{
                  opacity: theme === "dawn" ? 1 : 0,
                  y: theme === "dawn" ? 0 : -100,
                }}
              >
                <BsFillMoonFill className="text-black" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <button onClick={() => setTheme("dawn")}>click me</button> */}
      {/* <button onClick={() => setTheme("moon")}>click me 1</button> */}
    </header>
  );
};

export default Header;
