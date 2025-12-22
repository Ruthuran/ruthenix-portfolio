import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden relative"
    >
      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl mt-10 md:mt-0 z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm <span className="text-blue-500">Ruthuran</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-gray-400 mb-8 font-light"
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
          className="inline-block px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500
            hover:from-purple-600 hover:via-pink-500 hover:to-blue-500
            shadow-xl transition-all duration-300 transform hover:scale-105 ring-1 ring-white/10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Download Resume
        </motion.a>

      </div>

      {/* Animated Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative z-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="relative animate-float">
          {/* Glowing animated background ring */}
          <div className="absolute inset-0 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-blue-600/30 via-indigo-500/20 to-purple-700/10 blur-3xl opacity-80 animate-pulse-slow z-0" />

          {/* Profile Image */}
          <img
            src="https://backiee.com/static/wallpapers/1920x1080/386745.jpg"
            alt="Developer Illustration"
            className="relative z-10 w-[560px] md:w-[700px] rounded-3xl shadow-2xl border-[5px] border-blue-500/40 backdrop-blur-sm bg-white/5"
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
