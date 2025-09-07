"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedLink = ({ href, text, className }) => {
  const [hovered, setHovered] = useState(false);

  const letters = Array.from(text);

  const container = {
    visible: {
      transition: { staggerChildren: 0.01 },
    },
    hidden: {},
  };

  const child = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: -3, // small lift effect
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} relative flex`}
    >
      <motion.span
        className="flex"
        variants={container}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
      >
        {letters.map((letter, i) => (
          <motion.span key={i} variants={child} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </Link>
  );
};

export default AnimatedLink;
