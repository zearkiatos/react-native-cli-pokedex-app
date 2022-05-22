import {ENVIRONMENT, POKEAPI_BASE_URL, POKEAPI_LIMIT} from '@env';
const config = {
  ENVIRONMENT,
  POKEAPI: {
    BASE_URL: POKEAPI_BASE_URL,
    LIMIT: parseInt(POKEAPI_LIMIT, 10) || 20,
  },
};

export default config;
