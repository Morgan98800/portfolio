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
    heroTagline: 'McGill BA in Political Science • Policy Analysis & GIS Mapping',
    location: 'London, UK / Montréal, Canada',

    // About / Journey Section
    aboutBadge: 'ACADEMIC PROFILE & JOURNEY',
    aboutHeading: 'POLICY ANALYSIS, EUROPEAN & INTERNATIONAL AFFAIRS.',
    aboutText: 'Training in policy analysis and formulation. Applying analytical skills, GIS mapping, and deep knowledge of American and European politics to effectively frame policy questions and solutions in a rapidly changing world. Practicing photography since 2019.',
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
    drawerDescription: 'Feel free to reach out regarding policy research, European & international affairs, spatial mapping, or photography projects.',
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
    heroSubtitle: 'Futur étudiant en MSc European & International Politics & Policy à la LSE',
    heroTagline: 'Diplômé BA McGill en Science Politique • Analyse des Politiques Publiques & Cartographie GIS',
    location: 'Londres, R-U / Montréal, Canada',

    // About / Journey Section
    aboutBadge: 'PROFIL ACADÉMIQUE & PARCOURS',
    aboutHeading: "ANALYSE DES POLITIQUES PUBLIQUES ET AFFAIRES EUROPÉENNES & INTERNATIONALES.",
    aboutText: "Formé à l'analyse et à la formulation des politiques publiques. J'applique des compétences analytiques, de la cartographie GIS et une connaissance approfondie des politiques américaine et européenne pour cadrer efficacement les enjeux dans un monde en constante mutation. Pratique de la photographie depuis 2019.",
    btnViewResume: 'VOIR LE CV (PDF)',
    timelineTitle: 'PARCOURS ACADÉMIQUE ET PROFESSIONNEL',

    categoryEducation: 'FORMATION',
    categoryExperience: 'EXPÉRIENCE & LEADERSHIP',

    timelineItems: [
      {
        id: 1,
        period: 'SEP 2026 — PRÉSENT',
        role: 'MSc in European and International Politics and Policy',
        institution: 'London School of Economics and Political Science (LSE)',
        description: 'Formation supérieure spécialisée sur la gouvernance européenne, la formulation des politiques internationales et l’analyse quantitative des politiques publiques.',
        highlight: 'Futur Master MSc',
        category: 'education',
        logo: '/lse logo.png'
      },
      {
        id: 4,
        period: 'MAI 2025 — AOÛT 2025',
        role: 'Stagiaire en Développement de Politiques',
        institution: 'Volt France / Europa',
        description: 'Participation au développement des propositions politiques de la branche française et élaboration du programme électoral municipal axé sur la sécurité.',
        highlight: 'Stage en Politiques Publiques',
        category: 'experience',
        logo: '/Logo_Volt_Europa.svg'
      },
      {
        id: 3,
        period: 'JAN 2025 — MAI 2025',
        role: 'Échange Universitaire — Politique US & UE',
        institution: 'University of North Carolina at Chapel Hill (UNC)',
        description: 'Programme d’échange spécialisé en institutions européennes et politique américaine (résultats d’excellence A / B+).',
        highlight: 'Échange Académique',
        category: 'education',
        logo: '/unc chapel hill.webp'
      },
      {
        id: 2,
        period: 'AOÛT 2022 — DÉC 2025',
        role: 'Bachelor (BA) en Science Politique',
        institution: 'Université McGill (Montréal, Québec)',
        description: 'Spécialisation en politique américaine, européenne, relations internationales et histoire américaine. Cours approfondis en économie politique et analyse quantitative.',
        highlight: 'Diplôme de Bachelor',
        category: 'education',
        logo: '/McGill_University_CoA.svg'
      },
      {
        id: 5,
        period: '2020 — 2022',
        role: 'Rapporteur de la Commission Environnement',
        institution: 'Congrès des Jeunes de Nouvelle-Calédonie',
        description: 'Rédaction de propositions de lois du territoire (400k hab.). Auteur du texte sur la promotion des formations agricoles et aquacoles adopté le 13 janvier 2021.',
        highlight: 'Politiques Publiques & Engagement',
        category: 'experience'
      }
    ],

    // Works Section
    featuredCodeTitle: 'PROJETS DE CODE & RECHERCHE EN VEDETTE',
    retrievingArchives: 'Récupération des dépôts...',
    failedToRetrieve: 'Échec de la récupération :',
    noDescription: 'Aucune description fournie pour ce dépôt.',

    // Photography Section
    photographyTitle: 'PHOTOGRAPHIE (PRATIQUE DEPUIS 2019)',

    // Drawer
    drawerSubtitle: 'CONTACT',
    drawerTitle: 'DISCUTONS ENSEMBLE.',
    drawerDescription: 'N’hésitez pas à me contacter pour échanger sur la recherche en politiques publiques, les affaires européennes et internationales, la cartographie spatiale ou des projets de photographie.',
    copyEmail: "COPIER L'EMAIL",
    copiedToast: 'Adresse email copiée dans le presse-papier !',
    curriculumVitae: 'CURRICULUM VITAE',
    resumeSubtitle: 'PDF • Diplômé McGill / MSc LSE',
    socialProfiles: 'PROFILS & PORTFOLIO',
    phoneLabel: 'TÉLÉPHONE',

    // Footer
    allRightsReserved: 'TOUS DROITS RÉSERVÉS'
  }
};
