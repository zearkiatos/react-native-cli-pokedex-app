import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import {capitalize} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {
  getColorByPokemonType,
  getTextureByPokemonType,
} from '../../utils/pokemonHelper';

const PokemonCard = ({pokemon}) => {
  const navigation = useNavigation();
  const goToPokemon = () => {
    navigation.navigate('Pokemon', {id: pokemon.id});
  };
  const backgroundStyles = (type, styles) => ({
    backgroundColor: getColorByPokemonType(type),
    ...styles,
  });
  const renderSecondaryType = pokemon.types[1] &&
    pokemon.types[1].type.name && (
      <ImageBackground
        source={getTextureByPokemonType(pokemon.types[1].type.name)}
        style={styles.secondaryBackgroundImage}
        imageStyle={{borderRadius: 50, zIndex: -1}}>
        <View
          style={backgroundStyles(
            pokemon.types[1].type.name,
            styles.circleShape,
          )}
        />
      </ImageBackground>
    );
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <ImageBackground
            source={getTextureByPokemonType(pokemon.types[0].type.name)}
            style={styles.backgroundImage}
            imageStyle={{borderRadius: 15}}>
            <View
              style={backgroundStyles(
                pokemon.types[0].type.name,
                styles.backgroundStyles,
              )}>
              <Text style={styles.number}>
                #{`${pokemon.order}`.padStart(3, '0')}
              </Text>
              <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
              <Image source={{uri: pokemon.image}} style={styles.image} />
              {renderSecondaryType}
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  backgroundStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'white',
    fontSize: 11,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  secondaryBackgroundImage: {
    position: 'absolute',
    width: 100,
    height: 100,
    zIndex: -1,
    alignSelf: 'center',
    opacity: 0.7,
    top: 10,
  },
  circleShape: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    zIndex: -1,
    alignSelf: 'center',
  },
});

export default PokemonCard;
