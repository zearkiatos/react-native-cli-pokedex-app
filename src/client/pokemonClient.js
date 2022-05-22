import config from '../config';

const getPokemons = async () => {
  try {
    const url = `${config.POKEAPI.BASE_URL}/pokemon?limit=${config.POKEAPI.LIMIT}&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (ex) {
    throw ex;
  }
};

export {getPokemons};
