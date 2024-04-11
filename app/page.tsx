export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <div className="grow shrink-0 flex flex-col justify-center items-center">
        <a href="mailto:hello@complexdatacollective.org">
          <img
            src="/codaco.png"
            alt="CODACO logo"
            className="w-full h-auto max-w-2xl"
          />
        </a>
        <p>
          <a href="https://github.com/complexdatacollective">
            https://github.com/complexdatacollective
          </a>
        </p>
      </div>
      <footer className="text-center text-sm text-gray-500 shrink grow-0 p-10 gap-6 flex flex-col">
        <p>
          <a href="/docs/codaco-bylaws.pdf">By-laws</a>.
        </p>
        Copright © {new Date().getFullYear()} Complex Data Collective
      </footer>
    </main>
  );
}
