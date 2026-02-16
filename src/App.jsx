function App() {
  const projects = [
    { id: 1, title: 'Төсөл 1', desc: 'Энд таны төслийн тайлбар байрлана.', tech: ['React', 'Tailwind'] },
    { id: 2, title: 'Төсөл 2', desc: 'Энд таны төслийн тайлбар байрлана.', tech: ['Node.js', 'MongoDB'] },
    { id: 3, title: 'Төсөл 3', desc: 'Энд таны төслийн тайлбар байрлана.', tech: ['TypeScript', 'Vite'] },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)] pointer-events-none" />

      <main className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero Section */}
        <section id="hero" className="mb-24 sm:mb-32">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4 animate-fade-in">
            Сайн байна уу
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Намайг{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              pak jiwoo
            </span>
            {' '}гэдэг.
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Би <span className="text-emerald-400 font-medium">Vibecoder</span>.
          </p>
          <p className="mt-6 text-zinc-500 max-w-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Веб хөгжүүлэлт, дижитал шийдлүүдээр хичээнгүйлэн ажилладаг хөгжүүлэгч.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 sm:mb-32 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 flex items-center gap-2">
            <span className="text-emerald-400">#</span>
            Миний төслүүд
          </h2>
          <p className="text-zinc-500 mb-10">Сүүлийн үеийн төслүүдээс заримыг хараарай.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <article
                key={project.id}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-emerald-500/5"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 flex items-center gap-2">
            <span className="text-emerald-400">#</span>
            Холбоо барих
          </h2>
          <p className="text-zinc-500 mb-8">Холбогдохыг хүсвэл доорх хэлбэр ашиглана уу.</p>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-10 max-w-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Нэр
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="Таны нэр"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Имэйл
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Мессеж
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  placeholder="Таны мессеж энд..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-semibold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                Илгээх
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Vibecoder. Бүх эрх хуулиар хамгаалагдсан.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
