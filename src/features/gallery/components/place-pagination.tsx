import { camelToTitleCase } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PlacePaginationProps {
  places: string[];
  currentPlace: number;
  handleNext: () => void;
  handlePrev: () => void;
}

const PlacePagination = ({
  places,
  currentPlace,
  handleNext,
  handlePrev,
}: PlacePaginationProps) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        className="cursor-pointer text-primary disabled:text-on-surface"
        onClick={handlePrev}
        disabled={currentPlace === 0}
      >
        <ChevronLeft />
      </button>

      <div className="pt-0.5 font-display text-xl leading-0 font-bold tracking-wider uppercase">
        {camelToTitleCase(places[currentPlace])}
      </div>

      <button
        className="cursor-pointer text-primary disabled:text-on-surface"
        onClick={handleNext}
        disabled={currentPlace === places.length - 1}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default PlacePagination;
