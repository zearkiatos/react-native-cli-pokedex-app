import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {capitalize} from 'lodash';

const Stats = ({stats}) => {
  const barStyles = number => {
    const color = number > 49 ? '#00ac17' : '#ff3e3e';
    return {
      backgroundColor: color,
      width: `${number}%`,
    };
  };
  const renderStats = stats.map((stat, index) => (
    <View key={index} style={styles.block}>
      <View style={styles.blockTitle}>
        <Text style={styles.statName}>{capitalize(stat.stat.name)}</Text>
      </View>
      <View style={styles.blockInfo}>
        <Text style={styles.number}>{stat.base_stat}</Text>
        <View style={styles.backgroundBar}>
          <View style={[styles.bar, barStyles(stat.base_stat)]}></View>
        </View>
      </View>
    </View>
  ));
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {renderStats}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    fontSize: 12,
    color: '#6B6B6B',
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: '12%',
    fontSize: 12,
  },
  backgroundBar: {
    backgroundColor: '#DEDEDE',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    backgroundColor: 'red',
    width: '100%',
    height: 5,
    borderRadius: 20,
  },
});

export default Stats;
