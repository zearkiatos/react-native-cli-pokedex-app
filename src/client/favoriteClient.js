import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config';

const save = async id => {
  try {
    const favorites = [];
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
    return response;
  } catch (ex) {
    throw ex;
  }
};

export {save, get};
