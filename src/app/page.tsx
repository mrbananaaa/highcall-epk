import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
        <h1 className="text-6xl font-bold tracking-tighter text-primary">HIGHCALL</h1>
        <p className="mt-4 text-secondary text-lg">Under Construction</p>
      </main>
    </>
  );
}
