export default function About() {
  return (
    <section id="about" className="w-full py-14">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl">
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
            {/* Avatar placeholder */}
            <div className="mx-auto h-44 w-44 rounded-2xl border border-white/10 bg-white/10" />

            <div>
              <p className="text-xs tracking-widest text-white/70">ABOUT / À PROPOS</p>

              <h2 className="mt-2 text-2xl font-semibold text-white">
                FR — À propos
              </h2>
              <p className="mt-3 leading-relaxed text-white/85">
                Étudiant en informatique au CESI Rouen, je développe des projets concrets
                en programmation (C/C++), développement web (React/TypeScript) et systèmes.
                J’aime travailler en équipe, structurer une architecture claire, et apprendre
                rapidement de nouvelles notions pour livrer un résultat propre.
              </p>

              <h2 className="mt-6 text-2xl font-semibold text-white">
                EN — About
              </h2>
              <p className="mt-3 leading-relaxed text-white/85">
                Computer Science student at CESI Rouen, building hands-on projects in
                programming (C/C++), web development (React/TypeScript) and systems.
                I enjoy teamwork, clean architecture, and learning fast to deliver
                reliable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
