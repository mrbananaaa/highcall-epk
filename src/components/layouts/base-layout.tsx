import Header from "./header";
import { Container } from "../ui/container";
import { ScrollProvider } from "@/context/scroll-context";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col text-white">
      <div className="relative z-10 flex flex-1 flex-col">
        <ScrollProvider>
          <Header />
          <main id="smooth-wrapper" className="flex flex-1 flex-col lg:mt-10">
            <Container id="smooth-content" clean>
              <div className="absolute inset-0 -z-10 bg-grid bg-size-[40px_40px]"></div>
              {children}
            </Container>
          </main>
        </ScrollProvider>
      </div>
    </div>
  );
}
