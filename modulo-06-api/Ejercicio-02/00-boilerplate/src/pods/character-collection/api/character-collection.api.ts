import { CharacterEntityApi } from './character-collection.api-model';

const API_URL = 'http://localhost:3001/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const characterCollection = await response.json();
      console.log(characterCollection)
      return characterCollection;
    } else {
      throw new Error('Error al obtener la colección de personajes');
    }
  } catch (error) {
    throw new Error('Error al obtener la colección de personajes: ' + error.message);
  }
 };
  
  export const deleteCharacter = async (id: number): Promise<boolean> => {
    return true;
  };