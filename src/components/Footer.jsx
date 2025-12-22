import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react"; // replaced Mail with Twitter

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-tr from-gray-950 via-gray-900 to-black text-gray-300 py-10 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 tracking-widest">
            RUTHENIX
          </h3>
          <p className="text-sm mt-1 text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://github.com/Ruthuran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/ruthuran-muralirajan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <Twitter size={22} />
          </a>
        </motion.div>
      </div>

      {/* Animated Line */}
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent my-6"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 0.6, duration: 1 }}
      />

      {/* Bottom Tagline */}
      <motion.p
        className="text-sm text-center text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Crafted with <span className="text-red-400">❤️</span> by{" "}
        <span className="text-white font-semibold">RUTHURAN</span> — Powered
        by <span className="text-blue-400 font-bold">RUTHENIX</span>
      </motion.p>
    </motion.footer>
  );
}
