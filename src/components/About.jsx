import { motion } from "framer-motion";

import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
        >
          About Me
        </motion.h2>

        {/* About Text */}
        <motion.div
          className="w-full flex justify-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-[-20px] mb-10 max-w-3xl py-6 text-lg sm:text-xl lg:text-xl leading-relaxed text-left hyphens-auto">
            <p>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
