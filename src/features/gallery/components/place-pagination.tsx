"use client";

import gsap from "gsap";
import { camelToTitleCase } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

interface PlacePaginationProps {
  places: string[];
  currentPlace: number;
  handleNext: () => void;
  handlePrev: () => void;
}

interface AnimatedElement extends SVGElement {
  animation?: gsap.core.Tween;
}

const PlacePagination = ({
  places,
  currentPlace,
  handleNext,
  handlePrev,
}: PlacePaginationProps) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const scaleBtn = gsap.utils.toArray<AnimatedElement>(".scale-btn");

      scaleBtn.forEach((el) => {
        el.animation = gsap.to(el, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
          paused: true,
        });
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = (e: React.MouseEvent<AnimatedElement>) =>
    e.currentTarget.animation?.play();
  const handleMouseLeave = (e: React.MouseEvent<AnimatedElement>) =>
    e.currentTarget.animation?.reverse();

  return (
    <div ref={containerRef} className="flex items-center space-x-4 select-none">
      <button
        className="cursor-pointer text-primary disabled:text-on-surface"
        onClick={handlePrev}
        disabled={currentPlace === 0}
      >
        <ChevronLeft
          className="scale-btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </button>

      <div className="pt-0.5 font-display text-xl leading-0 font-bold tracking-wider uppercase">
        {camelToTitleCase(places[currentPlace])}
      </div>

      <button
        className="cursor-pointer text-primary disabled:text-on-surface"
        onClick={handleNext}
        disabled={currentPlace === places.length - 1}
      >
        <ChevronRight
          className="scale-btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </button>
    </div>
  );
};

export default PlacePagination;
