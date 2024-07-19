import { motion } from "framer-motion";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function AnimationLayout({ children }: Props) {
  return (
    <>
      <motion.main
        initial={{ x: 0 }}
        animate={{
          x: "-100%",
          transition: { duration: 0.5 },
        }}
        className="bg-white absolute top-0 bottom-0 left-0 rounded-xl right-0 z-50 hidden lg:block"
      ></motion.main>
      {children}
    </>
  );
}
