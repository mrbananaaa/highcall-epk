"use client";

import { IMGS } from "@/config/constants";
import GalleryCarousel from "@/features/gallery/components/gallery-carousel";
import PlacePagination from "@/features/gallery/components/place-pagination";
import { getObjKeys } from "@/lib/utils";
import { useState } from "react";

export default function Gallery() {
  const places = getObjKeys(IMGS);
  const [currentPlace, setCurrentPlace] = useState(0);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
      <PlacePagination
        places={places}
        currentPlace={currentPlace}
        handleNext={() =>
          setCurrentPlace((prev) => Math.min(prev + 1, places.length - 1))
        }
        handlePrev={() => setCurrentPlace((prev) => Math.max(prev - 1, 0))}
      />

      <GalleryCarousel images={IMGS[places[currentPlace]]} />
    </div>
  );
}
