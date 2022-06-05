import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validationOnChange: false,
    onSubmit: formValue => console.log(formValue),
  });
  const login = () => formik.handleSubmit();
  return (
    <View>
      <Text style={styles.title}>Log in </Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={text => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        value={formik.values.password}
        onChangeText={text => formik.setFieldValue('password', text)}
      />
      <Button title="Log in" onPress={login} />
      {formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
      {formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
    </View>
  );
};

const initialValues = () => ({
  username: '',
  password: '',
});

const validationSchema = () => ({
  username: Yup.string().required('The user is required'),
  password: Yup.string().required('The password is required'),
});

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
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
});

export default LoginForm;
