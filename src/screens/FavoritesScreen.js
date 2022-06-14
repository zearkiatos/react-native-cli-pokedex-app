import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import PokemonList from '../components/PokemonList';
import {get} from '../client/favoriteClient';
import {getPokemonById} from '../client/pokemonClient';
import useAuth from '../hooks/useAuth';
import NotLogged from '../components/NotLogged';

const FavoritesScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const {auth} = useAuth();
  const getFavorites = async () => {
    const favorites = await get();

    const pokemonList = [];
    for await (let id of favorites) {
      const pokemonData = await getPokemonById(id);
      pokemonList.push({
        id: pokemonData.id,
        name: pokemonData.name,
        types: pokemonData.types,
        order: pokemonData.order,
        image: pokemonData.sprites.other['official-artwork'].front_default,
      });
    }
    setPokemons(pokemonList);
  };

  useFocusEffect(
    useCallback(() => {
      getFavorites();
    }, [auth]),
  );

  return !auth ? <NotLogged /> : <PokemonList pokemons={pokemons} />;
};

export default FavoritesScreen;
