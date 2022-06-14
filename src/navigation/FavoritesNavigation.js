import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: '',
          headerTransparent: true,
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
