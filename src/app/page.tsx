import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-24">
        <h1 className="text-6xl font-bold tracking-tighter text-primary">
          HIGHCALL
        </h1>
        <p className="mt-4 text-lg text-secondary">Under Construction</p>
      </main>
    </>
  );
}
