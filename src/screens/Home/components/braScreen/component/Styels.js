import {StyleSheet} from 'react-native';
import {SCREENS} from '../../../../../constants';

export const Styles = ({width, height, top, left,right} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: SCREENS.screenWidth * 0.8,
      // height: SCREENS.screenHeight * 0.3,
      top: top,
      left: left,
      right:right,
    },
    bustText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    bustText2: {
      fontSize: 16,
      color: '#FFFFFF',
      letterSpacing: 0.2,
      width: width,
      height: height,
      marginTop: 5,
    },
    imageContainer: {},
    image: {
      // top: 10,
      // right: 15,
    },
    TextContainer: {
      // width: 238,
      // lineHeight: 20,
      // height: 85,
    },
  });
