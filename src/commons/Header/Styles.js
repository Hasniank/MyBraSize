import {StyleSheet} from 'react-native';

export const styles = ({width, height} = {}) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      // borderWidth: 1,
      flexDirection: 'row',
      height: height,
      width: width,
      position: 'absolute',
      elevation: 10,
      borderRadius: 8,
      backgroundColor: '#FCA1F1',
      // borderTopColor: '#fff',
      marginTop: 40,
      // flex: 0.2,
    },
    selectRegionText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginLeft: 10,
    },
    regionText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginRight: 10,
    },
  });

