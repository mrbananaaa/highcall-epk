"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/all";
import { useRef } from "react";
import PhotoCard from "./photo-card";
import { AnimatedElement } from "@/types/shared";
import { horizontalLoop } from "@/lib/gsap";

interface GalleryCarouselProps {
  images: readonly string[];
}

const GalleryCarousel = ({ images }: GalleryCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const itemElements = track.children;
      if (!itemElements.length) return;

      const loop = horizontalLoop(itemElements, {
        paused: true, // Do not autoplay; we want scroll to dictate position
        repeat: -1, // Loop infinitely internally
        paddingRight: 20,
      });

      Observer.create({
        target: containerRef.current, // Watch the carousel section
        type: "wheel,touch", // Listen to wheel spins and touch swipes
        preventDefault: true,
        onChangeY: (self) => {
          // self.deltaY tells us how fast/hard the user spun the wheel
          // We translate that directly into moving the timeline progress!
          // positive deltaY = wheel down, negative deltaY = wheel up
          let speedFactor = 0.003;
          let newProgress = loop.progress() + self.deltaY * speedFactor;

          gsap.to(loop, {
            progress: newProgress,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });

      const scaleElements = gsap.utils.toArray<AnimatedElement>(track.children);

      scaleElements.forEach((el) => {
        el.animation = gsap.to(el, {
          scale: 1.3,
          background: "green",
          zIndex: 100,
          duration: 0.3,
          ease: "power2.out",
          paused: true,
        });
      });
    },
    { dependencies: [images], scope: containerRef },
  );

  const handleMouseEnter = (e: React.MouseEvent<AnimatedElement>) =>
    e.currentTarget.animation?.play();
  const handleMouseLeave = (e: React.MouseEvent<AnimatedElement>) =>
    e.currentTarget.animation?.reverse();

  return (
    <div
      ref={containerRef}
      className="relative flex h-4/5 w-svw items-center justify-center overflow-hidden whitespace-nowrap select-none md:h-9/10 md:w-9/10 md:rounded-4xl md:shadow-lg md:shadow-white/5"
    >
      <div
        ref={trackRef}
        className="absolute flex w-max items-center space-x-5"
      >
        {!images || images.length < 1 ? (
          <div>NO IMAGE</div>
        ) : (
          images.map((imgURL) => (
            <PhotoCard
              key={crypto.randomUUID()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              imageURL={imgURL}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GalleryCarousel;
