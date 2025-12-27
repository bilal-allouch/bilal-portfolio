export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-xs tracking-[0.22em] text-white/60">CONTACT</p>
      <h2 className="mt-3 text-4xl font-semibold">Me contacter</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
          <h3 className="text-xl font-semibold">Coordonnées</h3>
          <p className="mt-1 text-sm text-white/60">Contact details</p>

          <div className="mt-5 space-y-3 text-white/85">
            <p>
              <span className="text-white font-semibold">Email :</span>{" "}
              <a
                className="text-white/90 hover:text-white underline underline-offset-4"
                href="mailto:bilalallouch20@hotmail.com"
              >
                bilalallouch20@hotmail.com
              </a>
            </p>

            <p>
              <span className="text-white font-semibold">Téléphone :</span>{" "}
              <a
                className="text-white/90 hover:text-white underline underline-offset-4"
                href="tel:+33753911049"
              >
                +33 7 53 91 10 49
              </a>
            </p>

            <p>
              <span className="text-white font-semibold">GitHub :</span>{" "}
              <a
                className="text-white/90 hover:text-white underline underline-offset-4"
                href="https://github.com/bilal-allouch"
                target="_blank"
                rel="noreferrer"
              >
                github.com/bilal-allouch
              </a>
            </p>

            <p>
              <span className="text-white font-semibold">LinkedIn :</span>{" "}
              <a
                className="text-white/90 hover:text-white underline underline-offset-4"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                (ajouter ton lien)
              </a>
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
          <h3 className="text-xl font-semibold">Disponibilité</h3>
          <p className="mt-1 text-sm text-white/60">Internship</p>

          <div className="mt-5 space-y-3 text-white/85 leading-relaxed">
            <p>
              <span className="text-white font-semibold">FR :</span> Stage 12 à 15
              semaines (7 avril – 24 juillet 2026).
            </p>
            <p>
              <span className="text-white font-semibold">EN :</span> 12–15 week
              internship (April 7 – July 24, 2026).
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:bilalallouch20@hotmail.com?subject=Contact%20-%20Portfolio"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
            >
              Envoyer un email
            </a>

            <a
              href="https://github.com/bilal-allouch"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Voir GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
