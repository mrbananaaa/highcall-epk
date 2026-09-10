import { memo } from "react";
import HeroBanner from "./hero-banner";
import { MarqueRow, MarqueText } from "./marque";

const rows = [
  { text: "LANTAI DANSA TIDAK PERNAH BOHONG.", reverse: false },
  { text: "SATU FREKUENSI SEMALAMAN.", reverse: true },
  { text: "LANTAI DANSA TIDAK PERNAH BOHONG.", reverse: false },
  { text: "SATU FREKUENSI SEMALAMAN.", reverse: true },
] as const;

const ScrollingText = memo(() => {
  return (
    <>
      {rows.map((row, i) => (
        <MarqueRow key={`${row.text}-${i}`} reverse={row.reverse}>
          <MarqueText text={row.text} />
        </MarqueRow>
      ))}
    </>
  );
});

export default function Hero() {
  return (
    <div className="mt-6 flex h-svh items-center justify-center md:mt-0">
      {/* container */}
      <div className="grid h-4/5 w-svw grid-cols-1 grid-rows-1 md:mt-10 md:h-4/5 md:w-9/10 md:rounded-4xl md:shadow-lg md:shadow-white/5">
        {/* background */}
        <div className="relative z-10 col-start-1 row-start-1 h-full min-h-0 w-full min-w-0 overflow-hidden md:rounded-4xl">
          {/* top-left */}
          <div className="absolute -top-10 flex flex-col md:top-5 md:left-5 md:-translate-x-1/2 md:translate-y-0 md:-rotate-40">
            <ScrollingText />
          </div>

          {/* bottom-right */}
          <div className="absolute bottom-0 flex flex-col md:right-0 md:bottom-0 md:translate-x-1/2 md:translate-y-0 md:-rotate-40">
            <ScrollingText />
          </div>
        </div>

        {/* dark mask */}
        <div className="z-10 col-start-1 row-start-1 h-full min-h-0 w-full min-w-0 overflow-hidden bg-background/20" />

        {/* foreground */}
        <div className="z-20 col-start-1 row-start-1 flex h-full min-h-0 w-full min-w-0 items-center justify-center overflow-hidden">
          <HeroBanner />
        </div>
      </div>
    </div>
  );
}
