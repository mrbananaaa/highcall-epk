import Image from "next/image";

interface PhotoCardProps extends React.ComponentPropsWithoutRef<"div"> {
  imageURL: string;
  ref?: React.Ref<HTMLDivElement>;
}

const PhotoCard = ({ imageURL, ref, ...props }: PhotoCardProps) => {
  return (
    <div
      ref={ref}
      className="relative h-70 w-50 cursor-pointer overflow-hidden rounded-2xl grayscale hover:filter-none"
      {...props}
    >
      <Image
        src={`/images/${imageURL}`}
        alt={`${imageURL}`}
        fill
        sizes="200px"
        quality={100}
        className="object-cover"
      />
    </div>
  );
};

export default PhotoCard;
