import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/typhography";
import ContactSection from "@/features/landing-page/components/contact-section";
import GallerySection from "@/features/landing-page/components/gallery-section";
import Hero from "@/features/landing-page/components/hero";
import ProfileSection from "@/features/landing-page/components/profile-section";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 md:space-y-20">
      <Hero />

      {/* # PROFILE */}
      <Container
        id="profile"
        className="min-h-dvh scroll-mt-20 space-y-10 md:min-h-svh"
      >
        <SectionTitle sectionNumber={1}>PROFILE</SectionTitle>
        <ProfileSection />
      </Container>

      {/* CONTACT */}
      <Container id="contact" className="min-h-dvh scroll-mt-20 md:min-h-svh">
        <SectionTitle sectionNumber={2}>CONTACT</SectionTitle>
        <ContactSection />
      </Container>

      {/* # GALLERY */}
      <Container id="gallery" className="min-h-dvh scroll-mt-20 md:min-h-svh">
        <SectionTitle sectionNumber={3}>GALLERY</SectionTitle>
        <GallerySection />
      </Container>
    </div>
  );
}
