/* ================================================================
   TRANSLATE.JS — Système de traduction FR / EN
   ----------------------------------------------------------------
   Ce fichier contient tous les textes du portfolio dans les 2 langues.
================================================================ */

const translations = {

  /* ============================================================
     FRANÇAIS
  ============================================================ */
  fr: {

    /* --- Navigation --- */
    home:       "Accueil",
    about:      "À propos",
    experience: "Expérience",
    skills:     "Compétences",
    projects:   "Projets",
    contact:    "Contact",
    hire:       "Me contacter",

    /* --- Hero --- */
    hi: "Bonjour, je suis",

    descriptionStart:
      "Étudiant ingénieur informatique au CESI Rouen — actuellement ",

    descriptionStrong1:
      "stagiaire XR & Digital Twin Engineering au CESI LINEACT",

    descriptionMiddle:
      " sur le projet VLF4EU. Je recherche une ",

    descriptionStrong2:
      "alternance de 3 ans à partir de septembre 2026",

    descriptionEnd:
      " en développement logiciel et systèmes informatiques.",

    download:  "Télécharger CV",
    contactme: "Me contacter",

    /* --- Section À propos --- */
    aboutTitle: "À propos de moi",

    aboutDescription:
      "Étudiant ingénieur en informatique au CESI Rouen, je maîtrise un large spectre technique : développement logiciel (C/C++, Python, C#), architectures distribuées, réseaux & systèmes, et simulation temps réel (Unity, OPC UA). Actuellement en stage XR & Digital Twin Engineering au CESI LINEACT sur le projet VLF4EU, je recherche une alternance de 3 ans à partir de septembre 2026.",

    education:    "Années d'étude",
    expStat:      "Année d'expérience",
    projectsDone: "Projets réalisés",

    /* --- Section Expérience --- */
    experienceTitle:    "Expérience",
    experienceSubtitle: "Mon parcours professionnel.",

    expRole:    "Stagiaire — XR & Digital Twin Engineering",
    expCompany: "CESI LINEACT — Projet VLF4EU",
    expPeriod:  "2026 — En cours (fin prévue : 31/07/2026)",

    expMission1: "Refactoring et restructuration d'une architecture logicielle Unity vers un design modulaire et extensible",
    expMission2: "Conception et intégration de composants temps réel au sein d'un système de jumeau numérique XR",
    expMission3: "Contribution au déploiement d'une architecture distribuée en environnement industriel (Docker, API REST, OPC UA)",

    /* --- Section Compétences --- */
    skillsTitle:    "Mes compétences",
    skillsSubtitle: "Technologies et outils que j'utilise dans mes projets.",

    programming: "Langages",
    softdev:     "Développement logiciel",
    webdev:      "Développement Web",
    databases:   "Bases de données",
    networks:    "Systèmes & Réseaux",
    simulation:  "Simulation & Temps réel",
    tools:       "Outils",

    tagOOP:         "POO",
    tagMVC:         "Architecture MVC",
    tagAPI:         "API REST",
    tagDistributed: "Systèmes distribués",
    tagRefactoring: "Refactoring",
    tagResponsive:  "Responsive Design",

    /* --- Section Projets --- */
    projectsKicker:   "PROJECTS / PROJETS",
    projectsTitle:    "Projets",
    projectsSubtitle: "Sélection de projets académiques et personnels.",

    projectsTabDist: "DIST",
    projectsTabIndi: "INDI",
    projectsTabA1:   "A1",
    projectsTabA2:   "A2",

    /* --- Groupe DIST --- */
    distTitle: "Projet Distinctif — Hackathon",
    distDesc:  "Projets réalisés lors d'un hackathon sur des problématiques réelles.",

    pDistEcoPromptTitle: "EcoPrompt — Impact environnemental de l'IA",
    pDistEcoPromptMeta:  "HTML / CSS / JavaScript",
    pDistEcoPromptDesc:
      "Outil web développé lors du Hackathon Hack4Good/ADEME pour analyser l'impact énergétique et environnemental des prompts envoyés aux modèles d'IA. Calcul de consommation d'énergie, émissions CO₂, score écologique et comparaisons avec des équivalences du quotidien.",

    pDistNeuroChatTitle: "NeuroChat — Adaptation Dynamique de Modèle d'IA",
    pDistNeuroChatMeta:  "Python / Gemini API / CustomTkinter",
    pDistNeuroChatDesc:
      "Assistant conversationnel sélectionnant automatiquement le modèle Gemini optimal selon la complexité du prompt (score 0–100). Moteur d'analyse multi-critères (longueur, syntaxe, sémantique, structure) avec fallback automatique en cas d'erreur.",

    /* --- Groupe INDI --- */
    indiTitle: "Individuel — Projets personnels",
    indiDesc:  "Projets réalisés en autonomie pour progresser et expérimenter.",

    pIndiSnakeTitle: "Snake — SFML (C++17) : jeu rétro, architecture propre",
    pIndiSnakeMeta:  "C++17 / SFML / Clean Architecture / UML",
    pIndiSnakeDesc:
      "Reproduction moderne du Snake en C++17 avec SFML : boucle de jeu, gestion d'états (Start/Playing/Pause/Game Over), collisions, génération de nourriture, score et difficulté progressive. Documenté avec UML et commits structurés.",

    /* --- Groupe A1 --- */
    a1Title: "A1 — Projets académiques (Ingénierie / Sciences)",
    a1Desc:  "Projets CESI en équipe : électronique, simulation, signal et bases de données.",

    pA1StrongboxTitle: "Strongbox 3000 — Prototype de coffre-fort sécurisé",
    pA1StrongboxMeta:  "Arduino / Logique / Électronique",
    pA1StrongboxDesc:
      "Conception d'un prototype de coffre-fort sécurisé : modélisation logique (tables de vérité, Karnaugh), réalisation d'un circuit de validation, et développement Arduino pour identifier le modèle de carte et gérer l'authentification.",

    pA1FastTitle: "Fast & Furious — Simulation numérique d'un circuit",
    pA1FastMeta:  "Python / Jupyter / Modélisation",
    pA1FastDesc:
      "Étude physique d'un circuit (pente, looping, saut) et résolution numérique sous Python : calcul des vitesses minimales, tracés (vitesse, trajectoire), comparaison de modèles et recommandations à partir des résultats.",

    pA1EscapeTitle: "Escape No Game — Communication discrète par signal sonore",
    pA1EscapeMeta:  "Traitement du signal / Jupyter / Simulation",
    pA1EscapeDesc:
      "POC de transmission d'un message via hautes fréquences : définition de la chaîne émission/réception, filtrage et analyse fréquentielle, puis modélisation numérique sous Python (trames, détection d'erreur, reconstruction du message).",

    pA1AirTitle: "Qualité de l'air — Base de données relationnelle",
    pA1AirMeta:  "MySQL / Modélisation / SQL",
    pA1AirDesc:
      "Conception et réalisation d'une base relationnelle pour centraliser des données publiques de capteurs : modélisation MCD/MLD/MPD, peuplement réaliste, requêtes SQL avancées (jointures, agrégats) et gestion des droits (admin/user).",

    tagElectronics: "Électronique",
    tagLogic:       "Logique",
    tagSimulation:  "Simulation",
    tagModeling:    "Modélisation",
    tagSignal:      "Signal",

    /* --- Groupe A2 --- */
    a2Title: "A2 — Projets académiques (Développement / Embarqué / Réseau)",
    a2Desc:  "Projets CESI orientés développement logiciel, systèmes embarqués et réseaux.",

    pA2WeatherTitle: "Worldwide Weather Watcher — Station météo embarquée",
    pA2WeatherMeta:  "Arduino (ATmega328P) / Capteurs / SD / RTC",
    pA2WeatherDesc:
      "Développement d'un prototype de station météo embarquée : acquisition capteurs (BME280 + luminosité), horodatage RTC, enregistrement CSV sur carte SD, LED de diagnostic, console série, gestion de modes et sauvegarde des paramètres en EEPROM avec contrôle CRC. Travail en équipe.",

    pA2GOLTitle: "Game of Life — Application C++ (POO) avec SFML",
    pA2GOLMeta:  "C++ / SFML / MVC / Design Patterns",
    pA2GOLDesc:
      "Implémentation du Jeu de la Vie avec une architecture orientée objet et extensible : MVC, patterns Observer & Strategy, lecture de grille depuis fichier, double rendu (console + SFML), arrêt automatique et tests unitaires intégrés.",

    pA2FunkyTitle: "FunkyTown — Conception & déploiement d'un réseau multi-sites",
    pA2FunkyMeta:  "Cisco Packet Tracer / VLAN / Routage / IPv6",
    pA2FunkyDesc:
      "Réalisation d'une maquette réseau complète pour plusieurs organisations : segmentation VLAN (VTP, VLSM), routage inter-VLAN, DHCP/DNS, Wi-Fi, sécurisation (SSH/telnet), EtherChannel, et interconnexion IPv6 via tunnel vers un datacenter cloud.",

    pA2WebTitle: "Projet Web — Plateforme de recherche de stages",
    pA2WebMeta:  "PHP / MySQL / HTML / CSS / JavaScript / Docker",
    pA2WebDesc:
      "Application web centralisant les offres de stage avec gestion des rôles (Administrateur, Pilote, Étudiant, Anonyme), moteur de recherche avancé, système de candidatures et wish-list. Architecture MVC, responsive design, sécurité et Docker.",

    tagEmbedded:   "Embarqué",
    tagNetworking: "Réseaux",
    tagRouting:    "Routage",
    tagTesting:    "Tests",

    /* --- Section Contact --- */
    contactTitle:        "Contact",
    contactSubtitle:     "Retrouvez ici mes coordonnées pour échanger au sujet d'une alternance en informatique.",
    contactInfoTitle:    "Coordonnées",
    contactInfoSubtitle: "Actuellement en stage jusqu'au 31/07/2026 — recherche une alternance à partir de septembre 2026.",

    emailLabel:    "Email",
    phoneLabel:    "Téléphone",
    githubLabel:   "GitHub",
    linkedinLabel: "LinkedIn",
    vimeoLabel:    "Vimeo"
  },

  /* ============================================================
     ANGLAIS
  ============================================================ */
  en: {

    /* --- Navigation --- */
    home:       "Home",
    about:      "About",
    experience: "Experience",
    skills:     "Skills",
    projects:   "Projects",
    contact:    "Contact",
    hire:       "Contact Me",

    /* --- Hero --- */
    hi: "Hi, I'm",

    descriptionStart:
      "Computer engineering student at CESI Rouen — currently a ",

    descriptionStrong1:
      "XR & Digital Twin Engineering intern at CESI LINEACT",

    descriptionMiddle:
      " on the VLF4EU project. I am looking for a ",

    descriptionStrong2:
      "3-year work-study program starting September 2026",

    descriptionEnd:
      " in software development and information systems.",

    download:  "Download CV",
    contactme: "Contact Me",

    /* --- Section About --- */
    aboutTitle: "About Me",

    aboutDescription:
      "Computer engineering student at CESI Rouen, I have a broad technical skillset: software development (C/C++, Python, C#), distributed architectures, networks & systems, and real-time simulation (Unity, OPC UA). Currently doing an XR & Digital Twin Engineering internship at CESI LINEACT on the VLF4EU project, I am looking for a 3-year work-study program starting September 2026.",

    education:    "Years of Study",
    expStat:      "Year of Experience",
    projectsDone: "Projects Completed",

    /* --- Experience --- */
    experienceTitle:    "Experience",
    experienceSubtitle: "My professional background.",

    expRole:    "Intern — XR & Digital Twin Engineering",
    expCompany: "CESI LINEACT — VLF4EU Project",
    expPeriod:  "2026 — Ongoing (end: 31/07/2026)",

    expMission1: "Refactoring and restructuring of a Unity software architecture toward a modular and extensible design",
    expMission2: "Design and integration of real-time components within an XR digital twin system",
    expMission3: "Contribution to the deployment of a distributed architecture in an industrial environment (Docker, API REST, OPC UA)",

    /* --- Skills --- */
    skillsTitle:    "My Skills",
    skillsSubtitle: "Technologies and tools I use in my projects.",

    programming: "Languages",
    softdev:     "Software Development",
    webdev:      "Web Development",
    databases:   "Databases",
    networks:    "Systems & Networks",
    simulation:  "Simulation & Real-time",
    tools:       "Tools",

    tagOOP:         "OOP",
    tagMVC:         "MVC Architecture",
    tagAPI:         "REST API",
    tagDistributed: "Distributed Systems",
    tagRefactoring: "Refactoring",
    tagResponsive:  "Responsive Design",

    /* --- Projects --- */
    projectsKicker:   "PROJECTS",
    projectsTitle:    "Projects",
    projectsSubtitle: "A selection of academic and personal projects.",

    projectsTabDist: "DIST",
    projectsTabIndi: "INDI",
    projectsTabA1:   "A1",
    projectsTabA2:   "A2",

    /* --- DIST --- */
    distTitle: "Distinctive Project — Hackathon",
    distDesc:  "Projects built during a hackathon, solving real-world problems.",

    pDistEcoPromptTitle: "EcoPrompt — AI Environmental Impact Analyzer",
    pDistEcoPromptMeta:  "HTML / CSS / JavaScript",
    pDistEcoPromptDesc:
      "Web tool developed during the Hack4Good/ADEME hackathon to analyze the energy and environmental impact of prompts sent to AI models. Calculates energy consumption, CO₂ emissions, an ecological score, and compares results to everyday equivalents.",

    pDistNeuroChatTitle: "NeuroChat — Dynamic AI Model Selection",
    pDistNeuroChatMeta:  "Python / Gemini API / CustomTkinter",
    pDistNeuroChatDesc:
      "Conversational assistant that automatically selects the optimal Gemini model based on prompt complexity (score 0–100). Multi-criteria analysis engine (length, syntax, semantics, structure) with automatic fallback on error.",

    /* --- INDI --- */
    indiTitle: "Individual — Personal Projects",
    indiDesc:  "Projects developed independently to experiment and improve skills.",

    pIndiSnakeTitle: "Snake — SFML (C++17): Retro Game with Clean Architecture",
    pIndiSnakeMeta:  "C++17 / SFML / Clean Architecture / UML",
    pIndiSnakeDesc:
      "Modern Snake implementation in C++17 using SFML: game loop, state management (Start/Playing/Pause/Game Over), collisions, food spawning, scoring and progressive difficulty. Documented with UML and structured commits.",

    /* --- A1 --- */
    a1Title: "A1 — Academic Projects (Engineering / Science)",
    a1Desc:  "CESI team projects: electronics, simulation, signal processing, and databases.",

    pA1StrongboxTitle: "Strongbox 3000 — Secure Safe Prototype",
    pA1StrongboxMeta:  "Arduino / Logic / Electronics",
    pA1StrongboxDesc:
      "Designed a secure safe prototype: logic modeling (truth tables, Karnaugh maps), validation circuit implementation, and Arduino development to identify the card model and handle authentication.",

    pA1FastTitle: "Fast & Furious — Numerical Track Simulation",
    pA1FastMeta:  "Python / Jupyter / Modeling",
    pA1FastDesc:
      "Physics-based study of a track (slope, loop, jump) solved numerically in Python: minimum speed constraints, plots (speed, trajectory), model comparison, and result-based recommendations.",

    pA1EscapeTitle: "Escape No Game — Covert Audio-Signal Communication",
    pA1EscapeMeta:  "Signal Processing / Jupyter / Simulation",
    pA1EscapeDesc:
      "High-frequency message transmission POC: TX/RX chain definition, filtering and frequency analysis, then Python simulation (framing, error detection, message reconstruction).",

    pA1AirTitle: "Air Quality — Relational Database",
    pA1AirMeta:  "MySQL / Modeling / SQL",
    pA1AirDesc:
      "Designed and built a relational database to centralize public sensor data: conceptual/logical/physical modeling, realistic dataset population, advanced SQL queries (joins, aggregates), and role-based access (admin/user).",

    tagElectronics: "Electronics",
    tagLogic:       "Logic",
    tagSimulation:  "Simulation",
    tagModeling:    "Modeling",
    tagSignal:      "Signal",

    /* --- A2 --- */
    a2Title: "A2 — Academic Projects (Software / Embedded / Networking)",
    a2Desc:  "CESI projects focused on software development, embedded systems, and networking.",

    pA2WeatherTitle: "Worldwide Weather Watcher — Embedded Weather Station",
    pA2WeatherMeta:  "Arduino (ATmega328P) / Sensors / SD / RTC",
    pA2WeatherDesc:
      "Built an embedded weather-station prototype: sensor acquisition (BME280 + light), RTC timestamping, CSV logging to SD card, diagnostic LED, serial console, multi-mode management, and EEPROM settings persistence with CRC validation. Teamwork.",

    pA2GOLTitle: "Game of Life — C++ OOP Application with SFML",
    pA2GOLMeta:  "C++ / SFML / MVC / Design Patterns",
    pA2GOLDesc:
      "Implemented Conway's Game of Life with a clean, extensible OOP architecture: MVC, Observer & Strategy patterns, file-based grid loading, dual rendering (console + SFML), auto-stop conditions, and built-in unit tests.",

    pA2FunkyTitle: "FunkyTown — Multi-site Network Design & Deployment",
    pA2FunkyMeta:  "Cisco Packet Tracer / VLAN / Routing / IPv6",
    pA2FunkyDesc:
      "Designed a complete multi-organization network lab: VLAN segmentation (VTP, VLSM), inter-VLAN routing, DHCP/DNS, Wi-Fi, security hardening (SSH/telnet), EtherChannel, and IPv6 tunneling to a cloud datacenter.",

    pA2WebTitle: "Web Project — Internship Search Platform",
    pA2WebMeta:  "PHP / MySQL / HTML / CSS / JavaScript / Docker",
    pA2WebDesc:
      "Web application centralizing internship offers with role-based access (Administrator, Pilot, Student, Anonymous), advanced search engine, application system and wish-list. MVC architecture, responsive design, security, and Docker.",

    tagEmbedded:   "Embedded",
    tagNetworking: "Networking",
    tagRouting:    "Routing",
    tagTesting:    "Testing",

    /* --- Contact --- */
    contactTitle:        "Contact",
    contactSubtitle:     "Here are my contact details to discuss a work-study opportunity in computer science.",
    contactInfoTitle:    "Contact Information",
    contactInfoSubtitle: "Currently doing an internship until 31/07/2026 — looking for a work-study program starting September 2026.",

    emailLabel:    "Email",
    phoneLabel:    "Phone",
    githubLabel:   "GitHub",
    linkedinLabel: "LinkedIn",
    vimeoLabel:    "Vimeo"
  }
};