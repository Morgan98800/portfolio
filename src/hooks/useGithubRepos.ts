import { useState, useEffect } from 'react';

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
  isLive?: boolean;
}

// Curated project descriptions in English and French
const REPO_DESCRIPTIONS: Record<string, { en: string; fr: string }> = {
  '17-octobre-carte-interactive': {
    en: 'Interactive geospatial crisis mapping platform tracking the hour-by-hour propagation of unrest across Paris (October 17–18, 2026). Integrates georeferenced incident chronologies, police security perimeters, and MapLibre GL spatial analytics.',
    fr: 'Plateforme cartographique interactive documentant la propagation des émeutes à Paris heure par heure (17-18 octobre 2026). Intègre une chronologie géoréférencée des incidents, les périmètres de sécurité policiers et des analyses spatiales avec MapLibre GL.'
  },
  'federal-europe-explorer': {
    en: 'Interactive research tool and dashboard exploring European integration, federal governance models, and institutional policy metrics.',
    fr: 'Outil de recherche interactif et tableau de bord explorant l’intégration européenne, les modèles de gouvernance fédérale et les indicateurs politiques.'
  },
  'federal-eu-project': {
    en: 'Interactive research tool and dashboard exploring European integration, federal governance models, and institutional policy metrics.',
    fr: 'Outil de recherche interactif et tableau de bord explorant l’intégration européenne, les modèles de gouvernance fédérale et les indicateurs politiques.'
  },
  'kobo-news': {
    en: 'Automated news aggregator and RSS feed formatter optimized for Kobo e-ink readers, delivering curated international policy updates.',
    fr: 'Agrégateur de presse automatisé et lecteur RSS optimisé pour liseuses Kobo, diffusant une sélection d’actualités politiques internationales.'
  },
  'cinqpourcent': {
    en: 'Web application analyzing electoral thresholds, voting statistics, and parliamentary representation trends.',
    fr: 'Application web analysant les seuils électoraux, les statistiques de vote et les tendances de représentation parlementaire.'
  },
  'geoguessr-francais-tips': {
    en: 'Educational guide and spatial tips repository for French regional architecture, road signage, and geographic identification.',
    fr: 'Guide éducatif et dépôt d’indices géographiques pour l’identification des régions françaises (architecture, panneaux routiers).'
  }
};

const getBaseFeaturedProjects = (lang: 'en' | 'fr'): Repository[] => [
  {
    id: 17102026,
    name: '17-octobre-carte-interactive',
    description: REPO_DESCRIPTIONS['17-octobre-carte-interactive'][lang],
    html_url: 'https://17octobre-carte-interactive.netlify.app',
    stargazers_count: 8,
    forks_count: 2,
    language: 'TypeScript',
    updated_at: '2026-10-22T00:00:00Z',
    topics: ['maplibre-gl', 'geospatial', 'interactive-mapping', 'crisis-analysis'],
    isLive: true
  },
  {
    id: 801,
    name: 'federal-eu-project',
    description: REPO_DESCRIPTIONS['federal-eu-project'][lang],
    html_url: 'https://morgan98800.github.io/federal-eu-project',
    stargazers_count: 6,
    forks_count: 1,
    language: 'TypeScript',
    updated_at: '2025-08-01T00:00:00Z',
    topics: ['european-union', 'policy-analysis', 'governance-models'],
    isLive: true
  },
  {
    id: 802,
    name: 'Kobo-news',
    description: REPO_DESCRIPTIONS['kobo-news'][lang],
    html_url: 'https://github.com/Morgan98800/Kobo-news',
    stargazers_count: 4,
    forks_count: 0,
    language: 'Python',
    updated_at: '2025-06-01T00:00:00Z',
    topics: ['python', 'rss', 'e-ink', 'policy-news'],
    isLive: false
  }
];

export function useGithubRepos(username: string, lang: 'en' | 'fr' = 'en') {
  const [repos, setRepos] = useState<Repository[]>(() => getBaseFeaturedProjects(lang));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        
        if (!response.ok) {
          // If rate limited or response not ok, retain curated featured projects
          return;
        }
        
        const data = await response.json();
        if (!Array.isArray(data)) return;

        // Find matches for federal and kobo
        const federalRepo = data.find((r: Repository) => r.name.toLowerCase().includes('federal'));
        const koboRepo = data.find((r: Repository) => r.name.toLowerCase().includes('kobo'));

        const updatedProjects = getBaseFeaturedProjects(lang).map((p) => {
          if (p.name === 'federal-eu-project' && federalRepo) {
            return {
              ...p,
              stargazers_count: federalRepo.stargazers_count || p.stargazers_count,
              forks_count: federalRepo.forks_count || p.forks_count,
              updated_at: federalRepo.updated_at || p.updated_at
            };
          }
          if (p.name.toLowerCase() === 'kobo-news' && koboRepo) {
            return {
              ...p,
              stargazers_count: koboRepo.stargazers_count || p.stargazers_count,
              forks_count: koboRepo.forks_count || p.forks_count,
              updated_at: koboRepo.updated_at || p.updated_at,
              html_url: koboRepo.html_url || p.html_url
            };
          }
          return p;
        });

        if (isMounted) {
          setError(null);
          setRepos(updatedProjects);
        }
      } catch (err: any) {
        // Fallback gracefully to base featured projects without cluttering UI
        if (isMounted) {
          setError(null);
          setRepos(getBaseFeaturedProjects(lang));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Update with current language immediately
    setRepos(getBaseFeaturedProjects(lang));

    if (username) {
      fetchRepos();
    }

    return () => {
      isMounted = false;
    };
  }, [username, lang]);

  return { repos, loading, error };
}
