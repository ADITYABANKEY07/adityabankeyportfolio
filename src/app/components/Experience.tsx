"use client";
import React from "react";
import { motion } from "framer-motion";
import {Card} from "@/components/ui/card"; // ✅ default import (avoid export * issue)
import {Badge} from "@/components/ui/badge";

function Experience() {
  // animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

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

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2, // stagger cards
              }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border/20 p-6 hover:border-accent/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <div className="w-6 h-6 rounded bg-accent"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      CIB on the Mobile
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Take your client onboard seamlessly by our amazing tool of
                      digital onboard process.
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      LEARN MORE
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
