import { useTheme } from "next-themes";

const Header = () => {
  const { setTheme } = useTheme();
  return (
    <header>
      <button onClick={() => setTheme("dawn")}>click me</button>
      <button onClick={() => setTheme("moon")}>click me 1</button>
    </header>
  );
};

export default Header;
