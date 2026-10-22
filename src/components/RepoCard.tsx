import React from 'react';
import type { Repository } from '../hooks/useGithubRepos';
import { Star, GitFork, ExternalLink, Code2, Terminal, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './RepoCard.css';

interface RepoCardProps {
  repo: Repository;
  index: number;
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  R: '#198CE7'
};

export const RepoCard: React.FC<RepoCardProps> = ({ repo, index }) => {
  const { language } = useLanguage();
  const animationDelay = `${index * 0.1}s`;
  const langColor = LANGUAGE_COLORS[repo.language] || 'var(--accent)';

  // Choose appropriate semantic icon based on project type
  const renderIcon = () => {
    const nameLower = repo.name.toLowerCase();
    if (nameLower.includes('carte') || nameLower.includes('octobre') || repo.topics?.includes('geospatial')) {
      return <MapPin size={20} className="repo-icon repo-icon-map" />;
    }
    if (nameLower.includes('federal') || nameLower.includes('europe')) {
      return <Globe size={20} className="repo-icon repo-icon-globe" />;
    }
    return <Terminal size={20} className="repo-icon" />;
  };

  return (
    <a 
      href={repo.html_url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="repo-card-modern animate-reveal"
      style={{ animationDelay }}
    >
      <div className="repo-card-header">
        <div className="repo-badge-group">
          <span className="repo-index">{(index + 1).toString().padStart(2, '0')}</span>
          <div className="repo-lang-badge">
            <span className="lang-dot" style={{ backgroundColor: langColor }}></span>
            <span>{repo.language || 'Code'}</span>
          </div>
          {repo.isLive && (
            <div className="repo-live-pill">
              <span className="live-dot-pulse"></span>
              <span>LIVE</span>
            </div>
          )}
        </div>
        
        <div className="repo-card-action">
          <ExternalLink size={16} />
        </div>
      </div>

      <div className="repo-card-body">
        <div className="repo-title-row">
          {renderIcon()}
          <h3 className="repo-card-title">{repo.name}</h3>
        </div>
        <p className="repo-card-desc">
          {repo.description || (language === 'fr' ? 'Projet de recherche et analyse informatique.' : 'Computational analysis and research software toolkit.')}
        </p>
      </div>

      <div className="repo-card-footer">
        {repo.isLive ? (
          <div className="repo-live-status-text">
            <span className="live-dot-pulse-mini"></span>
            <span>{language === 'fr' ? 'Application Web' : 'Web Application'}</span>
          </div>
        ) : (
          <div className="repo-stats">
            <span className="stat-item">
              <Star size={14} />
              <span>{repo.stargazers_count}</span>
            </span>
            <span className="stat-item">
              <GitFork size={14} />
              <span>{repo.forks_count || 0}</span>
            </span>
          </div>
        )}
        <span className="view-repo-btn">
          <span>{repo.isLive ? (language === 'fr' ? 'Consulter le projet' : 'Launch Platform') : (language === 'fr' ? 'Dépôt GitHub' : 'Explore Repo')}</span>
          {repo.isLive ? <ExternalLink size={14} /> : <Code2 size={14} />}
        </span>
      </div>
    </a>
  );
};
