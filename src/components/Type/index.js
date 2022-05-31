import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {capitalize} from 'lodash';
import {getFullColorByPokemonType} from '../../utils/pokemonHelper';
const Type = ({types}) => {
  const renderTypes = types.map((type, index) => (
    <View
      key={index}
      style={{
        backgroundColor: getFullColorByPokemonType(type.type.name),
        ...styles.pill,
      }}>
      <Text>{capitalize(type.type.name)}</Text>
    </View>
  ));
  return <View style={styles.content}>{renderTypes}</View>;
};

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});

export default Type;
