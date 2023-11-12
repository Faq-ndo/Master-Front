import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (character: apiModel.CharacterEntityApi): viewModel.CharacterEntityVm => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: {
      name: character.origin.name,
      link: character.origin.link,
    },
    location: {
      name: character.location.name,
      link: character.location.link,
    },
    image: character.image,
    episode: character.episode,
    url: character.url,
    created: character.created,
  });