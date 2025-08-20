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
          I'm a Full Stack Developer.
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
            React.js, Node.js, Express.js, MongoDB, and Tailwind CSS
          </span>
          , I build responsive, user-friendly, and scalable web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-muted-foreground leading-relaxed">
            Notable projects include\
            <span className="font-semibold"> PhoneStore</span> (an eCommerce web app
            with Razorpay integration) and an
            <span className="font-semibold"> AI-Powered Interior Design Generator</span>
            . I enjoy making clean UI with solid backend architecture to
            create impactful digital products.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
