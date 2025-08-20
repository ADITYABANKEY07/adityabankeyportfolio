"use client";
import React from "react";
import Image from "next/image";
import avatar from "../images/avatar.png";
import { motion } from "framer-motion";

const typewriter = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};

const charAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection() {
  const text = "Full Stack Developer";

  // Using inline SVG for a simple, self-contained icon
  const AvatarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-44 h-44 rounded-full object-cover text-gray-400"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.749.792H4.502a.75.75 0 0 1-.75-.792Z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Function to create a simple PDF and return a data URL
  const createPdfDataUrl = () => {
    // A simple PDF content
    const pdfContent = `
      %PDF-1.4
      1 0 obj
      << /Type /Catalog /Pages 2 0 R >>
      endobj
      2 0 obj
      << /Type /Pages /Kids [3 0 R] /Count 1 >>
      endobj
      3 0 obj
      << /Type /Page /Parent 2 0 R
         /MediaBox [0 0 612 792]
         /Contents 4 0 R
         /Resources << /ProcSet [/PDF /Text]
                       /Font << /F1 5 0 R >>
                    >>
      >>
      endobj
      4 0 obj
      << /Length 59 >>
      stream
      BT
      /F1 24 Tf
      100 700 Td
      (Resume) Tj
      ET
      endstream
      endobj
      5 0 obj
      << /Type /Font /Subtype /Type1 /Name /F1 /BaseFont /Helvetica >>
      endobj
      xref
      0 6
      0000000000 65535 f 
      0000000010 00000 n 
      0000000060 00000 n 
      0000000121 00000 n 
      0000000281 00000 n 
      0000000371 00000 n 
      trailer
      << /Size 6 /Root 1 0 R >>
      startxref
      468
      %%EOF
    `;
    const base64Pdf = btoa(pdfContent);
    return `data:application/pdf;base64,${base64Pdf}`;
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
          className="mb-8"
        >
          <p className="text-muted mb-4 text-4xl">
            Hello! I Am <span className="text-accent">Aditya Bankey</span>
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-12 mb-16">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [10, -10] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
              }}
              className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent p-1 glow-effect shadow-xl"
            >
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                {/* Replaced Image with a generic SVG avatar to avoid import errors */}
                <Image
                  src={avatar}
                  width={200}
                  height={200}
                  alt="Aditya Bankey"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Typewriter Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-left max-w-2xl gradient-text"
          >
            <motion.h1
              variants={typewriter}
              className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 text-nowrap"
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={charAnimation}
                  className={char === " " ? "inline-block w-2" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            {/* Flex container for the buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              {/* Corrected Contact Me Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 rounded-full font-semibold border-2 transition-transform duration-300"
                  style={{
                    borderColor: "var(--primary-foreground)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  Contact Me
                </a>
              </motion.div>

              {/* Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <a
                  href="/AdityaBankeyResume.pdf"
                  download="AdityaBankeyResume.pdf"
                  className="inline-block px-8 py-3 rounded-full font-semibold border-2 transition-transform duration-300"
                  style={{
                    borderColor: "var(--primary-foreground)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
