import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants';

export const styles = ({width, height} = {}) =>
  StyleSheet.create({
    container: {
      height: height,
      width: width,
      borderTopWidth: 1,
      borderLeftWidth: 0.9,
      borderRightWidth: 0.9,
      borderBottomWidth: 1,
      borderRadius: 8,
      borderTopColor: '#fff',
      borderLeftColor: '#fff',
      borderRightColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
      backgroundColor: '#Fba3d8',
      borderBottomColor: '#Fba3d8',
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 10,
      overflow:'hidden',
    },
    selectRegionText: {
      fontSize: 20,
      color: '#FFFFFF',
      marginLeft: 10,
      fontFamily: 'Salsa-Regular',
    },
    regionText: {
      fontSize: 20,
      color: '#FFFFFF',
      marginRight: 10,
      fontFamily: 'Salsa-Regular',
    },
    image: {
      borderRadius: 8,
    },
  });
