import React, {Fragment} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {capitalize} from 'lodash';
import {
  getColorByPokemonType,
  getTextureByPokemonType,
} from '../../utils/pokemonHelper';

const PokemonHeader = ({name, order, image, types}) => {
  const type = types[0].type.name;
  const secondaryType = types[1] && types[1].type.name;
  const color = getColorByPokemonType(type);
  const texture = getTextureByPokemonType(type);
  let secondaryColor = null;
  let secondaryTexture = null;
  if (secondaryType) {
    secondaryColor = getColorByPokemonType(secondaryType);
    secondaryTexture = getTextureByPokemonType(secondaryType);
  }
  const backgroundStyles = (type, styles) => ({
    backgroundColor: getColorByPokemonType(type),
    ...styles,
  });
  const renderSecondaryType = secondaryType && secondaryType && (
    <ImageBackground
      source={secondaryTexture}
      style={styles.secondaryBackgroundImage}
      imageStyle={{
        borderRadius: 300 / 2,
        zIndex: -1,
      }}>
      <View style={backgroundStyles(secondaryType, styles.circleShape)}></View>
    </ImageBackground>
  );
  return (
    <Fragment>
      <ImageBackground
        source={texture}
        style={styles.backgroundImage}
        imageStyle={{
          borderBottomEndRadius: 300,
          borderBottomLeftRadius: 300,
          transform: [
            {
              scaleX: 2,
            },
          ],
        }}>
        <View
          style={backgroundStyles(type, {
            backgroundColor: color,
            ...styles.background,
          })}
        />
      </ImageBackground>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        {renderSecondaryType}
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    top: -70,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  background: {
    width: '100%',
    height: 500,
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    transform: [
      {
        scaleX: 2,
      },
    ],
  },
  backgroundImage: {
    width: '100%',
    height: 500,
    position: 'absolute',
  },
  secondaryBackgroundImage: {
    position: 'absolute',
    width: 300,
    height: 300,
    zIndex: -1,
    alignSelf: 'center',
    top: 90,
  },
  circleShape: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 250 / 2,
    zIndex: -1,
    alignSelf: 'center',
  },
  contentContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: 30,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
    top: -40,
  },
  order: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PokemonHeader;
