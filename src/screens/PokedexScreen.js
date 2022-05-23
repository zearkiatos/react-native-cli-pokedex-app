import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {getPokemons, getPokemonByUrl} from '../client/pokemonClient';

const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const pokemonList = [];
  const fetchPokemons = async () => {
    const data = await getPokemons();
    for await (let pokemon of data.results) {
      const pokemonData = await getPokemonByUrl(pokemon.url);
      pokemonList.push({
        id: pokemonData.id,
        name: pokemonData.name,
        type: pokemonData.types[0].type.name,
        order: pokemonData.order,
        image: pokemonData.sprites.other['official-artwork'].front_default,
      });
    }
    console.log(pokemonList);
    setPokemons([...pokemons, ...pokemonList]);
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
