import Image from "next/image";
import LogoPNG from "../../public/logo-highcall.png";
import Header from "@/components/Header";
import HeroLogo from "@/components/hero-logo";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {/* HERO */}
        <section className="mt-20">
          <HeroLogo />
          <div className="flex flex-col items-center space-y-8">
            <Image
              alt="highcall"
              src={LogoPNG}
              // width={715}
              // height={230}
              loading="eager"
              className="select-none lg:h-[230px] lg:w-[715px]"
            />

            <div className="text-center font-display">
              <h2 className="text-xl font-bold tracking-tight text-on-surface">
                LANTAI DANSA TIDAK PERNAH{" "}
                <span className="text-primary">BOHONG</span>. <br /> SATU{" "}
                <span className="text-primary">FREKUENSI</span>.{" "}
                <span className="text-primary">SEMALAMAN</span>.
              </h2>
              <h3 className="pt-3 font-semibold text-on-secondary-container">
                BLITAR, ID — OPEN FOR BOOKING
              </h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
