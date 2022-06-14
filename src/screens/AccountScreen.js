import React from 'react';
import {View} from 'react-native';
import LoginForm from '../../src/components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';

const AccountScreen = () => {
  const {auth} = useAuth();
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

export default AccountScreen;
