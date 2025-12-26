// src/sections/Skills.tsx
type SkillCategory = {
  frTitle: string;
  enTitle: string;
  items: string[];
};

const CATEGORIES: SkillCategory[] = [
  {
    frTitle: "Langages & Programmation",
    enTitle: "Languages & Programming",
    items: [
      "C",
      "C++",
      "Python",
      "PHP",
      "JavaScript",
      "SQL",
      "Programmation orientée objet (POO)",
      "Structures de données",
      "Algorithmes",
      "Design Patterns (Factory, Singleton, Observer, Strategy)",
    ],
  },
  {
    frTitle: "Développement Web",
    enTitle: "Web Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (Front-end)",
      "PHP (Back-end)",
      "Architecture MVC",
      "Développement web dynamique",
      "Interfaces responsives",
    ],
  },
  {
    frTitle: "Bases de données",
    enTitle: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQLite (relationnelles)",
      "MongoDB (NoSQL – orientée documents)",
      "SQL (requêtes, transactions, jointures, optimisation)",
      "Modélisation de bases de données",
    ],
  },
  {
    frTitle: "Réseaux & Systèmes",
    enTitle: "Networks & Systems",
    items: [
      "TCP/IP",
      "VLAN",
      "DHCP",
      "DNS",
      "NAT / PAT",
      "Routage",
      "ACLs",
      "Sécurisation réseau",
      "Linux",
      "Bash",
      "Virtualisation (VM / Hyperviseur)",
      "Wireshark",
      "Cisco Packet Tracer",
    ],
  },
  {
    frTitle: "Systèmes embarqués",
    enTitle: "Embedded Systems",
    items: [
      "Arduino",
      "ATmega328",
      "Capteurs & actionneurs",
      "UART",
      "I2C",
      "SPI",
      "Simulation",
      "Prototypage",
    ],
  },
  {
    frTitle: "Outils & Logiciels",
    enTitle: "Tools & Software",
    items: [
      "Visual Studio",
      "VS Code",
      "Git",
      "GitHub",
      "VirtualBox",
      "LTspice",
      "Fusion 360",
      "Tinkercad",
      "Revit",
      "Excel (formules avancées, TCD)",
      "VBA / Macros (bases)",
      "Power Automate (bases)",
      "Microsoft 365",
      "Power BI (bases)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-white/70">
            SKILLS / COMPÉTENCES
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            Compétences
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.frTitle}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold">{cat.frTitle}</h3>
                <p className="text-sm text-white/70">{cat.enTitle}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm text-white/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
