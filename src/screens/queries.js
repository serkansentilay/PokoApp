import { gql } from '@apollo/client';

export const POKEMONS_QUERY = gql`
query GetAllPokemon {
    getAllPokemon {
      key
      sprite
    }
  }
  `;
