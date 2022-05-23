import config from '../config';

const getPokemons = async () => {
  try {
    const url = `${config.POKEAPI.BASE_URL}/pokemon?limit=${config.POKEAPI.LIMIT}&offset=0`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (ex) {
    throw ex;
  }
};

const getPokemonByUrl = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (ex) {
    throw ex;
  }
};

export {getPokemons, getPokemonByUrl};
