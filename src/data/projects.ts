// src/data/projects.ts

export type ProjectTrack = "A1" | "A2" | "INDI";

export type Project = {
  id: string;
  track: ProjectTrack;
  title: string;
  subtitle: string;
  fr: string;
  en: string;
  tags: string[];
  githubUrl: string; // laisser "" si pas de repo
};

export const TRACKS: { id: ProjectTrack; title: string; desc: string }[] = [
  {
    id: "A1",
    title: "A1 — Projets académiques (Ingénierie / Sciences)",
    desc: "Projets CESI en équipe : électronique, simulation, signal et bases de données.",
  },
  {
    id: "A2",
    title: "A2 — Projets académiques (Développement / Embarqué / Réseau)",
    desc: "Projets CESI orientés développement logiciel, systèmes embarqués et réseaux.",
  },
  {
    id: "INDI",
    title: "Individuel — Projets personnels",
    desc: "Projets réalisés en autonomie pour progresser et expérimenter.",
  },
];

export const PROJECTS: Project[] = [
  // =========================
  // A1 — Projets académiques
  // =========================
  {
    id: "strongbox-3000",
    track: "A1",
    title: "Strongbox 3000 — Prototype de coffre-fort sécurisé",
    subtitle: "Arduino / Logique / Électronique",
    fr: "Conception d’un prototype de coffre-fort sécurisé : modélisation logique (tables de vérité, Karnaugh), réalisation d’un circuit de validation par résistances/transistors, et développement Arduino pour identifier le modèle de carte et piloter l’authentification.",
    en: "Built a secure safe prototype: logic design (truth tables, Karnaugh), electronic validation circuit (resistors/transistors), and Arduino code to identify the card model and run authentication steps.",
    tags: ["Arduino", "Électronique", "Logique", "POC"],
    githubUrl: "",
  },
  {
    id: "fast-furious-simulation",
    track: "A1",
    title: "Fast & Furious — Simulation numérique d’un circuit",
    subtitle: "Python / Jupyter / Modélisation",
    fr: "Étude physique d’un circuit (pente, looping, saut) et résolution numérique sous Python : calcul des vitesses minimales, tracés (vitesse, trajectoire), comparaison de modèles de voitures et recommandations à partir des résultats.",
    en: "Physics-based study of a track (slope, loop, jump) solved numerically in Python: minimum speed constraints, plots (speed, trajectory), model comparison, and recommendation based on results.",
    tags: ["Python", "Jupyter", "Simulation", "Modélisation"],
    githubUrl: "",
  },
  {
    id: "escape-no-game-signal",
    track: "A1",
    title: "Escape No Game — Communication discrète par signal sonore",
    subtitle: "Traitement du signal / Jupyter / Simulation",
    fr: "POC de transmission d’un message via hautes fréquences : définition de la chaîne émission/réception, filtrage et analyse fréquentielle, puis modélisation numérique en Python (trames, détection d’erreur, reconstruction du message).",
    en: "POC for covert message transmission via high frequencies: end-to-end TX/RX chain, frequency analysis and filtering, then Python simulation (framing, error detection, message reconstruction).",
    tags: ["Signal", "Python", "Jupyter", "POC"],
    githubUrl: "",
  },
  {
    id: "air-quality-database",
    track: "A1",
    title: "Qualité de l’air — Base de données relationnelle",
    subtitle: "MySQL / Modélisation / SQL",
    fr: "Conception et réalisation d’une base relationnelle pour centraliser des données publiques de capteurs : MCD/MLD/MPD, peuplement réaliste, requêtes SQL avancées (jointures, agrégats) et gestion des droits (admin/user).",
    en: "Designed and built a relational database to centralize public sensor data: conceptual/logical/physical modeling, realistic dataset population, advanced SQL queries (joins, aggregates), and role-based access (admin/user).",
    tags: ["MySQL", "SQL", "Modélisation", "Data"],
    githubUrl: "",
  },

  // =========================
  // A2 — Projets académiques
  // =========================
  {
    id: "worldwide-weather-watcher",
    track: "A2",
    title: "Worldwide Weather Watcher — Station météo embarquée",
    subtitle: "Arduino (ATmega328P) / Capteurs / SD / RTC",
    fr: "Développement d’un prototype de station météo embarquée : acquisition capteurs (BME280 + luminosité), horodatage RTC, enregistrement CSV sur carte SD, LED de diagnostic, console série, gestion de modes (Standard/Économique/Maintenance/Configuration) et sauvegarde des paramètres en EEPROM avec contrôle CRC. Travail en équipe (rôle de coordination/intégration).",
    en: "Built an embedded weather-station prototype: sensor acquisition (BME280 + light), RTC timestamping, CSV logging to SD, LED diagnostics, serial console, multiple operating modes (Standard/Eco/Maintenance/Config), and settings persistence in EEPROM with CRC validation. Team project with coordination/integration responsibilities.",
    tags: ["Arduino", "Embedded", "I2C", "SPI", "SD", "RTC", "EEPROM"],
    githubUrl: "https://github.com/bilal-allouch/worldwide-weather-watcher",
  },
  {
    id: "game-of-life-poo-cpp",
    track: "A2",
    title: "Game of Life — Application C++ (POO) avec SFML",
    subtitle: "C++ / SFML / MVC / Design Patterns",
    fr: "Implémentation du Jeu de la Vie avec une architecture orientée objet et extensible : MVC, patterns Observer & Strategy, lecture de grille depuis fichier, double rendu (console + SFML), arrêt automatique (stabilité / itérations max) et tests unitaires intégrés pour valider les évolutions de la grille.",
    en: "Implemented Conway’s Game of Life with a clean OOP architecture: MVC, Observer & Strategy patterns, file-based grid loading, dual rendering (console + SFML), auto-stop conditions (stable state / max iterations), and built-in unit tests to validate grid evolution.",
    tags: ["C++", "SFML", "OOP", "MVC", "Observer", "Strategy", "Testing"],
    githubUrl: "https://github.com/bilal-allouch/game-of-life-poo-cpp",
  },
  {
    id: "funkytown-networking",
    track: "A2",
    title: "FunkyTown — Conception & déploiement d’un réseau multi-sites",
    subtitle: "Cisco Packet Tracer / VLAN / Routage / IPv6",
    fr: "Réalisation d’une maquette réseau complète pour plusieurs organisations : segmentation VLAN (VTP, VLSM), routage inter-VLAN, DHCP/DNS, Wi-Fi (invités/entreprise), sécurisation (accès SSH/telnet, durcissement), EtherChannel, et interconnexion IPv6 via tunnel vers un datacenter cloud. Production des livrables : cartographie, plan d’adressage et stratégie de déploiement.",
    en: "Designed and implemented a full multi-site network lab: VLAN segmentation (VTP, VLSM), inter-VLAN routing, DHCP/DNS, Wi-Fi (guest/enterprise), security hardening (SSH/telnet access, controls), EtherChannel, and IPv6 tunneling to a cloud datacenter. Delivered documentation: topology maps, addressing plan, and deployment strategy.",
    tags: ["Networking", "Cisco", "Packet Tracer", "VLAN", "DHCP", "DNS", "IPv6", "Routing"],
    githubUrl: "",
  },

  // =========================
  // INDIVIDUEL — (on ajoutera après)
  // =========================

    // =========================
  // INDIVIDUEL — Projets personnels
  // =========================
  {
    id: "snake-sfml",
    track: "INDI",
    title: "Snake — SFML (C++17) : jeu rétro, architecture propre",
    subtitle: "C++17 / SFML / Clean Architecture / UML",
    fr: "Reproduction moderne du Snake en C++17 avec SFML, construite avec une architecture orientée objet claire : boucle de jeu, gestion d’états (Start/Playing/Pause/Game Over), collisions (murs + self), spawn de nourriture sur cases libres, score et difficulté progressive. Projet documenté (UML + commits structurés) pour mettre en avant la maintenabilité et l’extensibilité.",
    en: "Modern Snake implementation in C++17 with SFML, built with a clean OOP design: game loop, state management (Start/Playing/Pause/Game Over), wall/self collisions, food spawning on free cells, scoring and progressive difficulty. Documented with UML and structured commits to highlight maintainability and extensibility.",
    tags: ["C++17", "SFML", "OOP", "Game Loop", "State Machine", "UML", "CMake"],
    githubUrl: "https://github.com/bilal-allouch/snake-sfml",
  },

];
