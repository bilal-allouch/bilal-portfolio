import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-xs tracking-[0.22em] text-white/60">SKILLS / COMPÉTENCES</p>
      <h2 className="mt-3 text-4xl font-semibold">Compétences</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SKILLS.map((cat) => (
          <div
            key={cat.titleFr}
            className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur"
          >
            <h3 className="text-xl font-semibold">{cat.titleFr}</h3>
            <p className="mt-1 text-sm text-white/60">{cat.titleEn}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
