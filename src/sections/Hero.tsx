export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28">
      {/* Background gradient (nuances de bleu) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_left,rgba(99,102,241,0.20),transparent_55%)]" />

      {/* Glass card */}
      <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-8 md:p-12">
        <p className="text-white/70 text-sm mb-3">FR / EN</p>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Bilal Allouch
          <span className="block text-white/70 mt-2 text-xl md:text-2xl font-medium">
            Étudiant en informatique — CESI Rouen
          </span>
        </h1>

        <p className="mt-6 text-white/80 leading-relaxed">
          <strong>FR :</strong> Étudiant en deuxième année du cycle préparatoire en informatique au CESI Rouen,
          je recherche un stage de <strong>12 à 15 semaines</strong> (<strong>7 avril – 24 juillet 2026</strong>)
          afin de découvrir le monde professionnel, collaborer avec des équipes expérimentées et développer mes compétences.
        </p>

        <p className="mt-4 text-white/70 leading-relaxed">
          <strong>EN :</strong> Second-year preparatory-cycle student in Computer Science at CESI Rouen,
          looking for a <strong>12–15 week internship</strong> (<strong>April 7 – July 24, 2026</strong>)
          to gain professional experience, collaborate with experienced teams, and strengthen my skills through real projects.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="https://github.com/bilal-allouch"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition text-sm font-medium"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bilalallouch"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-accent/20 hover:bg-accent/30 border border-accent/30 transition text-sm font-medium"
          >
            LinkedIn
          </a>

          <a
            href="mailto:bilalallouch20@hotmail.com"
            className="px-5 py-3 rounded-xl bg-white text-black hover:opacity-90 transition text-sm font-semibold"
          >
            Me contacter
          </a>
        </div>

        {/* Contact inline */}
        <div className="mt-6 text-xs text-white/60 flex flex-col sm:flex-row gap-2 sm:gap-6">
          <span>📧 bilalallouch20@hotmail.com</span>
          <span>📱 +33 7 53 91 10 49</span>
        </div>
      </div>
    </section>
  );
}
