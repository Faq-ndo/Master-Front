import { Character } from './character.api-model';

const API_URL = 'http://localhost:3001/characters/';

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
  try {
    const response = await fetch(`http://localhost:3001/characters/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...character,
      }),
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error('Error al actualizar el personaje');
    }
  } catch (error) {
    throw new Error('Error al actualizar el personaje: ' + error.message);
}};