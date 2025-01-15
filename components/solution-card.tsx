"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  link: string;
}

export function SolutionCard({ title, description, icon: Icon, delay = 0, link }: SolutionCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      className="group relative w-full max-w-[400px] h-[400px] bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] border border-border/50 flex flex-col"
    >
      <Link href={link}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex-1 overflow-y-auto p-8">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <Icon className="w-12 h-12 text-primary" />
          </motion.div>

          <h3 className="text-2xl font-semibold mb-4 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.3 }}
          className="absolute bottom-5 left-0 right-0 p-4"
        >
          <Button 
            variant="ghost" 
            className="group w-full justify-between hover:bg-primary hover:text-primary-foreground"
          >
            View Solutions
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </Link>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}
