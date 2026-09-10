import Gallery from "./gallery";

export default function GallerySection() {
  return (
    <div className="flex h-[70svh] w-full items-center justify-center">
      <div className="hidden h-full w-full md:block">
        <Gallery />
      </div>

      <div className="md:hidden">
        <h1 className="text-center font-display text-5xl font-bold text-primary">
          Aww Snap!
        </h1>
        <p className="mt-4 max-w-sm text-center text-xl leading-tight font-medium">
          Gallery section only available on bigger screen device.
        </p>
      </div>
    </div>
  );
}
