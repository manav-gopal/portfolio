// server/mockData.ts
import { GitHubRepo } from './types';

export const mockRepos: GitHubRepo[] = [
  {
    id: 1,
    name: 'Repo One',
    html_url: 'https://github.com/yourusername/repo-one',
    description: 'Description for Repo One',
    stargazers_count: 10,
    forks_count: 2,
    language: 'JavaScript',
  },
  {
    id: 2,
    name: 'Repo Two',
    html_url: 'https://github.com/yourusername/repo-two',
    description: 'Description for Repo Two',
    stargazers_count: 20,
    forks_count: 5,
    language: 'TypeScript',
  },
  {
    id: 3,
    name: 'Repo Three',
    html_url: 'https://github.com/yourusername/repo-three',
    description: 'Description for Repo Three',
    stargazers_count: 30,
    forks_count: 10,
    language: 'Python',
  },
  {
    id: 4,
    name: 'Repo Four',
    html_url: 'https://github.com/yourusername/repo-four',
    description: 'Description for Repo Four',
    stargazers_count: 15,
    forks_count: 3,
    language: 'Java',
  },
  {
    id: 5,
    name: 'Repo Five',
    html_url: 'https://github.com/yourusername/repo-five',
    description: 'Description for Repo Five',
    stargazers_count: 50,
    forks_count: 20,
    language: 'C#',
  },
  {
    id: 6,
    name: 'Repo Six',
    html_url: 'https://github.com/yourusername/repo-six',
    description: 'Description for Repo Six',
    stargazers_count: 8,
    forks_count: 1,
    language: 'Ruby',
  },
];
