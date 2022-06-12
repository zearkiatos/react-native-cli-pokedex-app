import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config';

const save = async id => {
  try {
    const favorites = await get();
    favorites.push(id);
    await AsyncStorage.setItem(
      config.FAVORITE_STORAGE,
      JSON.stringify(favorites),
    );
  } catch (ex) {
    throw ex;
  }
};

const get = async () => {
  try {
    const response = await AsyncStorage.getItem(config.FAVORITE_STORAGE);
    const dataParsed = JSON.parse(response);
    return dataParsed.length ? JSON.parse(response) : [];
  } catch (ex) {
    throw ex;
  }
};

const exist = async id => {
  try {
    const favorites = await get();
    return favorites.includes(id);
  } catch (ex) {
    throw ex;
  }
};

const remove = async id => {
  try {
    const favorites = await get();
    const newFavorites = favorites.filter(favorite => favorite !== id);
    await AsyncStorage.setItem(
      config.FAVORITE_STORAGE,
      JSON.stringify(newFavorites),
    );
  } catch (ex) {
    throw ex;
  }
};

export {save, get, exist, remove};
