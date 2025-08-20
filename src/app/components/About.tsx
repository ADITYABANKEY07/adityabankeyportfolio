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
          viewport={{ once: true }} // animate only once
          className="text-3xl font-bold font-space-grotesk mb-4 text-center"
        >
          Im a Software Engineer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted mb-2"
        >
          Currently, Im a Software Engineer at
          <span className="text-accent"> TechStack</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mt-12"
        >
          <p className="text-muted-foreground leading-relaxed">
            A self-taught UI/UX designer - functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
