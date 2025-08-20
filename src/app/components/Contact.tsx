"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-space-grotesk mb-8"
        >
          Contact
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-4 max-w-xl mx-auto"
        >
          I love building products that make life easier and more enjoyable. If
          you’re looking for someone who values design, accessibility, and
          teamwork — let’s create something meaningful together.
        </motion.p>

        {/* Email */}
        <motion.p 
                  initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
         className="text-accent mb-8">
          bankeyaditya@gmail.com
          </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aditya-bankey-20a66a1b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="hover:border-accent/50 bg-transparent"
            >
              <FaLinkedin className="w-5 h-5" />
            </Button>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ADITYABANKEY07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="hover:border-accent/50 bg-transparent"
            >
              <FaGithub className="w-5 h-5" />
            </Button>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Button
              variant="outline"
              size="icon"
              className="hover:border-accent/50 bg-transparent"
            >
              <FaTwitter className="w-5 h-5" />
            </Button> */}
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
