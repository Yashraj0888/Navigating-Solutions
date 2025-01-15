"use client";

import { motion } from "framer-motion";
import { SolutionCard } from "./solution-card";
import { Code2, FileCode2, GitBranch, Terminal, Database, Blocks } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      icon: Code2,
      title: "Normal Greetings",
      description: "Enter your name to generate simple and personalized greetings for daily use.",
      link: "https://yashraj_greeting.bootcamp.aganitha.ai/", // Link to algorithm solutions
    },
    {
      icon: FileCode2,
      title: "Kaminari-Style Greetings",
      description: "Type your name to create energetic and dynamic greetings inspired by Kaminari.",
      link: "https://yashraj_kaminari.bootcamp.aganitha.ai/", // Link to data structures solutions
    },
    {
      icon: GitBranch,
      title: "E-commerce Website",
      description: "Explore a personalized shopping experience for your e-commerce needs.",
      link: "https://yashraj_product.bootcamp.aganitha.ai/", // Link to design patterns solutions
    },
    
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Available Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Browse through our collection of programming exercise solutions across different categories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              {...solution}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
