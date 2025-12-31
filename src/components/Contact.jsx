import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";


export default function Contact() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const [hoverLeft, setHoverLeft] = useState(false);

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#020617] text-white py-20 px-6 sm:px-10 flex items-start justify-center"
    >
      <motion.div
        className="max-w-5xl w-full mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-blue-400 tracking-[0.25em]">CONTACT</p>

          <h1 className="text-3xl md:text-4xl font-bold mt-2 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            Get In Touch
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Reach out anytime — I’ll get back soon 😊
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8 }}
            className="h-[3px] mx-auto mt-3 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full shadow-[0_0_15px_#60a5fa]"
          />
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT CARD - Animated */}
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              x.set(e.clientX - rect.left - rect.width / 2);
              y.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => {
              setHoverLeft(false);
              x.set(0);
              y.set(0);
            }}
            animate={{ y: hoverLeft ? -4 : [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-2xl p-6 pb-20 bg-white/5 border border-white/10 
                       backdrop-blur-[20px] shadow-[0_0_40px_#0f1d4e]
                       hover:shadow-[0_0_60px_#2563eb] transition overflow-visible"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-500/20 opacity-70 blur-xl" />

            <h2 className="text-xl font-semibold relative z-10">Contact Details</h2>

            <div className="space-y-4 mt-5 relative z-10">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400 w-5 h-5" />
                <p className="text-gray-300 text-sm sm:text-base">
                  ruthuranmuralirajan1@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-400 w-5 h-5" />
                <p className="text-gray-300 text-sm sm:text-base">+91 9345707104</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400 w-5 h-5" />
                <p className="text-gray-300 text-sm sm:text-base">Vellore, India</p>
              </div>
            </div>

            {/* Corner Image - Bottom Left */}
      <motion.div
            className="absolute bottom-0 right-3 w-60 sm:w-64 md:w-72 h-60 sm:h-64 md:h-72 rounded-full overflow-hidden 
                      pointer-events-none select-none flex items-center justify-center 
                      before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500 before:blur-xl before:opacity-40"
            animate={{ y: [0, -5, 0] }} // gentle floating
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://img.freepik.com/free-photo/cute-cartoon-kid-posing-portrait_23-2151870598.jpg"
              alt="contact illustration"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
          </motion.div>

          {/* RIGHT FORM - FIXED */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-6 bg-white/5 border border-white/10 
                       backdrop-blur-[20px] shadow-[0_0_40px_#0f1d4e]
                       hover:shadow-[0_0_70px_#8b5cf6] transition sticky top-20"
          >
            <form className="space-y-4">
              <div>
                <label className="text-gray-300 text-sm">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-1 p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full mt-1 p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Message</label>
                <textarea
                  rows="3"
                  placeholder="Write your message..."
                  className="w-full mt-1 p-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:border-blue-500 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-base rounded-lg 
                           bg-gradient-to-r from-blue-600 to-purple-600
                           shadow-[0_0_30px_#3b82f6] hover:shadow-[0_0_60px_#8b5cf6] 
                           transition font-semibold"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
