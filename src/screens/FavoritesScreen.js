import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {get} from '../client/favoriteClient';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const getFavorites = async () => {
    const data = await get();
    setFavorites(data);
    console.log(data);
  };
  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title="Get Favorites" onPress={getFavorites} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
