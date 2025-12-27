// src/sections/About.tsx
import profileImg from "../assets/profile.jpeg";

export default function About() {
  return (
    <section id="about" className="w-full py-14">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl">
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
            {/* Photo */}
            <div className="mx-auto h-44 w-44 overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              <img
                src={profileImg}
                alt="Bilal Allouch"
                className="h-full w-full object-cover object-[50%_20%]"
              />
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/70">ABOUT / À PROPOS</p>

              <h2 className="mt-2 text-2xl font-semibold text-white">FR — À propos</h2>
              <p className="mt-3 leading-relaxed text-white/85">
                Étudiant en informatique au <span className="font-semibold">CESI (école d’ingénieurs)</span>{" "}
                — Rouen, je progresse dans une pédagogie <span className="font-semibold">orientée projets</span> :
                à chaque <span className="font-semibold">boucle</span>, nous livrons un projet en équipe avec des
                objectifs concrets (analyse, conception, développement, tests, documentation, présentation), et des{" "}
                <span className="font-semibold">équipes renouvelées</span> régulièrement.
              </p>

              <p className="mt-4 leading-relaxed text-white/85">
                Cette méthode m’a appris à être <span className="font-semibold">opérationnel rapidement</span>, à
                m’adapter à de nouveaux contextes et à travailler efficacement avec des profils différents. Je mets
                l’accent sur une <span className="font-semibold">architecture claire</span> (POO, MVC, design patterns),
                la <span className="font-semibold">qualité du code</span>, et une{" "}
                <span className="font-semibold">documentation solide</span> (README, schémas, tests).
              </p>

              <p className="mt-4 leading-relaxed text-white/85">
                Je prends souvent le rôle de <span className="font-semibold">chef d’équipe</span> (organisation,
                répartition, suivi, intégration), mais je sais aussi être{" "}
                <span className="font-semibold">membre “développeur”</span> pour renforcer mes compétences sur tous les
                postes. Mon objectif : contribuer là où c’est le plus utile et faire avancer l’équipe vers un rendu{" "}
                <span className="font-semibold">propre, fiable et livrable</span>.
              </p>

              <h2 className="mt-6 text-2xl font-semibold text-white">EN — About</h2>
              <p className="mt-3 leading-relaxed text-white/85">
                Computer Science student at <span className="font-semibold">CESI Engineering School (Rouen)</span> in a{" "}
                <span className="font-semibold">project-driven</span> curriculum: each cycle, we deliver a team project
                with clear goals (analysis, design, development, testing, documentation, presentation), with{" "}
                <span className="font-semibold">teams changing regularly</span>.
              </p>

              <p className="mt-4 leading-relaxed text-white/85">
                This approach trained me to become <span className="font-semibold">productive quickly</span>, adapt to
                new contexts, and collaborate efficiently with different profiles. I focus on{" "}
                <span className="font-semibold">clean architecture</span> (OOP, MVC, design patterns),{" "}
                <span className="font-semibold">code quality</span>, and{" "}
                <span className="font-semibold">strong documentation</span> (README, diagrams, tests).
              </p>

              <p className="mt-4 leading-relaxed text-white/85">
                I often act as a <span className="font-semibold">team lead</span> (planning, task split, progress
                tracking, integration), but I’m also comfortable as a{" "}
                <span className="font-semibold">hands-on developer</span> to strengthen skills across roles. My goal is
                to contribute where it matters most and deliver{" "}
                <span className="font-semibold">reliable, production-ready results</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
