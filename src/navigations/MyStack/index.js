
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomContext} from './Context/CartItems';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home, SplashScreen, } from '../../screens';

const Stack = createNativeStackNavigator();

export const MyStack=()=> {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  // if (loading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{headerShown: false}}>
{loading? 
          <Stack.Screen name="Splash" component={SplashScreen} />:


          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />}
         
        </Stack.Navigator>
    </NavigationContainer>
  );
}

// module.exports = {
//   project: {
//       ios:{},
//       android:{}
//   },
//   assets:['./assets/fonts/'],
// }