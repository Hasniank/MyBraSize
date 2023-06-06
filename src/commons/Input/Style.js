import {StyleSheet} from 'react-native';

export const Styles = ({
  width,
  height,
  backgroundColor,
  borderWidth,

  borderColor,
  fontSize,
  top,
  left,
  right
} = {}) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      borderWidth: borderWidth,
      borderRadius: 9,
      color: "#fff",
      fontSize: fontSize,
      borderColor: borderColor,
      top: top,
      left: left,
      right:right,
      paddingHorizontal: 10,
    },
  });
