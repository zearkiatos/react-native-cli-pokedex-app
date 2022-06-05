import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LoginForm from '../../src/components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';

const AccountScreen = () => {
  const {auth} = useAuth();
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

const styles = StyleSheet.create({});

export default AccountScreen;
