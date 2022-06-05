import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';

const LoginForm = () => {
  const login = () => console.log('Entrying');
  return (
    <View>
      <Text style={styles.title}>Log in </Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
      />
      <Button title="Log in" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default LoginForm;
