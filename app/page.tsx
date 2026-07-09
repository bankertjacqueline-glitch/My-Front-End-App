export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
      <main className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-white/95 p-8 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.35)] text-center">
        <header className="relative flex flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl heading-underline">
            Hi, I’m Jacs Bankert
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg subtitle-underline">
            I’m an intern at Perin Health learning front-end and back-end development while building an introduction page.
          </p>
        </header>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-slate-200/70 bg-sky-100 p-5 shadow-sm text-center backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-slate-900 subtitle-underline">About me</h2>
            <p className="mt-3 text-slate-600 leading-7">
              I enjoy working with the Perin Health patch, learning new technologies, and making my first website.
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-200/70 bg-sky-100 p-5 shadow-sm text-center backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-slate-900 subtitle-underline">Currently learning</h2>
            <p className="mt-3 text-slate-600 leading-7">
              Front-end development, back-end basics, and how to use circuit boards in projects.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-slate-200/70 bg-sky-100 p-5 shadow-sm text-center backdrop-blur-sm">
            <h3 className="text-lg font-medium text-slate-900 subtitle-underline">Skills</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>Understanding new topics</li>
              <li>Developing and making new experiments</li>
              <li>Reading electrode data</li>
            </ul>
          </div>

          <div className="rounded-[24px] border border-slate-200/70 bg-sky-100 p-5 shadow-sm text-center backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-900 subtitle-underline">Contact</h3>
            <p className="mt-3 text-slate-600">
              Email: <a href="mailto:bankert.jacqueline@gmail.com" className="text-blue-600 hover:text-blue-700">bankert.jacqueline@gmail.com</a>
            </p>
            <p className="mt-3 text-slate-600">
              GitHub: <a href="https://github.com/bankertjacqueline-glitch" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">bankertjacqueline-glitch</a>
            </p>
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500">
          <p>Tip: Edit <span className="font-medium text-slate-900">app/page.tsx</span> to update this page.</p>
        </footer>
      </main>
    </div>
  );
}
