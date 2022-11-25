import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { AiOutlineArrowUp } from "react-icons/ai";

type Props = {
  children: React.ReactNode;
};

const PagesLayout = ({ children }: Props) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [scrolled, setScrolled] = useState(0);
  const router = useRouter();

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        duration: 0.1,
      },
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const wheelEvent = () => {
      const percent =
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;

      setScrolled(percent);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", wheelEvent);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", wheelEvent);
    };
  });

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <Header />
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.button type="button"
        className="fixed p-4 border border-gray-400 rounded-full right-10"
        animate={{
          bottom: scrolled > 5 ? 40 : -50,
          transition: {
            duration: 0.5
          }
        }}
        style={{
          overflow: "hidden",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
      >
        <AiOutlineArrowUp className="text-xl" />
      </motion.button>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={router.asPath}
          initial={{
            opacity: 0,
            y: 50,
          }}
          layout
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <motion.main className="max-w-screen-lg px-10 mx-auto">
            {children}
          </motion.main>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default PagesLayout;
