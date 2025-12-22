import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  tabs,
  projectData,
  certificateData,
  techIcons,
} from "../data/portfolioData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");
  const [showAll, setShowAll] = useState(false);

  // Certificate Popup State
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const displayedProjects =
    activeTab === "projects"
      ? showAll
        ? projectData
        : projectData.slice(0, 3)
      : [];

  const content =
    activeTab === "projects"
      ? displayedProjects
      : activeTab === "certificates"
      ? certificateData
      : techIcons;

  return (
    <section id="projects" className="bg-[#0f1624] text-white py-20 px-6 sm:px-12">
      <motion.div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          My Work
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12 relative">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false);
              }}
              className={`relative px-6 py-2 font-medium capitalize transition duration-300 ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[3px] bg-green-400 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + showAll}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              activeTab === "tech stack"
                ? "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8"
                : "grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
            }`}
          >
            {/* Tech Stack */}
            {activeTab === "tech stack" &&
              techIcons.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center bg-[#141c2f] p-5 rounded-2xl shadow-lg hover:shadow-green-500/30 transition"
                  >
                    <Icon size={50} style={{ color: tech.color }} />
                    <p className="mt-2">{tech.name}</p>
                  </motion.div>
                );
              })}

            {/* Projects / Certificates */}
            {activeTab !== "tech stack" &&
              content.map((item, index) => (
                <motion.div
                  key={index}
                  className={`${
                    activeTab === "projects"
                      ? "bg-[#141c2f] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                      : "bg-[#141c2f] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    if (activeTab === "certificates") {
                      setSelectedCertificate(item.image);
                    }
                  }}
                >
                  <div className={`${activeTab === "projects" ? "h-40" : "h-56"} overflow-hidden`}>
                    <img
                      src={item.image || item.images?.[0] || "/fallback.png"}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      alt={item.title || "portfolio item"}
                      loading="lazy"
                    />
                  </div>

                  <div className={`${activeTab === "projects" ? "p-4" : "p-6"}`}>
                    <h3 className={`${activeTab === "projects" ? "text-xl" : "text-2xl"} font-bold`}>
                      {item.title}
                    </h3>

                    {item.shortDesc && (
                      <p className="text-gray-400 text-sm mt-2">{item.shortDesc}</p>
                    )}

                    {/* Read More Only For Projects */}
                    {activeTab === "projects" && (
                      <Link
                        to={`/projects/${item.id}`}
                        className="text-green-400 mt-2 inline-block hover:underline text-sm"
                      >
                        READ MORE →
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More */}
        {activeTab === "projects" && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((p) => !p)}
              className="px-7 py-3 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition-all"
            >
              {showAll ? "Show Less ↑" : "Show More ↓"}
            </button>
          </div>
        )}
      </motion.div>

      {/* Certificate Popup Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.img
              src={selectedCertificate}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-[90%] rounded-2xl shadow-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-8 right-8 bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-400"
            >
              ✕ Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
