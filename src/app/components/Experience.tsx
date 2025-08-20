"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "InciLo Logistics Private Limited • Bhopal",
      duration: "09/2024 - 12/2024",
      description: [
        "Contributed to both frontend development and system enhancements, ensuring responsive and intuitive user experiences.",
        "Developed dynamic web interfaces using HTML, CSS, and JavaScript, with component-based architecture in ReactJS.",
        "Collaborated with backend teams to integrate APIs and ensure seamless frontend-backend communication.",
        "Performed debugging and testing to identify and fix issues, optimizing application performance and usability.",
        "Participated in cross-functional team discussions to align design, functionality, and business goals.",
        "Used Git for version control, managing code changes efficiently in a collaborative environment.",
      ],
    },
  ];

  return (
    <div id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-space-grotesk mb-12 text-center"
        >
          Work Experience
        </motion.h2>

<div
  className={`grid gap-6 justify-center ${
    experiences.length === 1
      ? "grid-cols-1 place-items-center" // ✅ single card centered
      : "sm:grid-cols-2 lg:grid-cols-3" // ✅ auto layout for 2+ cards
  }`}
>
  {experiences.map((item, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="w-full max-w-md" // ✅ keeps each card a nice width
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer bg-card border-border/20 p-6 hover:border-accent/50 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-semibold font-space-grotesk mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.company}
                </p>
                <Badge variant="secondary" className="text-xs">
                  VIEW DETAILS
                </Badge>
              </div>
            </div>
          </Card>
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{item.title}</DialogTitle>
            <DialogDescription>
              {item.company} • {item.duration}
            </DialogDescription>
          </DialogHeader>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            {item.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </motion.div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Experience;
