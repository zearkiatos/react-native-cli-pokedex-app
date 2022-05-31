import POKEMON_TYPE_COLORS from './constants/pokemonTypeColors';
import POKEMON_TYPE_TEXTURES from './constants/pokemonTypeTextures';
import POKEMON_TYPE_FULL_COLORS from './constants/pokemonTypeFullColors';
const getColorByPokemonType = type => POKEMON_TYPE_COLORS[type.toUpperCase()];
const getTextureByPokemonType = type =>
  POKEMON_TYPE_TEXTURES[type.toUpperCase()];
const getFullColorByPokemonType = type =>
  POKEMON_TYPE_FULL_COLORS[type.toUpperCase()];

export {
  getColorByPokemonType,
  getTextureByPokemonType,
  getFullColorByPokemonType,
};
