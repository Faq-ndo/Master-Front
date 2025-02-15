import { GitHubUser } from "@/types";
const GITHUB_TOKEN =
  "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";

export const usersService = {
  async get(): Promise<GitHubUser[]> {
    try {
      const membersResponse = await fetch(
        `https://api.github.com/orgs/lemoncode/members`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      const members: { login: string }[] = await membersResponse.json();

      if (!Array.isArray(members)) {
        throw new Error("La respuesta de miembros no es un arreglo.");
      }

      const users: GitHubUser[] = await Promise.all(
        members.map(async (member) => {
          const userResponse = await fetch(
            `https://api.github.com/users/${member.login}`,
            {
              headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          );
          const userData = await userResponse.json();

          const orgsResponse = await fetch(userData.organizations_url, {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
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
      console.error("Error fetching members or user data:", error);
      return [];
    }
  },

  async getUser(login: string): Promise<GitHubUser> {
    const userResponse = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    const userData = await userResponse.json();
    return userData;
  },
};
