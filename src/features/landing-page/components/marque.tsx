"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface MarqueRowProps {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
}

export function MarqueRow({
  children,
  speed = 1,
  reverse = false,
}: MarqueRowProps) {
  const rowRef = useRef(null);

  const repeat = 3;

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"], // Tracks from entering viewport to completely exiting
  });

  const moveDistance = 20 * speed;
  const startX = reverse ? -moveDistance : 0;
  const endX = reverse ? 0 : -moveDistance;

  const x = useTransform(scrollYProgress, [0, 1], [`${startX}%`, `${endX}%`]);

  return (
    <div
      ref={rowRef}
      className="flex w-full overflow-hidden whitespace-nowrap select-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{
          once: false,
          amount: 0.3,
        }}
        style={{ x }}
        className="flex space-x-5"
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i}>{children}</div>
        ))}
      </motion.div>
    </div>
  );
}

interface MarqueTextProps {
  text: string;
}

export function MarqueText({ text }: MarqueTextProps) {
  const words = text.split(" ");

  return (
    <div className="flex items-center space-x-2">
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className={i % 2 === 0 ? "marque-stroke-text" : "marque-solid-text"}
        >
          {w}{" "}
        </span>
      ))}
    </div>
  );
}
