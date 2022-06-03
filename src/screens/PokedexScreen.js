import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {getPokemons, getPokemonByUrl} from '../client/pokemonClient';
import PokemonList from '../components/PokemonList';

const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const fetchPokemons = async () => {
    const data = await getPokemons(nextUrl);
    setNextUrl(data.next);
    const pokemonList = [];
    for await (let pokemon of data.results) {
      const pokemonData = await getPokemonByUrl(pokemon.url);
      pokemonList.push({
        id: pokemonData.id,
        name: pokemonData.name,
        types: pokemonData.types,
        order: pokemonData.order,
        image: pokemonData.sprites.other['official-artwork'].front_default,
      });
    }
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
      <PokemonList
        pokemons={pokemons}
        fetchPokemons={fetchPokemons}
        isNext={!!nextUrl}
      />
    </SafeAreaView>
  );
};

export default PokedexScreen;
