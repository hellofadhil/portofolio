"use client";
import { DATA } from "@/app/data/resume";
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper";
import { motion } from "framer-motion";

export default function WorkExperience() {
  return (
    <ScrollAnimationWrapper>
      <section id="experience" className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Work Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            {DATA.experience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l border-border last:pb-0"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-muted-foreground mb-1">
                  {experience.company}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {experience.duration}
                </p>
                <ul className="text-muted-foreground list-disc pl-5">
                  {experience.description.split("\n").map((line, index) => (
                    <li key={index}>{line.trim()}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
}
