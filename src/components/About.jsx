import { motion } from "framer-motion";
import badge from "../assets/badge.png";
import ProfilePic1 from "../assets/Profile Pic 1.png";

export default function About() {
  const drivesAndPath = [
    { emoji: "🚀", label: "Creating seamless user experiences" },
    { emoji: "🧠", label: "Learning and mastering new tech" },
    { emoji: "🌐", label: "Building impactful web solutions" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 py-16 md:py-24"
    >
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Profile Image with Badge */}
        <motion.div
          className="flex justify-center relative"
          variants={{
            hidden: { opacity: 0, scale: 0.8, x: -50 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            {/* Profile Image */}
            <motion.div
              className="w-40 sm:w-52 md:w-[500px] h-40 sm:h-52 md:h-[500px] rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={ProfilePic1}
                alt="Ruthuran"
                className="w-full h-full object-cover rounded-full border-2 sm:border-3 md:border-4 border-gray-900"
                style={{ objectPosition: "top center" }}
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.img
              src={badge}
              alt="Illinois Badge"
              className="absolute top-2 sm:top-4 right-2 sm:right-4 w-16 sm:w-20 h-16 sm:h-20 rounded-md shadow-lg bg-white/90 p-2"
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-4 leading-snug sm:leading-tight md:leading-tight">
            Hello! I’m <span className="text-blue-400">Ruthuran</span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-6">
            Building innovative web experiences with clean code and big goals 🎯
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-[90%] sm:max-w-xl md:max-w-3xl mb-4 sm:mb-6 md:mb-6">
            👋 I’m <span className="font-semibold text-white">Ruthuran</span>, a passionate{" "}
            <span className="text-white font-semibold">MERN Stack Developer</span> who loves
            crafting <span className="text-white font-semibold">dynamic</span>,{" "}
            <span className="text-white font-semibold">responsive</span> websites. I have solid
            experience with <span className="font-semibold text-white">JavaScript</span>,{" "}
            <span className="font-semibold text-white">React</span>,{" "}
            <span className="font-semibold text-white">Node.js</span>,{" "}
            <span className="font-semibold text-white">Express</span>, and{" "}
            <span className="font-semibold text-white">MongoDB</span>. I'm committed to{" "}
            <span className="font-semibold text-white">continuous learning</span> and my goal is to
            become a <span className="font-semibold text-white">Senior Developer</span>.
          </p>

          <motion.h3
            className="text-3xl sm:text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 sm:mb-6 md:mb-6 relative group w-fit mt-6 sm:mt-8 md:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Path
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-blue-400 to-pink-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {drivesAndPath.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-blue-400/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.emoji}</div>
                <span className="text-xs sm:text-sm font-medium text-gray-200">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
