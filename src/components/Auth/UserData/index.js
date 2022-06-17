import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import useAuth from '../../../hooks/useAuth';
import {get} from '../../../client/favoriteClient';

const UserData = () => {
  const {auth, logout} = useAuth();
  const [total, setTotal] = useState(0);
  const fetchFavorites = async () => {
    try {
      const data = await get();
      setTotal(data.length);
    } catch (ex) {
      setTotal(0);
      console.error(`Error: : ${ex.message}`);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFavorites();
    }, []),
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favorites" text={`${total} pokemons`} />
      </View>
      <Button title="Logout" onPress={logout} style={styles.logout} />
    </View>
  );
};

const ItemMenu = ({title, text}) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}: </Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  logout: {
    paddingTop: 20,
  },
});

export default UserData;
