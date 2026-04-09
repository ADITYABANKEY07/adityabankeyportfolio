"use client";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-space-grotesk mb-4 text-center"
        >
          I'm a Full Stack MERN Developer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted mb-6"
        >
          Skilled in{" "}
          <span className="text-accent">
            MongoDB, Express.js, React.js, Node.js, JWT Authentication, RESTful APIs, and Tailwind CSS
          </span>
          , I build scalable, responsive, and user-friendly web applications with clean UI and efficient backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-muted-foreground leading-relaxed">
            Notable projects include{" "}
            <span className="font-semibold">PhoneStore</span> (a full-stack eCommerce web application with Razorpay integration) and{" "}
            <span className="font-semibold">Task Management App</span>, where users can create, manage, and track tasks with real-time status updates. I focus on building practical, real-world applications with strong functionality and clean design.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;