import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          title: 'Pokedex',
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: 'Pokemon',
        }}
      />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
