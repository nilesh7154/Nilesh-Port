import ReactGA from 'react-ga4';
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
 const TRACKING_ID = import.meta.env.VITE_GA_ID; // ✅ Load from .env

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.send("pageview");
    } else {
      console.warn("❌ Google Analytics Tracking ID is missing!");
    }
  }, []);
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="md:ml-64 mt-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
