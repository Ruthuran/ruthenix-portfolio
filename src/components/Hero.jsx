import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden relative"
    >
      {/* Text Section */}
      <div className="w-full md:w-auto text-center md:text-left max-w-xl mt-6 sm:mt-8 md:mt-0 z-10 flex flex-col items-center md:items-start">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-tight mb-4 sm:mb-6 md:mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm <span className="text-blue-500">Ruthuran</span>
        </motion.h1>

        <motion.p
          className="text-xs sm:text-sm md:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-8 font-light max-w-[90%] md:max-w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          💻 MERN Stack Developer &nbsp;|&nbsp; 🎓 Fresher with a complete full-stack project &nbsp;|&nbsp; 🚀 Creator of{" "}
          <span className="text-blue-400 font-medium tracking-wide">RUTHENIX</span>
        </motion.p>

        <motion.a
          href="/src/assets/Ruthuran_Resume.pdf"
          download
          className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-white font-semibold bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500
            hover:from-purple-600 hover:via-pink-500 hover:to-blue-500
            shadow-xl transition-all duration-300 transform hover:scale-105 ring-1 ring-white/10 text-xs sm:text-sm md:text-base"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Download Resume
        </motion.a>
      </div>

      {/* Animated Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative z-0 mt-6 sm:mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="relative animate-float w-full flex justify-center">
          {/* Glowing animated background ring */}
          <div className="absolute w-48 sm:w-64 md:w-[450px] h-48 sm:h-64 md:h-[450px] rounded-full bg-gradient-to-br from-blue-600/30 via-indigo-500/20 to-purple-700/10 blur-3xl opacity-80 animate-pulse-slow z-0" />

          {/* Profile Image */}
          <img
            src="https://backiee.com/static/wallpapers/1920x1080/386745.jpg"
            alt="Developer Illustration"
            className="relative z-10 w-48 sm:w-64 md:w-[560px] lg:w-[700px] rounded-3xl shadow-2xl border-[2px] sm:border-3 md:border-5 border-blue-500/40 backdrop-blur-sm bg-white/5"
            style={{
              mixBlendMode: "screen",
              boxShadow: "0 0 60px rgba(99,102,241,0.4)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
