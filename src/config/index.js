import {
  ENVIRONMENT,
  POKEAPI_BASE_URL,
  POKEAPI_LIMIT,
  FAVORITE_STORAGE,
} from '@env';
const config = {
  ENVIRONMENT,
  POKEAPI: {
    BASE_URL: POKEAPI_BASE_URL,
    LIMIT: parseInt(POKEAPI_LIMIT, 10) || 20,
  },
  FAVORITE_STORAGE,
};

export default config;
