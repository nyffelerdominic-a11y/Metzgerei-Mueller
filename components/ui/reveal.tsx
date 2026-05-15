"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.06,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion(Tag);

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      custom={delay}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
