import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const NotLogged = () => {
  const navigation = useNavigation();
  const goToLogin = () => navigation.navigate('Account');
  return (
    <View style={styles.content}>
      <Text style={styles.text}>To see this screen you have to login</Text>
      <Button title="Go to Login" onPress={goToLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default NotLogged;
