// src/sections/Hero.tsx
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Rocket,
  Target,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Background gradient (garde tes couleurs) */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_left,rgba(99,102,241,0.20),transparent_55%)]" />
      {/* Light overlay to deepen contrast */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* Main Card */}
      <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_-35px_rgba(0,0,0,0.9)]">
        <div className="p-8 md:p-12">
          {/* Small tag */}
          <div className="flex items-center justify-between gap-3">
            <p className="text-white/70 text-xs tracking-[0.28em]">FR / EN</p>

            {/* Quick links inside hero */}
            <div className="hidden sm:flex gap-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition"
              >
                Projets <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition"
              >
                Compétences <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Title */}
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Bilal Allouch
            <span className="block text-white/70 mt-2 text-lg md:text-2xl font-medium">
              Étudiant en informatique — CESI (école d’ingénieurs) — Rouen
            </span>
          </h1>

          {/* OBJECTIFS (plus sombre + très visible) */}
          <div className="mt-7 rounded-2xl border border-white/10 bg-[#070B14]/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
            <div className="mb-4 h-[2px] w-24 rounded-full bg-white/20" />

            <p className="text-xs tracking-[0.28em] text-white/75 mb-4">
              OBJECTIFS
            </p>

            <div className="flex flex-col gap-3">
              {/* Stage */}
              <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white/90">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Target className="h-4 w-4 text-white/85" />
                </span>
                <span className="leading-relaxed">
                  <strong className="text-white">Stage</strong> —{" "}
                  <strong className="text-white">12 à 15 semaines</strong>{" "}
                  <span className="text-white/70">
                    (7 avril → 24 juillet 2026)
                  </span>
                </span>
              </div>

              {/* Alternance */}
              <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white/90">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Rocket className="h-4 w-4 text-white/85" />
                </span>
                <span className="leading-relaxed">
                  <strong className="text-white">Alternance</strong> — Cycle
                  ingénieur informatique{" "}
                  <span className="text-white/70">(dès septembre 2026)</span>
                </span>
              </div>
            </div>

            {/* Objectif en gras */}
            <p className="mt-5 text-white/90 leading-relaxed text-sm">
              <strong className="text-white">Mon objectif :</strong> Intégrer un{" "}
              <strong className="text-white">stage</strong> de{" "}
              <strong className="text-white">12 à 15 semaines</strong>{" "}
              <span className="text-white/80">(avril → juillet 2026)</span> afin
              de contribuer à des <strong className="text-white">projets concrets</strong>{" "}
              et renforcer mes compétences au sein d’une équipe.{" "}
              <strong className="text-white">
                À l’issue de ce stage, je souhaite poursuivre par une alternance
              </strong>{" "}
              en informatique à partir de{" "}
              <strong className="text-white">septembre 2026</strong>, dans le
              cadre de mon <strong className="text-white">cycle ingénieur</strong>.
            </p>
          </div>

          {/* FR / EN (clean + readable) */}
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <p className="text-white/85 leading-relaxed">
              <strong className="text-white">FR :</strong> Étudiant en 2ᵉ année
              du cycle préparatoire en informatique au CESI Rouen, je recherche
              un <strong className="text-white">stage</strong> (avril → juillet
              2026) pour gagner en expérience, collaborer avec des équipes
              expérimentées et améliorer ma qualité de réalisation (architecture,
              tests, documentation). Je vise ensuite une{" "}
              <strong className="text-white">alternance dès septembre 2026</strong>.
            </p>

            <p className="text-white/75 leading-relaxed">
              <strong className="text-white/90">EN :</strong> Second-year
              preparatory-cycle Computer Science student at CESI Rouen, seeking a{" "}
              <strong className="text-white/90">12–15 week internship</strong>{" "}
              (Apr–Jul 2026) to gain hands-on experience, work with experienced
              teams, and strengthen delivery quality (architecture, testing,
              documentation). After that, I’m targeting a{" "}
              <strong className="text-white/90">
                work-study program starting September 2026
              </strong>
              .
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:bilalallouch20@hotmail.com?subject=Stage%20(Avril-Juillet%202026)%20%2B%20Alternance%20(Septembre%202026)%20-%20Informatique"
              className="px-5 py-3 rounded-xl bg-white text-black hover:opacity-90 transition text-sm font-semibold"
            >
              Me contacter (Stage + Alternance)
            </a>

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
          </div>

          {/* Icons only (email/tel) */}
          <div className="mt-5 flex items-center gap-3 text-white/70">
            <a
              href="mailto:bilalallouch20@hotmail.com"
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="Envoyer un email"
              title="Envoyer un email"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              href="tel:+33753911049"
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="Appeler"
              title="Appeler"
            >
              <Phone className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/bilal-allouch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="Ouvrir GitHub"
              title="Ouvrir GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/bilalallouch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="Ouvrir LinkedIn"
              title="Ouvrir LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile quick links */}
          <div className="mt-6 flex sm:hidden flex-wrap gap-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
            >
              Projets <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
            >
              Compétences <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
