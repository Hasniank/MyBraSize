import {StyleSheet} from 'react-native';
import { SCREENS } from '../../../../../constants';

export const Styles = ({width, marginTop, marginVertical, height} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: marginTop,
      marginRight: 50,
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
    imageContainer: {
      marginTop: 50,
      marginRight: 20,
      marginLeft: 10,
    },
    TextContainer: {
      width: 238,
      lineHeight: 20,
      height: 85,
    },
  });
