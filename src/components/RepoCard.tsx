import React from 'react';
import type { Repository } from '../hooks/useGithubRepos';
import './RepoCard.css';

interface RepoCardProps {
  repo: Repository;
  index: number;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo, index }) => {
  const animationDelay = `${index * 0.15}s`;

  return (
    <a 
      href={repo.html_url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="work-card animate-reveal"
      style={{ animationDelay }}
    >
      <div className="work-image-placeholder">
        <h2 className="work-title">{repo.name}</h2>
      </div>
      
      <div className="work-meta">
        <div className="work-meta-left">
          <span className="work-index">{(index + 1).toString().padStart(2, '0')}</span>
          <span className="work-lang">{repo.language || 'Code'}</span>
        </div>
        <div className="work-meta-right">
          <span>★ {repo.stargazers_count}</span>
        </div>
      </div>
      
      <p className="work-desc">
        {repo.description || 'No description provided for this repository.'}
      </p>
    </a>
  );
};
