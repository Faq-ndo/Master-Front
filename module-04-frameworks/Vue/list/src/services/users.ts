import { GitHubUser } from "@/types";
const githubToken = "add here token";

export const usersService = {
  async get(organization: string): Promise<GitHubUser[]> {
    try {
      const url = `https://api.github.com/orgs/${organization}/members`;
      console.log(url);

      const membersResponse = await fetch(url, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/vnd.github+json",
        },
      });

      const members: { login: string }[] = await membersResponse.json();

      if (!Array.isArray(members)) {
        throw new Error("La respuesta de miembros no es un arreglo.");
      }

      const users: GitHubUser[] = await Promise.all(
        members.map(async (member) => {
          const url = `https://api.github.com/users/${member.login}`;
          const userResponse = await fetch(url, {
            headers: {
              Authorization: `Bearer ${githubToken}`,
              Accept: "application/vnd.github+json",
            },
          });
          const userData = await userResponse.json();

          const orgsResponse = await fetch(userData.organizations_url, {
            headers: {
              Authorization: `Bearer ${githubToken}`,
              Accept: "application/vnd.github+json",
            },
          });

          const orgsData = await orgsResponse.json();

          return {
            id: userData.id,
            login: userData.login,
            organizations: orgsData.map((org: { login: unknown }) => org.login),
            avatar_url: userData.avatar_url,
            name: userData.name || "",
            bio: userData.bio || "",
            location: userData.location || "",
            followers: userData.followers,
            following: userData.following,
          };
        })
      );

      return users;
    } catch (error) {
      return [];
    }
  },

  async getUser(login: string): Promise<GitHubUser> {
    const userResponse = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
    });
    const userData = await userResponse.json();
    return userData;
  },
};
