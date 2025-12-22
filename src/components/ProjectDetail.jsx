import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectData } from "../data/portfolioData";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="bg-[#0f1624] min-h-screen flex items-center justify-center text-white text-xl">
        Project not found
      </div>
    );
  }

  return (
    <motion.div
      className="bg-[#0f1624] text-white min-h-screen px-6 pt-4 md:pt-6 pb-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Back Button */}
      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-[#141c2f] rounded-lg border border-white/20 shadow-[0_0_20px_rgba(0,255,255,0.3)] transition"
        >
          ← Back
        </button>

        <span className="text-gray-400">/</span>
        <span className="text-gray-300 font-medium">{project.title}</span>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        {/* LEFT — 2x2 IMAGE GRID */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 gap-[2px] w-full"
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`${i % 2 === 1 ? "translate-y-6 md:translate-y-8" : ""}`}
            >
              <img
                src={project?.images?.[i] || project.image}
                alt={`${project.title} ${i + 1}`}
                className="
                  w-full
                  h-[260px] md:h-[280px]
                  object-cover
                  border-[2px] border-[#0b1220]
                  shadow-[0_0_25px_rgba(102,126,234,0.65)]
                "
              />
            </div>
          ))}
        </motion.div>

       {/* RIGHT CONTENT */}
<motion.div className="flex flex-col justify-start gap-6" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} > 
  
  {/* Single-line title with underline */} 
  <h1 className="text-3xl md:text-4xl font-bold tracking-tight underline underline-offset-8 decoration-purple-500">
     {project.title} 
     </h1>

  {/* Description Section */}
  {project.description && (
    <div className="mt-4 text-gray-300 leading-relaxed space-y-3">
      {project.description.split("•").map((point, idx) =>
        point.trim() ? (
          <p
            key={idx}
            className="flex items-start gap-2
            hover:text-white transition duration-300"
          >
            <span className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
              🔹
            </span>
            {point.trim()}
          </p>
        ) : null
      )}
    </div>
  )}
          {/* Tech Stack */}
{project.technologies?.length > 0 && (
  <div className="mt-6">
    
    {/* Title */}
   <h3 className="text-2xl font-semibold underline underline-offset-8 decoration-purple-500"> 🚀 Technologies Implemented </h3>

    {/* Glass Container (Auto Width - No Extra Space) */}
    <div
      className="
        relative mt-3 px-5 py-3
        rounded-2xl bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-[0_10px_35px_rgba(0,0,0,0.5)]
        w-fit
      "
    >
      {/* Soft glow aura */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10
          blur-xl opacity-60 pointer-events-none
        "
      />

      {/* Tech Pills */}
      <div className="relative flex flex-wrap gap-3 z-10">
        {project.technologies.map((tech, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
            className="
              px-5 py-2 rounded-xl text-sm font-semibold
              bg-[#0b1120]/80
              border border-white/30
              text-white
              shadow-[0_0_15px_rgba(99,102,241,0.7)]
              hover:shadow-[0_0_30px_rgba(124,58,237,0.9)]
              transition-all duration-300 select-none
            "
          >
            ⚡ {tech}
          </motion.span>
        ))}
      </div>
    </div>
  </div>
)}

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transition"
              >
                Live Demo
              </a>
            )}
            {project.gitLink && (
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#141c2f] rounded-lg border border-white/20 shadow-lg hover:bg-[#1d2942] transition"
              >
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
