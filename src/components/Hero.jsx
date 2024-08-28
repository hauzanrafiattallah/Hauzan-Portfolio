import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/foto.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight text-center lg:text-left lg:mt-16 lg:text-8xl"
          >
            Hauzan Rafi
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500
            to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center lg:text-left"
          >
            Frontend Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-lg py-6 font-light text-center lg:text-left text-lg sm:text-xl lg:text-xl leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={profilePic}
            alt="Hauzan Picture"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
