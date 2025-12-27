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
  githubUrl: string;
};

export const TRACKS: { id: ProjectTrack; title: string; desc: string }[] = [
  {
    id: "A1",
    title: "A1 — Projets académiques (Ingénierie / Sciences)",
    desc: "Projets CESI en équipe : électronique, simulation, signal et bases de données.",
  },
  {
    id: "A2",
    title: "A2 — Projets académiques (Développement / Web / Réseau)",
    desc: "Projets CESI orientés développement logiciel et applications.",
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
  // A2 — (on ajoutera après)
  // =========================

  // =========================
  // INDIVIDUEL — (on ajoutera après)
  // =========================
];
