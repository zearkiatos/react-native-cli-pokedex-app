import POKEMON_TYPE_COLORS from "./constants/pokemonTypeColors";
import POKEMON_TYPE_TEXTURES from "./constants/pokemonTypeTextures";
const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toUpperCase()];
const getTextureByPokemonType = (type) =>
  POKEMON_TYPE_TEXTURES[type.toUpperCase()];

export { getColorByPokemonType, getTextureByPokemonType };
