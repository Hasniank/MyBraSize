import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BraScreen} from './components';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <BraScreen />
      </SafeAreaProvider>
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
