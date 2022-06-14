import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getPokemonById} from '../client/pokemonClient';
import PokemonHeader from '../components/PokemonHeader';
import Type from '../components/Type';
import Stats from '../components/Stats';
import Favorite from '../components/Favorite';
import useAuth from '../hooks/useAuth';

const PokemonScreen = ({route: {params}, navigation}) => {
  const [pokemon, setPokemon] = useState(null);
  const fetchPokemon = async () => {
    const data = await getPokemonById(params.id);
    setPokemon(data);
  };
  const {auth} = useAuth();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
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
  }, [navigation, params, pokemon]);
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

export default PokemonScreen;
