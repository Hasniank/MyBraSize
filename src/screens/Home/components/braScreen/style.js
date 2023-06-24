import {StyleSheet} from 'react-native';
import {SCREENS} from '../../../../constants';

export const Styles = () =>
  StyleSheet.create({
    container: {
      width: SCREENS.screenWidth * 1,
      height: SCREENS.screenHeight * 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      width: SCREENS.screenWidth * 1,
      height: SCREENS.screenHeight * 1,
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flex: 0.1,
      top: 10,
    },
    modal: {
      width: SCREENS.screenWidth * 1,
      height: SCREENS.screenHeight * 1,
      alignSelf: 'center',
      marginTop: 0,
      marginBottom: 0,
    },
    BlurView: {
      height: SCREENS.screenHeight * 1,
      width: SCREENS.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: SCREENS.screenHeight * 1,
      width: SCREENS.screenWidth * 1,
    },
    selectRegion: {
      fontSize: 22,
      color: 'white',
      right: 100,
      fontFamily: 'Salsa-Regular',
    },
    modalInnerContainer: {
      width: SCREENS.screenWidth * 0.95,
      justifyContent: 'center',
      alignItems: 'center',
      height: SCREENS.screenHeight * 0.51,
      borderRadius: 25,
      backgroundColor: '#E4A8CC',
      elevation: 10,
      // borderWidth: 1,
      borderColor: 'red',
    },

    secondContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flex: 0.3,
    },

    braSize: {
      color: '#FFFFFF',
      fontSize: 20,
      fontFamily: 'Salsa-Regular',
      top: 95,
    },
    thirdContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 0.4,
      top: 70,
    },
    LightImage: {
      left: 5,
      top: 5,
    },
    hintText: {
      fontSize: 16,
      color: '#FFFFFF',
      width: SCREENS.screenWidth * 0.89,
      height: SCREENS.screenHeight * 0.6,
      fontFamily: 'Salsa-Regular',
      left: 15,
    },
  });
