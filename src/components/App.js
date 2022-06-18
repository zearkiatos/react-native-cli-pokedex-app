import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import NavigationTab from '../navigation/NavigationTab';
import {AuthProvider} from '../context/AuthContext';

export default function App() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <AuthProvider>
        <NavigationTab />
      </AuthProvider>
    </NavigationContainer>
  );
}
