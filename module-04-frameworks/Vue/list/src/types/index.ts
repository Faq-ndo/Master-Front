export interface GitHubUser {
  id: number;
  login: string;
  organizations: string[];
  avatar_url: string;
  name?: string;
  bio?: string;
  followers: number;
  following: number;
}
export type GitHubUserList = GitHubUser[];
