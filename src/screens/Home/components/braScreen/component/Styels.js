import {StyleSheet} from 'react-native';
import {SCREENS, FONTS} from '../../../../../constants';

export const Styles = ({width, height, top, left, right, marginRight} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: SCREENS.screenWidth * 0.8,
      
      top: top,
      left: left,
      right: right,
      marginRight: marginRight,
    },
    bustText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
      fontFamily: FONTS.SALSA,
    },
    bustText2: {
      fontSize: 16,
      color: '#FFFFFF',
      letterSpacing: 0.2,
      width: width,
      height: height,
      marginTop: 5,
      fontFamily: FONTS.SALSA,
    },
    imageContainer: {},
    image: {
     top: 25,
    },
   
  });
