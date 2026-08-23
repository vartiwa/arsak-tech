import React from "react";
import { motion } from "framer-motion";

export const FlowLine = ({
  length = 28,
  delay = 0,
  horizontal = false,
  color = "#38bdf8",
}) => (
  <div
    className={
      horizontal
        ? "relative h-px bg-slate-800/90 flex items-center"
        : "relative w-px bg-slate-800/90 mx-auto flex justify-center"
    }
    style={horizontal ? { width: length } : { height: length }}
  >
    {/* Traveling Directional Arrow Indicator */}
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none"
      style={
        horizontal
          ? { top: "-6px" }
          : { left: "-6px" }
      }
      animate={
        horizontal
          ? { left: ["0%", "85%"], opacity: [0.3, 1, 1, 0] }
          : { top: ["0%", "85%"], opacity: [0.3, 1, 1, 0] }
      }
      transition={{
        duration: 1.4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
        repeatDelay: 0.3,
      }}
    >
      {horizontal ? (
        /* Right-pointing Arrow Head */
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 4 2.5 L 8 6.5 L 4 10.5"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        /* Downward-pointing Arrow Head */
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 2.5 4 L 6.5 8 L 10.5 4"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.div>
  </div>
);
