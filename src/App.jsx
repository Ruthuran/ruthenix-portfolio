import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function AppContent() {
  const location = useLocation();

  // Hide Navbar and Footer for ProjectDetail page
  const hideNavFooter = location.pathname.startsWith("/projects/");

  return (
    <>
      {!hideNavFooter && <Navbar />}

      <Routes>
        {/* Home Page */}
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

        {/* Project Details Page */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      {!hideNavFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
