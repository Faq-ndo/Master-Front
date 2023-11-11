export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    origin: {
      name: string;
      link: string;
    };
    location: {
      name: string;
      link: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  export const createEmptyCharacter = (): Character => ({
    id: 0,
    name: "",
    status: "unknown",
    species: "",
    type: "",
    gender: "unknown",
    origin: {
      name: "",
      link: "",
    },
    location: {
      name: "",
      link: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  });