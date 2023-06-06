import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants';

export const styles = ({width, height} = {}) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      height: height,
      width: width,
      position: 'absolute',
      elevation: 10,
      borderRadius: 8,
      backgroundColor: '#Fba3d8',
      borderTopWidth:1,
      borderTopColor:'#fff'
    },
    selectRegionText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginLeft: 10,
      fontFamily: FONTS.SALSA,
    },
    regionText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginRight: 10,
      fontFamily: FONTS.SALSA,
    },
  });
