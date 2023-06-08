import {StyleSheet} from 'react-native';
import {SCREENS} from '../../../../constants';
import {FONTS} from '../../../../constants';
export const Styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: SCREENS.screenWidth * 1,
      height: SCREENS.screenHeight * 1,
      flexDirection: 'column',
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
      flex: 1,
      margin: 0,
      height: SCREENS.screenHeight * 1,
      width: SCREENS.screenWidth * 1,
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: '100%',
      height: '100%',
    },
    selectRegion: {
      fontSize: 22,
      color: 'white',
      marginRight: 145,
      fontFamily: 'Salsa-Regular',
    },
    modalInnerContainer: {
      width: SCREENS.screenWidth * 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      height: SCREENS.screenHeight * 0.53,
      borderRadius: 25,
      backgroundColor: '#E4A8CC',
      elevation: 10,
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
      top: '20%',
      left: '25%',
    },
    thirdContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 0.4,
      top: 70,
    },
    LightImage: {
      left: 10,
      top: 5,
    },
    hintText: {
      fontSize: 16,
      color: '#FFFFFF',
      width: SCREENS.screenWidth * 0.9,
      height: SCREENS.screenHeight * 0.05,
      fontFamily: 'Salsa-Regular',
      left: 15,
    },
  });
