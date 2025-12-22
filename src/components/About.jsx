import { motion } from "framer-motion";
import badge from "../assets/badge.png"; // Import badge

export default function About() {
  const drivesAndPath = [
    { emoji: "🚀", label: "Creating seamless user experiences" },
    { emoji: "🧠", label: "Learning and mastering new tech" },
    { emoji: "🌐", label: "Building impactful web solutions" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-24"
    >
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
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
              className="w-[500px] h-[500px] rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://i.pinimg.com/564x/8c/39/0c/8c390cfc24b041a13336902a931dcb30.jpg"
                alt="Ruthuran"
                className="w-full h-full object-cover rounded-full border-4 border-gray-900"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.img
              src={badge}
              alt="Illinois Badge"
              className="absolute top-6 right-6 w-24 h-24 rounded-md shadow-lg bg-white/90 p-2"
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
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-extrabold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hello! I’m <span className="text-blue-400">Ruthuran</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Building innovative web experiences with clean code and big goals 🎯
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
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
            become a <span className="font-semibold text-white">Senior Developer</span> by solving
            real-world challenges and building impactful digital solutions.
          </p>

          {/* My Path Section */}
          <motion.h3
            className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6 relative group w-fit mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Path
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-blue-400 to-pink-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
          </motion.h3>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-5">
            {drivesAndPath.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-blue-400/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <span className="text-sm font-medium text-gray-200">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
