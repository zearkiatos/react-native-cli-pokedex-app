import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import PokedexScreen from '../screens/PokedexScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const NavigationTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Pokedex" component={PokedexScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default NavigationTab;
