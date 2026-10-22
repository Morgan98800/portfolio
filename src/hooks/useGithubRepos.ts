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
  }
];

export function useGithubRepos(_username: string, lang: 'en' | 'fr' = 'en') {
  const [repos, setRepos] = useState<Repository[]>(() => getBaseFeaturedProjects(lang));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setRepos(getBaseFeaturedProjects(lang));
    setLoading(false);
    setError(null);
  }, [lang]);

  return { repos, loading, error };
}
