import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {save, get} from '../../client/favoriteClient';

const Favorite = ({id}) => {
  const addFavorite = async () => {
    await save(id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
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
