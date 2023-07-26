import { gql } from '@apollo/client';

export const POKEMONS_QUERY = gql`
query GetPokemon($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      key
      sprite
      types{name}
      eggGroups
      evolutions {
        species
        sprite
      }
    }
  }
  `;

