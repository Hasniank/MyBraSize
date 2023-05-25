import {StyleSheet} from 'react-native';


export const Styles = ({
  width,
  height,
  backgroundColor,
  borderWidth,
  marginTop,
  marginLeft,
  color,
  borderColor,
  marginRight,
  fontSize,
  paddingBottom
} = {}) =>
  StyleSheet.create({
    container: {
      width: (width),
      height: (height),
      backgroundColor: backgroundColor,
      borderWidth: borderWidth,
      marginTop: marginTop,
      marginLeft: marginLeft,
      borderRadius: 9,
      color: color,
      paddingLeft: 20,
      fontSize: fontSize,
      borderColor: borderColor,
      marginRight: marginRight,
      paddingBottom:paddingBottom 
    },
  });

  