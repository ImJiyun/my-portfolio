import technologies from "./technologies";
import { motion } from "framer-motion";

export default function Tech() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light bg-gradient-to-r from-blue-900 to-sky-400 bg-clip-text text-transparent md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {technologies.map((tech) => (
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            // transition={{ duration: 0.5 }}
            className={`cursor-pointer text-[80px] ${tech.style} transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`}
          >
            {tech.logo}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
