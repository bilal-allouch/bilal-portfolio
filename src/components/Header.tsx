export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nom */}
        <span className="font-bold text-lg tracking-wide">
          Bilal<span className="text-accent">.</span>
        </span>

        {/* Navigation */}
        <ul className="hidden md:flex gap-6 text-sm text-white/80">
          <li className="hover:text-accent cursor-pointer transition">About</li>
          <li className="hover:text-accent cursor-pointer transition">Skills</li>
          <li className="hover:text-accent cursor-pointer transition">Projects</li>
          <li className="hover:text-accent cursor-pointer transition">Contact</li>
          <a className="hover:text-white" href="#skills">Skills</a>
        </ul>
      </nav>
    </header>
  );
}
