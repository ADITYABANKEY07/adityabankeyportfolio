"use client";
import React from "react";
import { motion } from "framer-motion";

// react-icons
import { FaCss3Alt, FaReact, FaNodeJs, FaFigma, FaHtml5 } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

function TechStack() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Tech stack data

  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-400 w-6 h-6" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-900 dark:text-white w-6 h-6" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 w-6 h-6" />,
    },
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 w-6 h-6" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-6 h-6" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-600 w-6 h-6" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-6 h-6" /> },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-700 dark:text-white w-6 h-6" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-6 h-6" /> },
        {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-600 w-6 h-6" />,
    },
    { name: "Figma", icon: <FaFigma className="text-pink-500 w-6 h-6" /> },
  ];

  return (
    <div id="tech" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-muted mb-8"
        >
          Im currently looking to join a
          <span className="text-accent"> cross-functional</span> team
          <br />
          that values improving peoples lives through accessible design
        </motion.p>
        {/* Tech */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          viewport={{ once: true }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-16 h-16 rounded-lg bg-card border border-border/20 flex flex-col items-center justify-center hover:border-accent/50 transition-colors"
            >
              {tech.icon}
              <span className="text-xs mt-1">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TechStack;
