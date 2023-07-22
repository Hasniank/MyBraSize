import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const topHeight = Dimensions.get('screen').height;


export const SCREENS = {
  screenWidth: width,
  screenHeight: height,
  marginHeight:topHeight
};
