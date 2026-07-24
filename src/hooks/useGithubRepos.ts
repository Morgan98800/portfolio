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
}

// Custom curated descriptions for repositories with null descriptions on GitHub
const REPO_DESCRIPTIONS: Record<string, { en: string; fr: string }> = {
  'federal-europe-explorer': {
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

export function useGithubRepos(username: string, lang: 'en' | 'fr' = 'en') {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        
        const filteredData = data.filter((repo: Repository) => {
          const name = repo.name.toLowerCase();
          return name.includes('federal') || name.includes('europe') || name.includes('kobo');
        });

        const sortedData = filteredData.sort((a: Repository, b: Repository) => 
          b.stargazers_count - a.stargazers_count
        );

        // Attach fallback descriptions if missing
        const enhancedData = sortedData.map((repo: Repository) => {
          const key = repo.name.toLowerCase();
          const customDesc = REPO_DESCRIPTIONS[key];
          const description = repo.description || (customDesc ? customDesc[lang] : undefined);
          return { ...repo, description };
        });
        
        setRepos(enhancedData);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username, lang]);

  return { repos, loading, error };
}
