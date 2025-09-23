"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import "../../styles/sticky-scroll-reveal.scss";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Adjust breakpoints to trigger earlier
    const cardsBreakpoints = content.map((_, index) => (index + 0.3) / (cardLength + 0.6));
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "linear-gradient(135deg, #FF7A7A, #4ECDCF)", // Main theme gradient
    "#f8fafc", // Light background
    "#f1f5f9", // Slightly darker light background
  ];
  const linearGradients = React.useMemo(() => [
    "linear-gradient(135deg, #FF7A7A, #4ECDCF)", // Your theme colors
    "linear-gradient(135deg, #4ECDCF, #FF7A7A)", // Reversed theme colors
    "linear-gradient(135deg, #FF7A7A, #4ECDCF)", // Your theme colors
  ], []);

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="sticky-scroll-container"
      ref={ref}
    >
      {/* Header */}
      <div className="solutions-header">
        <h2 className="main-font solutions-title">Solutions</h2>
        <h3 className="main-font solutions-subtitle">Tailored Learning for Every Audience</h3>
        <p className="para-font solutions-description">
          Discover how our AI-powered platform adapts to meet the unique needs of enterprises, universities, and individuals.
        </p>
      </div>
      
      <div className="sticky-scroll-content">
        <div className="sticky-scroll-text">
          <div className="sticky-scroll-text-wrapper">
            {content.map((item, index) => (
              <div key={item.title + index} className="sticky-scroll-item">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="sticky-scroll-title main-font"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="sticky-scroll-description para-font"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="sticky-scroll-spacer" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky-scroll-visual",
            contentClassName,
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
