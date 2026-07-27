export type Language = 'en' | 'fr';

export const translations = {
  en: {
    // Nav
    navCode: 'Code',
    navPhotography: 'Photography',
    navLinkedIn: 'LinkedIn',
    navContact: 'Contact',

    // Hero
    heroSubtitle: 'Incoming MSc Student in European & International Politics & Policy at LSE',
    heroTagline: 'McGill BA in Political Science • Policy Analysis & Public Affairs',
    location: 'London, UK / Montréal, Canada',

    // About / Journey Section
    aboutBadge: 'ACADEMIC PROFILE & JOURNEY',
    aboutHeading: 'POLICY ANALYSIS, EUROPEAN & INTERNATIONAL AFFAIRS.',
    aboutText: 'Training in policy analysis and formulation. Applying analytical skills and deep knowledge of American and European politics to effectively frame policy questions and solutions in a rapidly changing world. Practicing photography since 2019.',
    btnViewResume: 'VIEW RESUME (PDF)',
    timelineTitle: 'ACADEMIC & PROFESSIONAL JOURNEY',

    categoryEducation: 'EDUCATION',
    categoryExperience: 'EXPERIENCE & LEADERSHIP',

    timelineItems: [
      {
        id: 1,
        period: 'SEP 2026 — PRESENT',
        role: 'MSc in European and International Politics and Policy',
        institution: 'London School of Economics and Political Science (LSE)',
        description: 'Advanced graduate training focusing on European governance, international policy formulation, integration, and quantitative policy research.',
        highlight: 'Upcoming MSc Degree',
        category: 'education',
        logo: '/lse logo.png'
      },
      {
        id: 4,
        period: 'MAY 2025 — AUG 2025',
        role: 'Policy Development Intern',
        institution: 'Volt France / Europa',
        description: 'Participated in policy formulation for the French branch and contributed to the municipal election program focused on security policy.',
        highlight: 'Policy Internship',
        category: 'experience',
        logo: '/Logo_Volt_Europa.svg'
      },
      {
        id: 3,
        period: 'JAN 2025 — MAY 2025',
        role: 'Exchange Student — US & EU Politics',
        institution: 'University of North Carolina at Chapel Hill (UNC)',
        description: 'Specialized coursework in American politics, EU institutions, and international relations (achieved top grades A / B+).',
        highlight: 'Academic Exchange',
        category: 'education',
        logo: '/unc chapel hill.webp'
      },
      {
        id: 6,
        period: 'SEP 2024 — JAN 2025',
        role: 'Project Manager',
        institution: 'Democrats at McGill (Montréal, Quebec)',
        description: 'Led graphic design and digital communication strategy for the association while taking an active part in executive decision-making and strategic discussions.',
        highlight: 'Project Management',
        category: 'experience'
      },
      {
        id: 2,
        period: 'AUG 2022 — DEC 2025',
        role: 'BA in Political Science',
        institution: 'McGill University (Montréal, Quebec)',
        description: 'Concentration in US, EU, and International Relations, American History. Coursework in policy frameworks, political economy, and quantitative analysis.',
        highlight: 'Bachelor Degree',
        category: 'education',
        logo: '/McGill_University_CoA.svg'
      },
      {
        id: 5,
        period: '2020 — 2022',
        role: 'Rapporteur for Environment Committee',
        institution: 'New Caledonia Youth Congress',
        description: 'Took part in drafting bills for the youth of the territory (400k pop). Authored the agricultural & aquacultural training bill adopted on Jan 13, 2021.',
        highlight: 'Public Policy & Leadership',
        category: 'experience'
      }
    ],

    // Works Section
    featuredCodeTitle: 'FEATURED RESEARCH & CODE PROJECTS',
    retrievingArchives: 'Retrieving repositories...',
    failedToRetrieve: 'Failed to retrieve:',
    noDescription: 'No description provided for this repository.',

    // Photography Section
    photographyTitle: 'PHOTOGRAPHY (PRACTICING SINCE 2019)',

    // Drawer
    drawerSubtitle: 'CONTACT',
    drawerTitle: "LET'S CONNECT.",
    drawerDescription: 'Feel free to reach out regarding policy research, European & international affairs, or photography projects.',
    copyEmail: 'COPY EMAIL',
    copiedToast: 'Copied email to clipboard!',
    curriculumVitae: 'CURRICULUM VITAE',
    resumeSubtitle: 'PDF • McGill BA / LSE MSc Student',
    socialProfiles: 'PROFILES & PORTFOLIO',
    phoneLabel: 'PHONE',

    // Footer
    allRightsReserved: 'ALL RIGHTS RESERVED'
  },
  fr: {
    // Nav
    navCode: 'Code',
    navPhotography: 'Photographie',
    navLinkedIn: 'LinkedIn',
    navContact: 'Contact',

    // Hero
    heroSubtitle: 'Admis en MSc European & International Politics & Policy à la LSE',
    heroTagline: 'Diplômé BA en Science Politique à McGill • Analyse des Politiques Publiques & Affaires Internationales',
    location: 'Londres, R-U / Montréal, Canada',

    // About / Journey Section
    aboutBadge: 'PROFIL ACADÉMIQUE & PARCOURS',
    aboutHeading: "ANALYSE POLITIQUE, AFFAIRES EUROPÉENNES ET INTERNATIONALES.",
    aboutText: "Spécialisé dans l'analyse et la formulation des politiques publiques. Mettant à profit mes compétences analytiques et une fine compréhension des enjeux politiques américains et européens pour apporter des solutions concrètes dans un monde en mutation. Pratique de la photographie depuis 2019.",
    btnViewResume: 'CONSULTER LE CV (PDF)',
    timelineTitle: 'PARCOURS ACADÉMIQUE ET PROFESSIONNEL',

    categoryEducation: 'FORMATION',
    categoryExperience: 'EXPÉRIENCE ET ENGAGEMENT',

    timelineItems: [
      {
        id: 1,
        period: 'SEP 2026 — PRÉSENT',
        role: 'MSc European and International Politics and Policy',
        institution: 'London School of Economics and Political Science (LSE)',
        description: 'Master spécialisé axé sur la gouvernance européenne, la formulation des politiques internationales, l’intégration régionale et la recherche quantitative appliquée.',
        highlight: 'Master MSc',
        category: 'education',
        logo: '/lse logo.png'
      },
      {
        id: 4,
        period: 'MAI 2025 — AOÛT 2025',
        role: 'Stagiaire en Élaboration des Politiques Publiques',
        institution: 'Volt France / Europa',
        description: 'Contribution au développement des propositions politiques pour l’antenne française et participation au programme électoral municipal axé sur la sécurité.',
        highlight: 'Stage en Politiques Publiques',
        category: 'experience',
        logo: '/Logo_Volt_Europa.svg'
      },
      {
        id: 3,
        period: 'JAN 2025 — MAI 2025',
        role: 'Échange Académique — Politique Américaine & Européenne',
        institution: 'University of North Carolina at Chapel Hill (UNC)',
        description: 'Programme d’échange universitaire approfondi sur les institutions européennes et la vie politique américaine (résultats A / B+).',
        highlight: 'Échange Universitaire',
        category: 'education',
        logo: '/unc chapel hill.webp'
      },
      {
        id: 6,
        period: 'SEPT 2024 — JANV 2025',
        role: 'Chef de Projet',
        institution: 'Democrats at McGill (Montréal, Québec)',
        description: 'Direction de la création graphique et de la communication visuelle de l’association, avec participation active aux réunions stratégiques et prises de décision.',
        highlight: 'Chef de Projet',
        category: 'experience'
      },
      {
        id: 2,
        period: 'AOÛT 2022 — DÉC 2025',
        role: 'Bachelor (BA) en Science Politique',
        institution: 'Université McGill (Montréal, Québec)',
        description: 'Spécialisation en relations internationales, politique américaine et européenne, et histoire américaine. Cours approfondis en économie politique et analyse quantitative.',
        highlight: 'Diplôme de Bachelor',
        category: 'education',
        logo: '/McGill_University_CoA.svg'
      },
      {
        id: 5,
        period: '2020 — 2022',
        role: 'Rapporteur de la Commission Environnement',
        institution: 'Congrès des Jeunes de Nouvelle-Calédonie',
        description: 'Rédaction de propositions de lois pour la jeunesse du territoire (400 000 hab.). Auteur de la proposition sur les formations agricoles et aquacoles adoptée le 13 janvier 2021.',
        highlight: 'Engagement & Politiques Publiques',
        category: 'experience'
      }
    ],

    // Works Section
    featuredCodeTitle: 'PROJETS DE CODE ET DE RECHERCHE',
    retrievingArchives: 'Chargement des projets...',
    failedToRetrieve: 'Impossible de charger les dépôts :',
    noDescription: 'Aucune description disponible pour ce dépôt.',

    // Photography Section
    photographyTitle: 'PHOTOGRAPHIE (DEPUIS 2019)',

    // Drawer
    drawerSubtitle: 'CONTACT',
    drawerTitle: 'PRENONS CONTACT.',
    drawerDescription: 'N’hésitez pas à me contacter pour échanger sur l’analyse des politiques publiques, les affaires européennes et internationales, ou des projets photographiques.',
    copyEmail: "COPIER L'ADRESSE EMAIL",
    copiedToast: 'Adresse email copiée dans le presse-papier !',
    curriculumVitae: 'CURRICULUM VITAE',
    resumeSubtitle: 'PDF • BA McGill / MSc LSE',
    socialProfiles: 'PROFILS & PORTFOLIO',
    phoneLabel: 'TÉLÉPHONE',

    // Footer
    allRightsReserved: 'TOUS DROITS RÉSERVÉS'
  }
};
