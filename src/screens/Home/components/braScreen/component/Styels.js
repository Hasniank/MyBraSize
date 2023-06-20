import {StyleSheet} from 'react-native';
import {SCREENS, FONTS} from '../../../../../constants';

export const Styles = ({textTop, textHeight, textWidth, braComTop} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-evenly",
      width:SCREENS.screenWidth*1,
      margin:10
    },
    subTitle: {
      width: textWidth,
      height: textHeight,
      top: textTop,
      color: '#fff',
      fontFamily: 'Salsa-Regular',
      fontSize:16,
      left:3
    },
    image: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    textContainer: {
     
     
    },
  });
