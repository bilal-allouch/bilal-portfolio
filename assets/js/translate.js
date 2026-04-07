/* ================================================================
   TRANSLATE.JS — Système de traduction FR / EN
   ----------------------------------------------------------------
   Ce fichier contient tous les textes du portfolio dans les 2 langues.
   
   COMMENT ÇA MARCHE :
   - Chaque élément HTML avec data-i18n="clé" sera remplacé
     par le texte correspondant dans la langue active.
   - Exemple : <span data-i18n="home">Accueil</span>
     → devient "Home" quand on passe en anglais.
   
   STRUCTURE :
     translations.fr → Tous les textes en français
     translations.en → Tous les textes en anglais
================================================================ */

const translations = {

  /* ============================================================
     FRANÇAIS (langue par défaut)
  ============================================================ */
  fr: {

    /* --- Navigation --- */
    home:     "Accueil",
    about:    "À propos",
    skills:   "Compétences",
    projects: "Projets",
    contact:  "Contact",
    hire:     "Me contacter",

    /* --- Hero : Présentation principale --- */
    hi: "Bonjour, je suis",

    /* Texte de description découpé en plusieurs morceaux
       pour pouvoir mettre en gras certaines parties via data-i18n */
    descriptionStart:
      "Étudiant en informatique à CESI (école d'ingénieurs) à Rouen, je suis actuellement à la recherche d'un ",

    /* Durée imposée par l'école CESI */
    descriptionStrong1: "stage de 12 à 15 semaines",

    descriptionMiddle:
      " entre avril et juillet 2026 afin de contribuer à des projets concrets et développer mes compétences techniques au sein d'une équipe. À l'issue de ce stage, je souhaite poursuivre mon parcours par une ",

    descriptionStrong2:
      "alternance en informatique à partir de septembre 2026",

    descriptionEnd: " dans le cadre de mon cycle ingénieur.",

    /* Boutons héro */
    download:  "Télécharger CV",
    contactme: "Me contacter",

    /* --- Section À propos --- */
    aboutTitle: "À propos de moi",
    aboutDescription:
      "Je suis étudiant en informatique au CESI (école d'ingénieurs) à Rouen, actuellement en cycle préparatoire (Bac+2). Passionné par le développement informatique et les nouvelles technologies, j'ai réalisé plusieurs projets personnels dans différents domaines tels que le développement web, les réseaux et la programmation. À travers ces projets, j'ai pu développer des compétences techniques et renforcer ma capacité à travailler sur des solutions concrètes.",

    /* Statistiques */
    education:    "Années d'étude",
    experience:   "Année d'expérience",
    projectsDone: "Projets réalisés",

    /* --- Section Compétences --- */
    skillsTitle:    "Mes compétences",
    skillsSubtitle: "Technologies et outils que j'utilise dans mes projets.",

    /* Catégories de compétences */
    programming: "Programmation",
    webdev:      "Développement Web",
    databases:   "Bases de données",
    networks:    "Réseaux & Systèmes",
    embedded:    "Systèmes embarqués",
    tools:       "Outils",
    teamwork:    "Travail en équipe",

    /* Tags des chips */
    tagOOP:           "POO",
    tagDataStructures:"Structures de données",
    tagAlgorithms:    "Algorithmes",
    tagResponsive:    "Responsive",
    tagSqlQueries:    "Requêtes SQL",
    tagSensors:       "Capteurs",
    tagCollaboration: "Collaboration",
    tagCommunication: "Communication",
    tagOrganization:  "Organisation",
    tagProblemSolving:"Résolution de problèmes",
    tagTeamwork:      "Travail en groupe",

    /* --- Section Projets --- */
    projectsKicker:   "PROJECTS / PROJETS",
    projectsTitle:    "Projets",
    projectsSubtitle: "Sélection de projets académiques et personnels.",

    /* Labels des onglets */
    projectsTabA1:   "A1",
    projectsTabA2:   "A2",
    projectsTabIndi: "INDI",

    /* --- Groupe A1 : Projets académiques Année 1 --- */
    a1Title: "A1 — Projets académiques (Ingénierie / Sciences)",
    a1Desc:  "Projets CESI en équipe : électronique, simulation, signal et bases de données.",

    /* Carte : Strongbox 3000 */
    pA1StrongboxTitle: "Strongbox 3000 — Prototype de coffre-fort sécurisé",
    pA1StrongboxMeta:  "Arduino / Logique / Électronique",
    pA1StrongboxDesc:
      "Conception d'un prototype de coffre-fort sécurisé : modélisation logique (tables de vérité, Karnaugh), réalisation d'un circuit de validation, et développement Arduino pour identifier le modèle de carte et gérer l'authentification.",

    /* Carte : Fast & Furious */
    pA1FastTitle: "Fast & Furious — Simulation numérique d'un circuit",
    pA1FastMeta:  "Python / Jupyter / Modélisation",
    pA1FastDesc:
      "Étude physique d'un circuit (pente, looping, saut) et résolution numérique sous Python : calcul des vitesses minimales, tracés (vitesse, trajectoire), comparaison de modèles et recommandations à partir des résultats.",

    /* Carte : Escape No Game */
    pA1EscapeTitle: "Escape No Game — Communication discrète par signal sonore",
    pA1EscapeMeta:  "Traitement du signal / Jupyter / Simulation",
    pA1EscapeDesc:
      "POC de transmission d'un message via hautes fréquences : définition de la chaîne émission/réception, filtrage et analyse fréquentielle, puis modélisation numérique sous Python (trames, détection d'erreur, reconstruction du message).",

    /* Carte : Qualité de l'air */
    pA1AirTitle: "Qualité de l'air — Base de données relationnelle",
    pA1AirMeta:  "MySQL / Modélisation / SQL",
    pA1AirDesc:
      "Conception et réalisation d'une base relationnelle pour centraliser des données publiques de capteurs : modélisation MCD/MLD/MPD, peuplement réaliste, requêtes SQL avancées (jointures, agrégats) et gestion des droits (admin/user).",

    /* Tags A1 */
    tagElectronics: "Électronique",
    tagLogic:       "Logique",
    tagSimulation:  "Simulation",
    tagModeling:    "Modélisation",
    tagSignal:      "Signal",

    /* --- Groupe A2 : Projets académiques Année 2 --- */
    a2Title: "A2 — Projets académiques (Développement / Embarqué / Réseau)",
    a2Desc:  "Projets CESI orientés développement logiciel, systèmes embarqués et réseaux.",

    /* Carte : Worldwide Weather Watcher */
    pA2WeatherTitle: "Worldwide Weather Watcher — Station météo embarquée",
    pA2WeatherMeta:  "Arduino (ATmega328P) / Capteurs / SD / RTC",
    pA2WeatherDesc:
      "Développement d'un prototype de station météo embarquée : acquisition capteurs (BME280 + luminosité), horodatage RTC, enregistrement CSV sur carte SD, LED de diagnostic, console série, gestion de modes (Standard/Économique/Maintenance/Configuration) et sauvegarde des paramètres en EEPROM avec contrôle CRC. Travail en équipe (coordination/intégration).",

    /* Carte : Game of Life */
    pA2GOLTitle: "Game of Life — Application C++ (POO) avec SFML",
    pA2GOLMeta:  "C++ / SFML / MVC / Design Patterns",
    pA2GOLDesc:
      "Implémentation du Jeu de la Vie avec une architecture orientée objet et extensible : MVC, patterns Observer & Strategy, lecture de grille depuis fichier, double rendu (console + SFML), arrêt automatique (stabilité / itérations max) et tests unitaires intégrés pour valider les évolutions de la grille.",

    /* Carte : FunkyTown */
    pA2FunkyTitle: "FunkyTown — Conception & déploiement d'un réseau multi-sites",
    pA2FunkyMeta:  "Cisco Packet Tracer / VLAN / Routage / IPv6",
    pA2FunkyDesc:
      "Réalisation d'une maquette réseau complète pour plusieurs organisations : segmentation VLAN (VTP, VLSM), routage inter-VLAN, DHCP/DNS, Wi-Fi (invités/entreprise), sécurisation (accès SSH/telnet, durcissement), EtherChannel, et interconnexion IPv6 via tunnel vers un datacenter cloud. Livrables : cartographie, plan d'adressage et stratégie de déploiement.",

    /* Tags A2 */
    tagEmbedded:   "Embarqué",
    tagNetworking: "Réseaux",
    tagRouting:    "Routage",
    tagTesting:    "Tests",

    /* --- Groupe INDI : Projets personnels --- */
    indiTitle: "Individuel — Projets personnels",
    indiDesc:  "Projets réalisés en autonomie pour progresser et expérimenter.",

    /* Carte : Snake */
    pIndiSnakeTitle: "Snake — SFML (C++17) : jeu rétro, architecture propre",
    pIndiSnakeMeta:  "C++17 / SFML / Clean Architecture / UML",
    pIndiSnakeDesc:
      "Reproduction moderne du Snake en C++17 avec SFML, construite avec une architecture orientée objet claire : boucle de jeu, gestion d'états (Start/Playing/Pause/Game Over), collisions (murs + self), génération de nourriture sur cases libres, score et difficulté progressive. Projet documenté avec UML et commits structurés afin de mettre en avant la maintenabilité et l'extensibilité.",

    /* --- Section Contact --- */
    contactTitle:       "Contact",
    contactSubtitle:    "Retrouvez ici mes coordonnées pour échanger facilement.",
    contactInfoTitle:   "Coordonnées",
    contactInfoSubtitle:"Détails de contact",

    /* Labels des lignes de contact */
    emailLabel:   "Email",
    phoneLabel:   "Téléphone",
    githubLabel:  "GitHub",
    linkedinLabel:"LinkedIn",
    vimeoLabel:   "Vimeo"
  },

  /* ============================================================
     ANGLAIS
  ============================================================ */
  en: {

    /* --- Navigation --- */
    home:     "Home",
    about:    "About",
    skills:   "Skills",
    projects: "Projects",
    contact:  "Contact",
    hire:     "Hire Me",

    /* --- Hero : Présentation principale --- */
    hi: "Hi, I'm",

    descriptionStart:
      "Computer science student at CESI Engineering School in Rouen. I am currently looking for a ",

    /* Durée imposée par l'école CESI */
    descriptionStrong1: "12 to 15 week internship",

    descriptionMiddle:
      " between April and July 2026 to contribute to real-world projects and strengthen my technical skills within a professional team. After this internship, I aim to continue my studies through a ",

    descriptionStrong2:
      "work-study program in computer science starting in September 2026",

    descriptionEnd: " as part of my engineering degree.",

    /* Boutons héro */
    download:  "Download CV",
    contactme: "Contact Me",

    /* --- Section About --- */
    aboutTitle: "About Me",
    aboutDescription:
      "I am a computer science student at CESI Engineering School in Rouen, currently in the preparatory cycle (equivalent to a two-year undergraduate level). Passionate about software development and technology, I have completed several personal projects in different areas such as web development, networking and programming. These projects allowed me to develop strong technical foundations and practical problem-solving skills.",

    /* Statistiques */
    education:    "Years of Study",
    experience:   "Years of Experience",
    projectsDone: "Projects Completed",

    /* --- Section Skills --- */
    skillsTitle:    "My Skills",
    skillsSubtitle: "Technologies and tools I use in my projects.",

    /* Catégories */
    programming: "Programming",
    webdev:      "Web Development",
    databases:   "Databases",
    networks:    "Networks & Systems",
    embedded:    "Embedded Systems",
    tools:       "Tools",
    teamwork:    "Team Work",

    /* Tags des chips */
    tagOOP:           "OOP",
    tagDataStructures:"Data Structures",
    tagAlgorithms:    "Algorithms",
    tagResponsive:    "Responsive",
    tagSqlQueries:    "SQL Queries",
    tagSensors:       "Sensors",
    tagCollaboration: "Collaboration",
    tagCommunication: "Communication",
    tagOrganization:  "Organization",
    tagProblemSolving:"Problem Solving",
    tagTeamwork:      "Teamwork",

    /* --- Section Projects --- */
    projectsKicker:   "PROJECTS",
    projectsTitle:    "Projects",
    projectsSubtitle: "A selection of academic and personal projects.",

    /* Labels des onglets */
    projectsTabA1:   "A1",
    projectsTabA2:   "A2",
    projectsTabIndi: "INDI",

    /* --- Groupe A1 --- */
    a1Title: "A1 — Academic Projects (Engineering / Science)",
    a1Desc:  "CESI team projects: electronics, simulation, signal processing, and databases.",

    /* Carte : Strongbox 3000 */
    pA1StrongboxTitle: "Strongbox 3000 — Secure Safe Prototype",
    pA1StrongboxMeta:  "Arduino / Logic / Electronics",
    pA1StrongboxDesc:
      "Designed a secure safe prototype: logic modeling (truth tables, Karnaugh maps), validation circuit implementation, and Arduino development to identify the card model and handle authentication.",

    /* Carte : Fast & Furious */
    pA1FastTitle: "Fast & Furious — Numerical Track Simulation",
    pA1FastMeta:  "Python / Jupyter / Modeling",
    pA1FastDesc:
      "Physics-based study of a track (slope, loop, jump) solved numerically in Python: minimum speed constraints, plots (speed, trajectory), model comparison, and result-based recommendations.",

    /* Carte : Escape No Game */
    pA1EscapeTitle: "Escape No Game — Covert Audio-Signal Communication",
    pA1EscapeMeta:  "Signal Processing / Jupyter / Simulation",
    pA1EscapeDesc:
      "High-frequency message transmission POC: TX/RX chain definition, filtering and frequency analysis, then Python simulation (framing, error detection, message reconstruction).",

    /* Carte : Qualité de l'air */
    pA1AirTitle: "Air Quality — Relational Database",
    pA1AirMeta:  "MySQL / Modeling / SQL",
    pA1AirDesc:
      "Designed and built a relational database to centralize public sensor data: conceptual/logical/physical modeling, realistic dataset population, advanced SQL queries (joins, aggregates), and role-based access (admin/user).",

    /* Tags A1 */
    tagElectronics: "Electronics",
    tagLogic:       "Logic",
    tagSimulation:  "Simulation",
    tagModeling:    "Modeling",
    tagSignal:      "Signal",

    /* --- Groupe A2 --- */
    a2Title: "A2 — Academic Projects (Software / Embedded / Networking)",
    a2Desc:  "CESI projects focused on software development, embedded systems, and networking.",

    /* Carte : Worldwide Weather Watcher */
    pA2WeatherTitle: "Worldwide Weather Watcher — Embedded Weather Station",
    pA2WeatherMeta:  "Arduino (ATmega328P) / Sensors / SD / RTC",
    pA2WeatherDesc:
      "Built an embedded weather-station prototype: sensor acquisition (BME280 + light), RTC timestamping, CSV logging to SD card, diagnostic LED, serial console, multi-mode management (Standard/Eco/Maintenance/Configuration), and settings persistence in EEPROM with CRC validation. Teamwork (coordination/integration).",

    /* Carte : Game of Life */
    pA2GOLTitle: "Game of Life — C++ OOP Application with SFML",
    pA2GOLMeta:  "C++ / SFML / MVC / Design Patterns",
    pA2GOLDesc:
      "Implemented Conway's Game of Life with a clean, extensible OOP architecture: MVC, Observer & Strategy patterns, file-based grid loading, dual rendering (console + SFML), auto-stop conditions (stable state / max iterations), and built-in unit tests to validate grid evolution.",

    /* Carte : FunkyTown */
    pA2FunkyTitle: "FunkyTown — Multi-site Network Design & Deployment",
    pA2FunkyMeta:  "Cisco Packet Tracer / VLAN / Routing / IPv6",
    pA2FunkyDesc:
      "Designed a complete multi-organization network lab: VLAN segmentation (VTP, VLSM), inter-VLAN routing, DHCP/DNS, Wi-Fi (guest/enterprise), security hardening (SSH/telnet access controls), EtherChannel, and IPv6 tunneling to a cloud datacenter. Deliverables: topology maps, addressing plan, and deployment strategy.",

    /* Tags A2 */
    tagEmbedded:   "Embedded",
    tagNetworking: "Networking",
    tagRouting:    "Routing",
    tagTesting:    "Testing",

    /* --- Groupe INDI --- */
    indiTitle: "Individual — Personal Projects",
    indiDesc:  "Projects developed independently to experiment and improve skills.",

    /* Carte : Snake */
    pIndiSnakeTitle: "Snake — SFML (C++17): Retro Game with Clean Architecture",
    pIndiSnakeMeta:  "C++17 / SFML / Clean Architecture / UML",
    pIndiSnakeDesc:
      "Modern Snake implementation in C++17 using SFML, built with a clear object-oriented architecture: game loop, state management (Start/Playing/Pause/Game Over), wall and self-collisions, food spawning on free cells, scoring system and progressive difficulty. The project is documented with UML diagrams and structured commits to highlight maintainability and extensibility.",

    /* --- Section Contact --- */
    contactTitle:       "Contact",
    contactSubtitle:    "Here are my contact details to easily get in touch.",
    contactInfoTitle:   "Contact Information",
    contactInfoSubtitle:"Contact details",

    /* Labels des lignes de contact */
    emailLabel:   "Email",
    phoneLabel:   "Phone",
    githubLabel:  "GitHub",
    linkedinLabel:"LinkedIn",
    vimeoLabel:   "Vimeo"
  }
};