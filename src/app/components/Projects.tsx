"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react"; // icons
import phonestore from "../images/phonestore.png";
import airoom from "../images/airoom.png";
import Image from "next/image";

function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-20">
          {/* Project 1: Phone Store */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center space-y-8 lg:space-y-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Badge variant="outline" className="mb-4">
                FEATURED PROJECT
              </Badge>
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                PhoneStore – eCommerce Web Application
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A full-stack eCommerce application with product listings, a
                cart, secure checkout, and a comprehensive admin dashboard. It
                uses a React.js front end with Tailwind CSS for a responsive UI
                and Swiper.js for interactive product displays. The backend is
                built with Node.js and Express.js, using a MongoDB database to
                manage products, users, and orders.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">JWT</Badge>
                <Badge variant="secondary">Razorpay</Badge>
                <Badge variant="secondary">Express.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button asChild>
                  <a
                    href="https://vercel-phonestore-8yata8h9j-aditya-bankeys-projects.vercel.app/" // replace with your demo link
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/ADITYABANKEY07/vercel-phonestore" // replace with repo link
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Visit GitHub
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="relative"
            >
              <div className="bg-card rounded-lg p-4 border border-border/20">
                <Image
                  src={phonestore}
                  alt="Phone Store E-commerce Website Mockup"
                  className="w-full rounded"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Project 2: AI Room */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center space-y-8 lg:space-y-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:order-2"
            >
              <Badge variant="outline" className="mb-4">
                FEATURED PROJECT
              </Badge>
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                AI Room
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                An interactive AI room application that leverages Replicate AI.
                Users can transform normal rooms into furnished spaces with a
                single click, showcasing the integration of Drizzle, Neon, and
                Clerk for a seamless experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Replicate AI</Badge>
                <Badge variant="secondary">Drizzle</Badge>
                <Badge variant="secondary">Neon</Badge>
                <Badge variant="secondary">Clerk</Badge>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button asChild>
                  <a
                    href="#home" // replace with your demo link
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="#home" // replace with repo link
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Visit GitHub
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="relative lg:order-1"
            >
              <div className="bg-card rounded-lg p-4 border border-border/20">
                <Image
                  src={airoom}
                  alt="AI Room Project"
                  className="w-full rounded"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
