import { Container } from "@/components/ui/container";
import { SectionSubtitle, SectionTitle } from "@/components/ui/typhography";
import Hero from "@/features/landing-page/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 md:space-y-20">
      <Hero />

      {/* # PROFILE */}
      <Container
        id="profile"
        className="flex h-svh scroll-mt-28 flex-col justify-center space-y-10 md:space-y-20"
      >
        <SectionTitle sectionNumber={1}>PROFILE</SectionTitle>

        <div className="grid gap-6 p-2 md:grid-cols-3 md:grid-rows-3 md:gap-10">
          <div className="order-1 col-span-2 row-span-2 mx-auto space-y-4 p-2">
            <div className="mb-10 ml-2 flex w-fit items-center justify-center space-x-1.5 border-[1.5px] border-on-secondary bg-surface-dim px-2 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
              <span className="font-sans text-[8px] font-medium tracking-widest text-secondary/80">
                SYS_STATUS: <span className="pl-1">ONLINE</span>
              </span>
            </div>

            {/* Big ass text */}
            <div className="font-display text-7xl leading-14 font-black tracking-tighter select-none">
              <div className="absolute max-w-xl border text-primary-container/40 blur-sm">
                TURN UP THE SOUND. FEEL THE MOMENT.
              </div>

              <div className="relative max-w-xl text-on-surface">
                TURN UP THE SOUND. FEEL THE MOMENT.
              </div>
            </div>

            <div className="flex max-w-xl justify-center space-x-3">
              <div className="w-1.25 rounded-full bg-primary"></div>

              <div className="font-sans text-xs text-secondary">
                Highcall is a DJ based in Blitar, bringing a versatile blend of
                R&B, Hip-Hop, Amapiano, Afro, and Breakbeat to every set. With
                experience as a resident DJ at Caffe Di Blitar and Kopi Mantu,
                Highcall delivers energetic selections, smooth transitions, and
                a sound built to keep the crowd moving.
              </div>
            </div>
          </div>

          <div className="order-2 row-span-2">GONNA BE PHOTO</div>

          <div className="order-3">
            <SectionSubtitle>[01] THE SOUND</SectionSubtitle>
            <span className="text-on-surface">
              Dark, energetic, and built for movement. Highcall explores
              electronic sounds through heavy grooves, hypnotic textures, and
              high-energy club sets.
            </span>
          </div>

          <div className="order-4">
            <SectionSubtitle>[02] THE APPROACH</SectionSubtitle>
            <span>
              No fixed genre. No fixed formula. Just energy, rhythm, and
              atmosphere.
            </span>
          </div>

          <div className="order-5">
            <SectionSubtitle>[03] CURRENTLY</SectionSubtitle>
            <span>
              → DJ SETS → ORIGINAL PRODUCTIONS → COLLABORATIONS → OPEN FOR
              BOOKING
            </span>
          </div>
        </div>
      </Container>

      <div className="min-h-225"></div>
    </div>
  );
}
