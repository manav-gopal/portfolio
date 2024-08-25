import React, { useEffect, useState } from "react";
import axios from "axios";
import { GitHubRepo } from "../types"; // Import the GitHubRepo type

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get<GitHubRepo[]>("/api/repos");
        setRepos(response.data);
        console.log(response);
        console.log("Got the datas buddy", repos);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
            <p>
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </p>
            <p>Language: {repo.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;
