import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import IconFontawesone5 from 'react-native-vector-icons/FontAwesome5';
import IconFontawesone from 'react-native-vector-icons/FontAwesome';
import {save, exist, remove} from '../../client/favoriteClient';

const Favorite = ({id}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const addFavorite = async () => {
    await save(id);
  };

  const getFavorite = async () => {
    try {
      const isFavorite = await exist(id);
      setIsFavorite(isFavorite);
      onToggleFavorite();
    } catch (ex) {
      setIsFavorite(false);
      console.error(`Error: ${ex.message}`);
    }
  };

  useEffect(() => {
    getFavorite();
  }, [id, toggleFavorite]);

  const removeFavorite = async () => {
    try {
      await remove(id);
      onToggleFavorite();
    } catch (ex) {
      console.error(`Error: ${ex.message}`);
    }
  };

  const onToggleFavorite = () => setToggleFavorite(!toggleFavorite);
  const Icon = isFavorite ? IconFontawesone : IconFontawesone5;
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={styles.icon}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
});

export default Favorite;
