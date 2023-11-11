import { CharacterEntityApi } from "./character-collection.api-model";

export const mockCharacterCollection: CharacterEntityApi[] = [
    {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "Scientist",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          link: "https://example.com/earth-c137",
        },
        location: {
          name: "Citadel of Ricks",
          link: "https://example.com/citadel-of-ricks",
        },
        image: "https://example.com/rick-sanchez-image.jpg",
        episode: ["https://example.com/episode1", "https://example.com/episode2"],
        url: "https://example.com/rick-sanchez",
        created: "2022-01-01T10:00:00Z",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "Adventurer",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          link: "https://example.com/earth-c137",
        },
        location: {
          name: "Earth (C-137)",
          link: "https://example.com/earth-c137",
        },
        image: "https://example.com/morty-smith-image.jpg",
        episode: ["https://example.com/episode1", "https://example.com/episode3"],
        url: "https://example.com/morty-smith",
        created: "2022-01-02T09:30:00Z",
      },
]
