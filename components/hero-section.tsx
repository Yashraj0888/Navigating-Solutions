"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById("solutions");
    solutionsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Floating Bubbles */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, index) => {
            const size = Math.random() * 10 + 5; // Increased bubble size range
            const randomX = Math.random() * window.innerWidth;
            const randomY = window.innerHeight + 100;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: randomX,
                  y: randomY,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                  y: [-100, window.innerHeight + 100],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  delay: Math.random() * 1,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: `${size}px`,
                  height: `${size}px`,
                }}
                className="rounded-full bg-primary/20"
              />
            );
          })}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
        >
          Navigating Exercise Solutions
          <br />
          Made Simple
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Find comprehensive solutions to your programming exercises with
          detailed explanations and best practices.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button size="lg" className="group" onClick={scrollToSolutions}>
            View Solutions
            <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </div>

      {/* Animated Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-5 h-8 border-2 border-muted-foreground rounded-full flex items-start p-1"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1 bg-muted-foreground rounded-full"
          />
        </motion.div>
        <span className="text-sm text-muted-foreground">Scroll</span>
      </motion.div>
    </motion.section>
  );
}
