import { GitHubUser } from "@/types";

export const usersService = {
  async get(organization: string): Promise<GitHubUser[]> {
    try {
      const url = `https://api.github.com/orgs/${organization}/members`;
      const membersResponse = await fetch(url);
      const members: { login: string }[] = await membersResponse.json();

      if (!Array.isArray(members)) {
        throw new Error("La respuesta de miembros no es un arreglo.");
      }

      const users: GitHubUser[] = await Promise.all(
        members.map(async (member) => {
          const userResponse = await fetch(
            `https://api.github.com/users/${member.login}`
          );
          const userData = await userResponse.json();

          const orgsResponse = await fetch(userData.organizations_url);

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
    const userResponse = await fetch(`https://api.github.com/users/${login}`);
    const userData = await userResponse.json();
    return userData;
  },
};
