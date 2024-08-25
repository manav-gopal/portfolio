// Define a type for the GitHub repository data
export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export interface CardSliderProps {
  cardData: {
    imgURL: string;
    smallDesc: string;
    Desc: string[];
    title: string;
    color: string;
    git_url: string;
  };
  index: number;
  items: number;
  canDrag: boolean;
  onDragEnd: () => void;
}
