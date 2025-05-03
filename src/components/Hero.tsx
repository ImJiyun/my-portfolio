import profile from "/src/assets/profile.jpeg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="px-16 flex min-h-screen w-full flex-col items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-black">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={profile}
            alt="profile image"
            className="w-[300px] cursor-pointer rounded-full shadow-xl transition-all duration-300 hover:-trasnlate-y-5 hover:scale-105 hover:shadow-2xl md:w-[350px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-900 to-sky-400 bg-clip-text text-transparent opacity-80 text-3xl font-light transition-all duration-300 hover:opacity-100 md:text-7xl">
            Jiyun Kim
          </h1>
          <h3 className="bg-gradient-to-r from-sky-400 to-blue-900 bg-clip-text text-transparent opacity-80 text-2xl font-light transition-all duration-300 hover:opacity-100 md:text-3xl">
            Frontend Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-700">
            React와 TypeScript를 사용하여 웹 어플리케이션을 개발하는 프론트엔드
            개발자입니다. 새로운 기술을 배우고 적용하는 것을 좋아합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
