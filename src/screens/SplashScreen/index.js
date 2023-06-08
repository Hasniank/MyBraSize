import {Image} from 'react-native';
import React from 'react';
import {IMAGE} from '../../assets';
import { SCREENS } from '../../constants';


export const SplashScreen = () => {
  return (
    <Image
      source={IMAGE.IMAGES.SPLASHImage}
      style={{
        flex: 1,
        width: SCREENS.screenWidth * 1,
        height: SCREENS.screenHeight * 1,
      }}
    />
  );
};
