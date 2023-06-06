import {StyleSheet} from 'react-native';
import {SCREENS, FONTS} from '../../../../../constants';

export const Styles = ({  textTop,textHeight,textWidth,imageWidth,imageHeight,braComTop} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
     top:braComTop,
     width:"70%",
     left:25
    },
    subTitle:{
      width:textWidth,
      height:textHeight,
      top:textTop,
      color:'#fff'
    },
    image:{
      height:imageHeight,
      width:imageWidth,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center'
    },
    textContainer:{
      padding:5,
      justifyContent:'center'
    }
  });
