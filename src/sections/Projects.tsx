import { useMemo, useState } from "react";
import { PROJECTS, TRACKS, type ProjectTrack } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState<ProjectTrack>("A1");

  const currentTrack = useMemo(
    () => TRACKS.find((t) => t.id === active),
    [active]
  );

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => p.track === active);
  }, [active]);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-xs tracking-[0.22em] text-white/60">PROJECTS / PROJETS</p>
      <h2 className="mt-3 text-4xl font-semibold">Projets</h2>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-3">
        {TRACKS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={[
              "rounded-full px-5 py-2 text-sm transition",
              active === t.id
                ? "bg-white text-black"
                : "border border-white/15 bg-white/5 text-white/85 hover:bg-white/10",
            ].join(" ")}
          >
            {t.id}
          </button>
        ))}
      </div>

      {/* Track header card */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
        <h3 className="text-xl font-semibold">{currentTrack?.title}</h3>
        <p className="mt-2 text-sm text-white/70">{currentTrack?.desc}</p>
      </div>

      {/* Projects grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-1 text-sm text-white/60">{p.subtitle}</p>
              </div>

              {/* ✅ GitHub seulement si lien existe */}
              {p.githubUrl && p.githubUrl.trim() !== "" && p.githubUrl !== "#" && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
                >
                  GitHub
                </a>
              )}
            </div>

            <div className="mt-5 space-y-4 text-white/85">
              <p className="text-sm leading-relaxed">
                <span className="font-semibold text-white">FR :</span> {p.fr}
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                <span className="font-semibold text-white/90">EN :</span> {p.en}
              </p>
            </div>

            {p.tags?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
