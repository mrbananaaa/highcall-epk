import Image from "next/image";

interface VisualFeedProps {
  feedNumber: string;
  title: string;
  alt: string;
  image: string;
  width: number;
  height: number;
}

export function VisualFeed({
  feedNumber,
  title,
  alt,
  image,
  width,
  height,
}: VisualFeedProps) {
  return (
    <div className="group flex h-auto w-72 cursor-pointer flex-col overflow-hidden rounded-sm border-[1.5px] border-secondary-container bg-background transition-all duration-750 hover:scale-110 hover:border-primary">
      <div className="flex items-center justify-between p-4 font-sans text-[9px] font-semibold text-secondary-container/80 transition-colors duration-750 group-hover:text-primary">
        <span className="border border-secondary-container/80 bg-surface p-2 transition-colors duration-750 group-hover:border-primary/80">
          VISUAL_FEED // {feedNumber}
        </span>
        <span>{title}</span>
      </div>

      <Image
        alt={alt}
        src={`${image}`}
        width={width}
        height={height}
        className="grayscale transition-all duration-750 group-hover:filter-none"
      />
    </div>
  );
}
