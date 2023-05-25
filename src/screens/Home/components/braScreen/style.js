import {StyleSheet} from 'react-native';
import {SCREENS} from '../../../../constants';
export const Styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: SCREENS.screenWidth * 1,
      height: SCREENS.screenHeight * 1,
    },
    backgroundImage: {
      width: SCREENS.screenWidth * 1,
      height: SCREENS.screenHeight * 1,
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flex: 0.2,
      marginTop: 60,
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
    },
    modalInnerContainer: {
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      height: SCREENS.screenHeight * 0.6,
      borderRadius: 25,
      backgroundColor: '#E2A2DA',
      elevation: 10,
    },

    secondContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 30,
      // flex: 0.6,
    },

    braSize: {
      color: '#FFFFFF',
      fontSize: 20,
      marginTop: 10,
    },
    thirdContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 190,
      flex: 0.2,
    },
    LightImage: {
      // marginLeft: 15,
    },
    hintText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFFFFF',
      width: 360,
      marginLeft: 10,
    },
  });
