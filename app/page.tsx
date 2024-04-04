export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <div className="grow shrink-0 flex justify-center items-center">
        <a href="mailto:developers@coda.co">
          <img
            src="/codaco.png"
            alt="CODACO logo"
            className="w-full h-auto max-w-2xl"
          />
        </a>
      </div>
      <footer className="text-center text-sm text-gray-500 shrink grow-0 p-10 gap-6 flex flex-col">
        <p>
          <a
            href="/codaco-bylaws.pdf"
            className="font-bold hover:underline hover:underline-offset-4"
          >
            By-laws
          </a>
          .
        </p>
        Copright © {new Date().getFullYear()} Complex Data Collective
      </footer>
    </main>
  );
}
