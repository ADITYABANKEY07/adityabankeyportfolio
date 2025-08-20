import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import avatar from "./images/avatar.png"
import Image from "next/image"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Experience from "./components/Experience"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

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
      <footer className="py-12 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 glow-effect float-effect">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-2xl font-bold font-space-grotesk gradient-text">AB</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">© 2024 Portfolio. Designed & Built with ❤️</p>
        </div>
      </footer>
    </div>
  )
}
