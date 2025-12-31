import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  // Hide Navbar & Footer on project detail page
  const hideNavFooter = location.pathname.includes("/projects/");

  return (
    <>
      {!hideNavFooter && <Navbar />}

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Project Details */}
        <Route path="/projects/:id" element={<ProjectDetail />} />

        {/* 404 Optional */}
        {/* <Route path="*" element={<h1 className="text-white">Page Not Found</h1>} /> */}
      </Routes>

      {!hideNavFooter && <Footer />}
    </>
  );
}
