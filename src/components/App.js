import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from '../navigation/NavigationTab';
import {AuthProvider} from '../context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationTab />
      </AuthProvider>
    </NavigationContainer>
  );
}
