import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/project/Projects'
import { motion, useScroll } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 bottom-0 bg-secondary h-1"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App
