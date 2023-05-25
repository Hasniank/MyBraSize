import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator screenOptions={{headerShown: false}}>

    </Navigator>
  );
};
