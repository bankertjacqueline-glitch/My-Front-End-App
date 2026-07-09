export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
      <main className="w-full max-w-2xl bg-white shadow-md rounded-lg p-10">
        <header className="flex items-center gap-6">
          <div className="h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">JB</div>
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Hi — I’m Jacs Bankert</h1>
            <p className="text-gray-600 mt-1">New to coding. Building things and learning.</p>
          </div>
        </header>

        <section className="mt-8 text-gray-800">
          <h2 className="text-xl font-medium">About me</h2>
          <p className="mt-2 text-gray-600">
            I’m an intern at Perin Health and I enjoy interning here. This site is a
            introduction to who I am, what I’m learning, and how to contact me.
          </p>
        </section>

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Skills</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>HTML & CSS basics</li>
              <li>JavaScript / React</li>
              <li>Learning Next.js</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium">Currently learning</h3>
            <p className="mt-2 text-gray-600">Building projects, debugging, and improving UI design.</p>
          </div>
        </section>

        <section className="mt-6">
          <h3 className="font-medium">Contact</h3>
          <p className="mt-2 text-gray-600">Email: <a href="mailto:bankert.jacqueline@gmail.com" className="text-blue-600">bankert.jacqueline@gmail.com</a></p>
          <p className="mt-1 text-gray-600">GitHub: <a href="https://github.com/bankertjacqueline-glitch" target="_blank" rel="noreferrer" className="text-blue-600">bankertjacqueline-glitch</a></p>
        </section>

        <footer className="mt-8 text-sm text-gray-500">
          <p>Tip: Edit <span className="font-medium">app/page.tsx</span> to update this page.</p>
        </footer>
      </main>
    </div>
  );
}
