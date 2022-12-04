import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  "Dropdown item 1",
  "Dropdown item 2",
  "Dropdown item 3",
  "Dropdown item 4",
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Open</button>
      <motion.div
        style={{
          overflow: "hidden",
        }}
        animate={{
            height: isOpen ? "auto" : 0
        }}
      >
        {data.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </motion.div>
    </div>
  );
}
