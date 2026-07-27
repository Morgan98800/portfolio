import React from 'react';
import type { Repository } from '../hooks/useGithubRepos';
import { Star, GitFork, ExternalLink, Code2, Terminal } from 'lucide-react';
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
  const animationDelay = `${index * 0.1}s`;
  const langColor = LANGUAGE_COLORS[repo.language] || 'var(--accent)';

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
        </div>
        
        <div className="repo-card-action">
          <ExternalLink size={16} />
        </div>
      </div>

      <div className="repo-card-body">
        <div className="repo-title-row">
          <Terminal size={20} className="repo-icon" />
          <h3 className="repo-card-title">{repo.name}</h3>
        </div>
        <p className="repo-card-desc">
          {repo.description || 'Computational analysis and research software toolkit.'}
        </p>
      </div>

      <div className="repo-card-footer">
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
        <span className="view-repo-btn">
          <span>Explore Repo</span>
          <Code2 size={14} />
        </span>
      </div>
    </a>
  );
};
