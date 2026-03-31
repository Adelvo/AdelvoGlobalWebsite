export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-24">
      <div className="relative z-10 max-w-3xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-fuchsia-300/80">
          Lightswind UI
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Smokey Cursor installed and running
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          This Next.js app uses the real Lightswind Smokey Cursor component globally through
          the root layout, so the effect appears across the entire site.
        </p>
      </div>
    </main>
  );
}
