import Header from "./header";
import { Container } from "../ui/container";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col text-white">
      <div className="absolute inset-0 z-0 bg-grid bg-size-[40px_40px]"></div>

      <div className="relative z-10 flex flex-1 flex-col">
        <Header />
        <main className="flex flex-1 flex-col">
          <Container clean>{children}</Container>
        </main>
      </div>
    </div>
  );
}

/*
 * <div className="relative flex min-h-svh flex-col p-8">
 * <div className="absolute inset-0 bg-grid bg-size-[40px_40px]"></div>
 * <Header />
 *
 * <main className="max-w-svw">{children}</main>
 *</div>;
 * */

/*
 *
 * <div className="relative flex min-h-svh flex-col text-white">
 * <div className="absolute inset-0 z-0 bg-grid bg-size-[40px_40px]"></div>
 * <div className="relative z-10 flex flex-1 flex-col">
 * <Header />
 * <main className="flex flex-1 flex-col">{children}</main>
 * </div>
 * </div>
 * */
