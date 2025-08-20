import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Experience from "./components/Experience"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Header */}

      <Navbar/>

      {/* Hero Section */}

      <HeroSection/>

      {/* About Section */}

      <About/>

      {/* Work Experience */}

      <Experience/>

      {/* Tech Stack */}

      <TechStack/>

      {/* Featured Projects */}

      <Projects/>

      {/* Contact */}

      <Contact/>

      {/* Footer */}

      <Footer/>

    </div>
  )
}
