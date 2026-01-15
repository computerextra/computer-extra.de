import { useEffect, useState } from "react";
import { AnimatePresence, type Variants, motion } from "framer-motion";

const texts = [
  "Hardware",
  "Software",
  "Netzwerktechnik",
  "Telekommunikation",
  "Webdesign",
  "Webhosting",
];

const variants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 2.5, filter: "blur(10px)" },
};

export default function AnimatedText() {
  const [text, setText] = useState(texts[0]);

  const getNext = (idx: number) => {
    if (idx < texts.length - 1) return idx + 1;
    else return 0;
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(texts[i]);
      i = getNext(i);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={text}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
}
