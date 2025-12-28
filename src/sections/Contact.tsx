import {
  Mail,
  Phone,
  Github,
  Linkedin,
  CalendarDays,
  Rocket,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-xs tracking-[0.22em] text-white/60">CONTACT</p>
      <h2 className="mt-3 text-4xl font-semibold">Me contacter</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Coordonnées */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
          <h3 className="text-xl font-semibold">Coordonnées</h3>
          <p className="mt-1 text-sm text-white/60">Contact details</p>

          <div className="mt-6 space-y-4 text-white/85">
            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Mail className="h-5 w-5 text-white/80" />
              </span>
              <div className="leading-tight">
                <p className="text-sm text-white/70">Email</p>
                <a
                  className="font-semibold underline underline-offset-4 hover:text-white"
                  href="mailto:bilalallouch20@hotmail.com"
                >
                  bilalallouch20@hotmail.com
                </a>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Phone className="h-5 w-5 text-white/80" />
              </span>
              <div className="leading-tight">
                <p className="text-sm text-white/70">Téléphone</p>
                <a
                  className="font-semibold underline underline-offset-4 hover:text-white"
                  href="tel:+33753911049"
                >
                  +33 7 53 91 10 49
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Github className="h-5 w-5 text-white/80" />
              </span>
              <div className="leading-tight">
                <p className="text-sm text-white/70">GitHub</p>
                <a
                  className="font-semibold underline underline-offset-4 hover:text-white"
                  href="https://github.com/bilal-allouch"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/bilal-allouch
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Linkedin className="h-5 w-5 text-white/80" />
              </span>
              <div className="leading-tight">
                <p className="text-sm text-white/70">LinkedIn</p>
                <a
                  className="font-semibold underline underline-offset-4 hover:text-white"
                  href="https://www.linkedin.com/in/bilalallouch"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/bilalallouch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disponibilité */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
          <h3 className="text-xl font-semibold">Disponibilité</h3>
          <p className="mt-1 text-sm text-white/60">Internship / Apprenticeship</p>

          <div className="mt-6 space-y-4 text-white/85 leading-relaxed">
            <div className="flex gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <CalendarDays className="h-5 w-5 text-white/80" />
              </span>
              <p>
                <span className="font-semibold text-white">FR :</span> Stage{" "}
                <span className="font-semibold">12 à 15 semaines</span>{" "}
                (<span className="font-semibold">7 avril – 24 juillet 2026</span>).
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Rocket className="h-5 w-5 text-white/80" />
              </span>
              <p>
                <span className="font-semibold text-white">FR :</span> Alternance
                à partir de <span className="font-semibold">septembre 2026</span>.
              </p>
            </div>

            <div className="pt-2 text-white/70">
              <p>
                <span className="font-semibold text-white/90">EN :</span>{" "}
                12–15 week internship (April 7 – July 24, 2026) • Apprenticeship
                starting <span className="font-semibold">September 2026</span>.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:bilalallouch20@hotmail.com?subject=Contact%20-%20Portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
            >
              <Mail className="h-4 w-4" />
              Envoyer un email
            </a>

            <a
              href="https://www.linkedin.com/in/bilalallouch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              <Linkedin className="h-4 w-4" />
              Voir LinkedIn
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>

            <a
              href="https://github.com/bilal-allouch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              <Github className="h-4 w-4" />
              Voir GitHub
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
