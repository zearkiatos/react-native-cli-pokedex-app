import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import PokemonCard from '../PokemonCard';

const PokemonList = ({pokemons}) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={pokemon => String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});

export default PokemonList;
