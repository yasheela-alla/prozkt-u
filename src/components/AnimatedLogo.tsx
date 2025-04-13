"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

type AnimatedLogoProps = {
  open?: boolean;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

export function AnimatedLogo({
  open = true,
  size = "md",
  showText = true
}: AnimatedLogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center text-black dark:text-white py-1 relative z-20",
        open && showText ? "space-x-2" : "justify-center"
      )}
    >
      <motion.div
        className={cn(
          "bg-gradient-to-br from-primary to-primary/70 rounded-lg flex-shrink-0 flex items-center justify-center",
          sizeClasses[size]
        )}
        initial={{ scale: 1, rotate: 0, y: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 3, 0],
          y: [0, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-primary/40 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />

        <motion.span
          className={cn("font-bold text-white relative z-10", textSizeClasses[size])}
          initial={{ opacity: 0.9 }}
          animate={{
            opacity: [0.9, 1, 0.9],
            textShadow: [
              "0 0 5px rgba(255,255,255,0)",
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 5px rgba(255,255,255,0)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          P
        </motion.span>
      </motion.div>

      {open && showText && (
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -5 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <motion.span
            className={cn(
              "font-semibold text-black dark:text-white whitespace-nowrap",
              textSizeClasses[size]
            )}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
          >
            prozkt
          </motion.span>
        </motion.div>
      )}
    </Link>
  );
}
