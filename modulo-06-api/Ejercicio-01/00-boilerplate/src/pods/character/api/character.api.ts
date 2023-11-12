import { Character } from './character.api-model';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const getCharacter = async (id: string): Promise<Character> => {
    try {
        const response = await fetch(API_URL + id);
        if (response.ok) {
          const character = await response.json();
          return character;
        } else {
          throw new Error('Error al obtener la colección de personajes');
        }
      } catch (error) {
        throw new Error('Error al obtener la colección de personajes: ' + error.message);
      }};

export const saveCharacter = async (character: Character): Promise<boolean> => {
    return true;
};