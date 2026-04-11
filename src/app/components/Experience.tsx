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
      title: "Frontend Developer Intern",
      company: "InciLo Logistics Private Limited • Bhopal",
      duration: "09/2024 - 12/2024",
      description: [
        "Developed responsive and user-friendly UI components using React.js, HTML, CSS, and JavaScript.",
        "Built reusable components using React’s component-based architecture to improve scalability.",
        "Integrated frontend with backend APIs to fetch and display dynamic data efficiently.",
        "Optimized UI performance and ensured mobile responsiveness across different devices.",
        "Identified and fixed UI bugs through testing and debugging, improving user experience.",
        "Collaborated with designers and backend developers to deliver visually consistent interfaces.",
        "Used Git and GitHub for version control and team collaboration.",
      ],
    },
    {
      title: "MERN Stack Trainee",
      company: "Cybrom Technology Pvt. Ltd. • Bhopal, Madhya Pradesh",
      duration: "08/2025 - 04/2026",
      description: [
        "Completed hands-on training in MongoDB, Express.js, React.js, and Node.js (MERN Stack).",
        "Developed full-stack web applications with authentication and RESTful API integration.",
        "Built real-world projects including a Task Management System and eCommerce features.",
        "Implemented CRUD operations and connected frontend with backend services.",
        "Gained practical experience in debugging, problem-solving, and deployment workflows.",
      ],
    },
  ];

  return (
    <div id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-space-grotesk mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="grid gap-6 justify-center sm:grid-cols-2 lg:grid-cols-2">
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
              className="w-full max-w-md"
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
