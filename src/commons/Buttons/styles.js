import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants';

export const Styles = ({
  width,
  height,
  color,
  backgroundColor,
  fontSize,
  borderWidth,
  marginTop,
  borderRadius,
  borderColor,
  top,
} = {}) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      borderWidth: borderWidth,
      marginTop: marginTop,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius,
      borderColor: borderColor,
      color: color,
      top: top,
    },
    text: {
      fontSize: fontSize,
      color: color,
      fontFamily: FONTS.SALSA,
    },
  });
