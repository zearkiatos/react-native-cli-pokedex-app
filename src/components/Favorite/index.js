import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Favorite = ({id}) => {
  const addFavorite = () => {
    console.log(`Add to favorites ${id}`);
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
