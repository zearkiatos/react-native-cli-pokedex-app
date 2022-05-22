import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {getPokemons} from '../client/pokemonClient';

const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    const data = await getPokemons();
    console.log(data);
    setPokemons(data);
  };
  useEffect(() => {
    try {
      fetchPokemons();
    } catch (ex) {
      console.error(`Error 🛑: ${ex.message} ${ex.stack}`);
    }
  }, []);
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PokedexScreen;
