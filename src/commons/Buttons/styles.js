import {StyleSheet} from 'react-native';

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
  left,
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
      left: left,
    },
    text: {
      fontSize: fontSize,
      color: color,
      fontFamily: 'Salsa-Regular',
    },
  });
