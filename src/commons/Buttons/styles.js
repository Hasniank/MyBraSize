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
  borderColor
} = {}) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      borderWidth:borderWidth,
      marginTop:marginTop,
      justifyContent:"center",
      alignItems:'center',
      borderRadius:borderRadius,
      borderColor:borderColor,
      color:color
    },
    text: {
      fontSize: fontSize,
      color: color,
    },
  });
