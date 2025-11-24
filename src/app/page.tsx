"use client";

import { motion } from "motion/react";
import { fadeUpAnimation } from "@/lib/motion_utils";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <motion.div className="text-center" {...fadeUpAnimation(20, 0.5, 0)}>
          <motion.h1
            className="text-4xl font-bold tracking-tight"
            {...fadeUpAnimation(20, 0.5, 0.1)}
          >
            Organization Frontend
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            {...fadeUpAnimation(20, 0.5, 0.2)}
          >
            All features of the organization are included in this frontend.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
