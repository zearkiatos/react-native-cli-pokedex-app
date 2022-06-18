import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountScreen from '../screens/AccountScreen';
import pokeballImage from '../assets/pokeball.png';

const Tab = createBottomTabNavigator();

const NavigationTab = () => (
  <Tab.Navigator initialRouteName="Pokedex">
    <Tab.Screen
      name="Favorites"
      component={FavoriteNavigation}
      options={{
        tabBarLabel: 'My Favorites',
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="heart" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Pokedex"
      component={PokedexNavigation}
      options={{
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: () => renderPokeball(),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarLabel: 'My Account',
        tabBarIcon: ({color, size}) => (
          <Icon name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const renderPokeball = () => (
  <Image source={pokeballImage} style={{width: 75, height: 75, top: -17}} />
);

export default NavigationTab;
