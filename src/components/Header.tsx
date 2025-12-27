export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nom */}
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-bold text-lg tracking-wide text-white">
            Bilal Allouch
          </span>
          <span className="text-xs text-white/60">
            Étudiant en informatique — CESI, École d’ingénieurs (Rouen)
          </span>

        </a>

        {/* Navigation */}
        <ul className="hidden md:flex gap-6 text-sm text-white/80">
          <li>
            <a className="hover:text-accent transition" href="#about">
              À propos
            </a>
          </li>
          <li>
            <a className="hover:text-accent transition" href="#skills">
              Compétences
            </a>
          </li>
          <li>
            <a className="hover:text-accent transition" href="#projects">
              Projets
            </a>
          </li>
          <li>
            <a className="hover:text-accent transition" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
