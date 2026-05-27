"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react"; // icons
import phonestore from "../images/phonestore.png";
import tsm from "../images/taskmanager.png";
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
      BaseLayerCase – Full Stack MERN eCommerce Application
    </h3>

    <p className="text-muted-foreground mb-6 leading-relaxed">
      A scalable full-stack MERN eCommerce application built using
      MongoDB, Express.js, React.js, and Node.js with responsive UI
      and reusable components. Features include JWT authentication,
      Google OAuth login, Redux Toolkit state management, Razorpay
      payment integration, protected routes, cart management, order
      tracking, and a complete admin dashboard for inventory and
      product management.
    </p>

    <div className="flex flex-wrap gap-2 mb-6">
      <Badge variant="secondary">React.js</Badge>
      <Badge variant="secondary">Redux Toolkit</Badge>
      <Badge variant="secondary">Tailwind CSS</Badge>
      <Badge variant="secondary">JWT</Badge>
      <Badge variant="secondary">Google OAuth</Badge>
      <Badge variant="secondary">Razorpay</Badge>
      <Badge variant="secondary">Express.js</Badge>
      <Badge variant="secondary">Node.js</Badge>
      <Badge variant="secondary">MongoDB</Badge>
    </div>

    {/* Buttons */}
    <div className="flex gap-4">
      <Button asChild>
        <a
          href="https://blc-ecom.vercel.app/" // replace with your demo link
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Demo
        </a>
      </Button>

      <Button variant="outline" asChild>
        <a
          href="https://github.com/ADITYABANKEY07/BlcEcom"
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
        alt="BaseLayerCase MERN eCommerce Website Mockup"
        className="w-full rounded"
      />
    </div>
  </motion.div>
</motion.div>

          {/* Project 2: Task Management App */}
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
                Task Management App
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                A full-stack Task Management application built using the MERN
                stack. Users can create, update, delete, and track daily tasks
                with status indicators like Pending, Completed, and Partial
                Completed. The app includes authentication, user-specific task
                handling, and a clean UI for efficient productivity management.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express.js</Badge>
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">JWT</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button asChild>
                  <a
                    href="https://task-manager-app-woad-ten.vercel.app/" // replace with your demo link
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </a>
                </Button>

                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/ADITYABANKEY07/mern_learn_library/tree/main/17_task_management" // replace with repo link
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
                  src={tsm} // your task management image
                  alt="Task Management App"
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
