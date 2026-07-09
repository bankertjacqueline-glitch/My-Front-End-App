export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
      <main className="w-full max-w-3xl rounded-[28px] border border-slate-200/80 bg-white/95 p-10 shadow-2xl shadow-slate-200/80 backdrop-blur-xl">
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-blue-200/60">JB</div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Hello, I’m Jacs</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
              I build beginner-friendly coding projects.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              I’m an intern at Perin Health learning front-end and back-end development while building a polished introduction page.
            </p>
          </div>
        </header>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">About me</h2>
            <p className="mt-3 text-slate-600 leading-7">
              I enjoy working with the Perin Health patch, learning new technologies, and making my first portfolio-style website.
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Currently learning</h2>
            <p className="mt-3 text-slate-600 leading-7">
              Front-end development, back-end basics, and how to use circuit boards in projects.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-slate-900">Skills</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>HTML + CSS basics</li>
              <li>JavaScript / React</li>
              <li>Reading electrode data</li>
            </ul>
          </div>

          <div className="rounded-[24px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-slate-900">Goals</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>Build more UI projects</li>
              <li>Learn full-stack development</li>
              <li>Share what I learn</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-slate-200/80 bg-slate-50 p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
          <p className="mt-3 text-slate-600">
            Email: <a href="mailto:bankert.jacqueline@gmail.com" className="text-blue-600 hover:text-blue-700">bankert.jacqueline@gmail.com</a>
          </p>
          <p className="mt-2 text-slate-600">
            GitHub: <a href="https://github.com/bankertjacqueline-glitch" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">bankertjacqueline-glitch</a>
          </p>
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500">
          <p>Tip: Edit <span className="font-medium text-slate-900">app/page.tsx</span> to update this page.</p>
        </footer>
      </main>
    </div>
  );
}
