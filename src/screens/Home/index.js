import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BraScreen} from './components';

export const Home = () => {
  return (
    <View style={styles.container}>
     
      <BraScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
