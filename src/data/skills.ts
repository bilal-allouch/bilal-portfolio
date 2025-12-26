export type SkillCategory = {
  titleFr: string;
  titleEn: string;
  items: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    titleFr: "Langages & Programmation",
    titleEn: "Languages & Programming",
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
    titleFr: "Développement Web",
    titleEn: "Web Development",
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
    titleFr: "Bases de données",
    titleEn: "Databases",
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
    titleFr: "Réseaux & Systèmes",
    titleEn: "Networks & Systems",
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
    titleFr: "Systèmes embarqués",
    titleEn: "Embedded Systems",
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
    titleFr: "Outils & Logiciels",
    titleEn: "Tools & Software",
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
