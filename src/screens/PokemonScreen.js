/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {getPokemonById} from '../client/pokemonClient';

const PokemonScreen = ({route: {params}, navigation}) => {
  const [pokemon, setPokemon] = useState(null);
  const fetchPokemon = async () => {
    const data = await getPokemonById(params.id);
    setPokemon(data);
  };
  useEffect(() => {
    try {
      fetchPokemon();
    } catch (ex) {
      console.error(`Error 🛑: ${ex.message} ${ex.stack}`);
      navigation.goBack();
    }
  }, [params]);
  return (
    pokemon && (
      <SafeAreaView>
        <Text>Pokemon</Text>
        <Text>{pokemon.name}</Text>
      </SafeAreaView>
    )
  );
};

const styles = StyleSheet.create({});

export default PokemonScreen;
