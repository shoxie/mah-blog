import Link from "next/link";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import DefaultLayout from "@/layouts/Default";
import HeroBanner from "@/modules/Home/components/HeroBanner";
import Logo from 'public/logo.svg' 
import Image from "next/image";

const TransitionLTR = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const StaggerChildren = {
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const TransitionRTL = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    }
  },
};

const Home = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "moon" ? "dawn" : "moon");
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="relative h-screen px-8 py-5 mx-auto md:px-16 md:py-10 max-w-scren-xl">
        <motion.div
          variants={TransitionLTR}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute right-0 flex flex-row items-center h-full px-16 space-y-5 text-lg translate-y-1/2 top-1/2"
          style={{
            textOrientation: "mixed",
            writingMode: "vertical-lr",
          }}
        >
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
          <Link href="/blog" passHref>
            <a>Blog</a>
          </Link>
          <Link href="/snippet" passHref>
            <a>Snippet</a>
          </Link>
        </motion.div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-row items-center justify-between">
            <motion.div
              variants={TransitionLTR}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Link href="/" passHref>
                <a className="text-2xl font-bold">
                  <Image src={Logo.src} alt="logo" width={50} height={50} />
                </a>
              </Link>
            </motion.div>
            <motion.span
              variants={TransitionRTL}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-lg"
            >
              <Link href="/static/CV.pdf" passHref>
                <a>my resume.</a>
              </Link>
            </motion.span>
          </div>
          <HeroBanner />
          <div className="flex flex-row items-center justify-between text-lg font-semibold">
            <motion.button
              type="button"
              onClick={toggleTheme}
              variants={TransitionLTR}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              toggle themes.
            </motion.button>
            <motion.div
              variants={StaggerChildren}
              animate="animate"
              className="flex flex-row space-x-3"
            >
              <motion.a variants={TransitionRTL} initial="initial" animate="animate" exit="exit">Facebook</motion.a>
              <motion.a variants={TransitionRTL} initial="initial" animate="animate" exit="exit">Linkedin</motion.a>
              <motion.a variants={TransitionRTL} initial="initial" animate="animate" exit="exit">Call me</motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

Home.Layout = DefaultLayout;

export default Home;
