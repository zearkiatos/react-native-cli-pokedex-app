import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getPokemonById} from '../client/pokemonClient';
import PokemonHeader from '../components/PokemonHeader';
import Type from '../components/Type';
import Stats from '../components/Stats';

const PokemonScreen = ({route: {params}, navigation}) => {
  const [pokemon, setPokemon] = useState(null);
  const fetchPokemon = async () => {
    const data = await getPokemonById(params.id);
    setPokemon(data);
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="white"
          size={20}
          style={{marginLeft: 20}}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);
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
      <ScrollView>
        <PokemonHeader
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other['official-artwork'].front_default}
          types={pokemon.types}
        />
        <Type types={pokemon.types} />
        <Stats stats={pokemon.stats} />
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({});

export default PokemonScreen;
