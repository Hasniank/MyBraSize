import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IMAGE} from '../../../../assets';
import {Styles} from './style';
import Modal from 'react-native-modal';
import {RadioButton} from '../../../../commons/RadioButton';
import {BlurView} from '@react-native-community/blur';
import {BraCom} from './component/BraCom';
import {Header} from '../../../../commons/Header';
import {Button} from '../../../../commons/Buttons';
import {SCREENS} from '../../../../constants';
import SafeAreaView from 'react-native-safe-area-view';

export const BraScreen = () => {
  const [region, setRegion] = useState('UK');
  const [isModalVisible, setModalVisible] = useState(false);
  const [bustSize, setBustSize] = useState('');
  const [bandSize, setBandSize] = useState('');
  const [braSize, setBraSize] = useState('');
  const [bustError, setBustError] = useState('');
  const [bandError, setBandError] = useState('');
  const [selectedOption, setSelectedOption] = useState('UK');
  const [calBraSize, setCalBraSize] = useState('');

  const options = [
    'ESP/FR/PR',
    'EUR/GEP/JAP',
    'USA/MEX',
    'UK',
    'AUS/NZ',
    'KOR/CHN',
  ];

  useEffect(() => {
    if (region === 'UK') {
      setBandError('');
      setBustError('');
      setCalBraSize('');
    }
    if (region === 'ESP/FR/PR') {
      setBandError('');
      setBustError('');
      setCalBraSize('');
    }
    if (region === 'EUR/GEP/JAP') {
      setBandError('');
      setBustError('');
      setCalBraSize('');
    }
    if (region === 'USA/MEX') {
      setBandError('');
      setBustError('');
      setCalBraSize('');
    }
    if (region === 'AUS/NZ') {
      setBandError('');
      setBustError('');
      setCalBraSize('');
    }
    if (region === 'KOR/CHN') {
      setBandError('');
      setBustError('');
      setCalBraSize('');
    }
  }, [region]);

  useEffect(() => {
    if (bandSize === '' || bustSize === '') {
      setCalBraSize('');
    }
  }, [bandSize, bustSize, calBraSize]);
  useEffect(() => {
    if (bandSize > bustSize) {
      setBandError('BustSize Must be Greater Than BandSize');
      setCalBraSize('');
    }
  }, [calBraSize, bandSize]);

  console.log(bustSize);
  console.log(bandSize);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setBandSize('');
    setBustSize('');
  };
  const Calculate = () => {
    setBandError('');
    setBustError('');

    if (region === 'UK') {
      console.log('hi');
      let ukSize = bustSize - bandSize;
      console.log(ukSize);
      if (ukSize < 1) {
        setBraSize('AA');
      } else if (ukSize === 1) {
        setBraSize('A');
      } else if (ukSize === 2) {
        setBraSize(' B');
      } else if (ukSize === 3) {
        setBraSize('C');
      } else if (ukSize === 4) {
        setBraSize('D');
      } else if (ukSize === 5) {
        setBraSize('DD/E');
      } else if (ukSize === 6) {
        setBraSize('DDD/F');
      } else if (ukSize === 7) {
        setBraSize('G');
      } else if (ukSize === 8) {
        setBraSize('H');
      } else if (ukSize === 9) {
        setBraSize('I');
      } else if (ukSize === 10) {
        setBraSize('J');
      } else if (ukSize === 11) {
        setBraSize('K');
      } else if (ukSize === 12) {
        setBraSize('L');
      } else if (ukSize > 12) {
        setCalBraSize('This Size Are Not in list');
      }
    }

    if (region === 'ESP/FR/PR') {
      setBandError('');
      setBustError('');
      let diff = bustSize - bandSize;
      if (diff <= 5) {
        setBraSize('A');
        console.log('A');
      } else if (diff <= 6) {
        setBraSize('B');
        console.log('B');
      } else if (diff <= 7) {
        setBraSize('C');
        console.log('C');
      } else if (diff <= 8) {
        setBraSize('E');
        console.log('E');
      } else if (diff <= 9) {
        setBraSize('F');
        console.log('F');
      } else if (diff <= 10) {
        setBraSize('G');
        console.log('G');
      } else if (diff <= 11) {
        setBraSize('H');
        console.log('H');
      } else if (diff <= 12) {
        setBraSize('I');
        console.log('I');
      } else if (diff <= 13) {
        setBraSize('J');
        console.log('J');
      } else if (diff <= 14) {
        setBraSize('J');
      } else if (diff > 14) {
        setCalBraSize('This Size Are Not in list');
      }
    }

    if (region === 'EUR/GEP/JAP') {
      setBandError('');
      setBustError('');
      let diff = bustSize - bandSize;
      console.log(diff, 'diff');
      if (diff <= 12) {
        setBraSize('A');
        console.log('A');
      } else if (diff <= 14) {
        setBraSize('B');
        console.log('B');
      } else if (diff <= 16) {
        setBraSize('C');
        console.log('C');
      } else if (diff <= 18) {
        setBraSize('D');
      } else if (diff <= 18) {
        setBraSize('D');
      } else if (diff <= 20) {
        setBraSize('E');
      } else if (diff <= 22) {
        setBraSize('F');
      } else if (diff <= 24) {
        setBraSize('G');
      } else if (diff <= 26) {
        setBraSize('G');
      }
    }
    if (region === 'USA/MEX') {
      setBandError('');
      setBustError('');
      let usSize = bustSize - bandSize;
      if (usSize === 0) {
        setBraSize('AA');
      } else if (usSize === 1) {
        setBraSize('A');
      } else if (usSize === 2) {
        setBraSize('B');
      } else if (usSize === 3) {
        setBraSize('C');
      } else if (usSize === 4) {
        setBraSize('D');
      } else if (usSize === 5) {
        setBraSize('DD(E)');
      } else if (usSize === 6) {
        setBraSize('DDD(F)');
      } else if (usSize === 7) {
        setBraSize('DDDD(G)');
      } else if (usSize > 7) {
        setCalBraSize('This Size Are Not in list');
      }
    }
    if (region === 'AUS/NZ') {
      setBandError('');
      setBustError('');
      let ausNZSizes = bustSize - bandSize;
      if (ausNZSizes <= 1) {
        setBraSize('AA');
      }
      if (ausNZSizes <= 2) {
        setBraSize('A');
      }
      if (ausNZSizes <= 3) {
        setBraSize('B');
      }
      if (ausNZSizes <= 4) {
        setBraSize('C');
      }
      if (ausNZSizes <= 5) {
        setBraSize('D');
      }
      if (ausNZSizes <= 6) {
        setBraSize('DD');
      }
      if (ausNZSizes <= 7) {
        setBraSize('E');
      }
      if (ausNZSizes <= 8) {
        setBraSize('F');
      }
      if (ausNZSizes <= 9) {
        setBraSize('FF');
      }
      if (ausNZSizes <= 10) {
        setBraSize('G');
      }
      if (ausNZSizes <= 11) {
        setBraSize('GG');
      }
      if (ausNZSizes <= 12) {
        setBraSize('H');
      }
      if (ausNZSizes <= 13) {
        setBraSize('HH');
      }
      if (ausNZSizes <= 14) {
        setBraSize('J');
      }
      if (ausNZSizes <= 15) {
        setBraSize('JJ');
      }
      if (ausNZSizes <= 16) {
        setBraSize('K');
      }
      if (ausNZSizes <= 17) {
        setBraSize('KK');
      } else if (ausNZSizes > 17) {
        setCalBraSize('This Size Are Not in list');
      }
    }
    if (region === 'KOR/CHN') {
      setBandError('');
      setBustError('');
      let KorSizes = bustSize - bandSize;
      if (KorSizes <= 1) {
        setBraSize('A');
      } else if (KorSizes <= 2) {
        setBraSize('B');
      } else if (KorSizes <= 3) {
        setBraSize('C');
      } else if (KorSizes <= 4) {
        setBraSize('D');
      } else if (KorSizes <= 5) {
        setBraSize('DD/E');
      } else if (KorSizes <= 6) {
        setBraSize('DDD/F');
      } else if (KorSizes <= 7) {
        setBraSize('G');
      } else if (KorSizes <= 8) {
        setBraSize('H');
      } else if (KorSizes <= 9) {
        setBraSize('H');
      } else if (KorSizes <= 9) {
        setBraSize('H');
      } else if (KorSizes > 9) {
        setCalBraSize('This Size Are Not in list');
      }
    }

    if (bandSize === '') {
      setBandError('please enter the value');
    } else {
      setBandError('');
    }
    if (bustSize === '') {
      setBustError('please enter the value');
    } else {
      setBustError('');
    }
  };

  const handleChangeText = inputText => {
    if (inputText === '') {
      setBustError('please enter the value');
    } else {
      setBustError('');
    }
    setBustSize(inputText);
  };

  const handleChangeText1 = inputText => {
    if (inputText === '') {
      setBandError('please enter the value');
    } else {
      setBandError('');
    }
    setBandSize(inputText);
  };

  const handleSelect = option => {
    console.log(option);
    setSelectedOption(option);
    setRegion(option);
    setModalVisible(!toggleModal);
  };

  useEffect(() => {
    setCalBraSize(bandSize + braSize);
  }, [braSize]);

  return (
    <ImageBackground source={IMAGE.IMAGES.BG} style={Styles().container}>
      <View
        style={{
          height: SCREENS.screenHeight * 0.12,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: "yellow",
        }}>
        <Header
          title={'Select Region'}
          Subtitle={selectedOption}
          onPress={toggleModal}
          width={SCREENS.screenWidth * 0.93}
          height={SCREENS.screenHeight * 0.06}
        />
        <Modal
          isVisible={isModalVisible}
          style={Styles().modal}
          animationIn={'fadeIn'}
          animationOut={'slideOutDown'}
          backdropTransitionOutTiming={0}
          hideModalContentWhileAnimating>
          <BlurView blurType="light" style={Styles().BlurView}>
            <View style={Styles().modalContainer}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 25,
                  backgroundColor: '#E4A8CC',
                  elevation: 10,
                  // borderWidth: 1,
                  borderColor: '#fff',
                  width: SCREENS.screenWidth * 0.95,
                  alignSelf: 'center',
                  flex: 0.52,
                  borderTopWidth: 1.1,
                  borderLeftWidth: 0.9,
                  borderRightWidth: 0.9,
                  borderBottomWidth: 1,
                  borderRightColor: '#FCBDE3',
                  borderTopColor: '#FCBDE3',
                  borderBottomColor: '#DAA8DB',
                  borderLeftColor: '#FCBDE3',
                }}>
                <Text style={Styles().selectRegion}>Select Region</Text>
                <TouchableOpacity
                  style={Styles().radioBtn}
                  onPress={toggleModal}>
                  <RadioButton
                    options={options}
                    selectedOption={selectedOption}
                    onSelect={handleSelect}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </Modal>
      </View>
      <View
        style={{
          height: SCREENS.screenHeight * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          width: SCREENS.screenWidth * 1,
          alignSelf: 'center',
        }}>
        <BraCom
          source={IMAGE.IMAGES.Bust}
          title={'Bust Size (Inches)'}
          subTitle={
            'With a tape, measure around your back, under your arms and across your chest’s fullest part.'
          }
          onChangeText={handleChangeText}
          value={bustSize}
          borderWidth={1.5}
          borderColor={bustError ? 'red' : '#fff'}
          textWidth={SCREENS.screenWidth * 0.57}
          width={SCREENS.screenWidth * 0.59}
          textTop={5}
          InputTop={10}
          InputHeight={37}
          backgroundColor={'#Fdc8E8'}
          braComTop={-18}
        />
        <BraCom
          source={IMAGE.IMAGES.Band}
          title={'Band Size (Inches)'}
          subTitle={
            'Wrap a tape around your rib cage under your bust. Keep it snug and level.'
          }
          onChangeText={handleChangeText1}
          value={bandSize}
          borderWidth={1.5}
          borderColor={bandError ? 'red' : '#FFFFFF'}
          textWidth={SCREENS.screenWidth * 0.57}
          width={SCREENS.screenWidth * 0.55}
          textTop={5}
          InputHeight={37}
          InputTop={10}
          backgroundColor={'#fDC8E8'}
          braComTop={25}
        />
        <Button
          title={'Calculate'}
          width={SCREENS.screenWidth * 0.29}
          borderWidth={1}
          height={SCREENS.screenHeight * 0.05}
          borderRadius={10}
          backgroundColor={'#F1baf4'}
          onPress={Calculate}
          borderColor={'#fff'}
          color={'#FFF'}
          fontSize={20}
        />
        {calBraSize !== '' && (
          <Text style={Styles().braSize}>Your Bra Size : {calBraSize}</Text>
        )}
      </View>
      <View
        style={{
          height: SCREENS.screenHeight * 0.18,
          width: SCREENS.screenWidth * 1,
          // backgroundColor:'red'
        }}>
        <View style={{flexDirection: 'row', top: 60}}>
          <View>
            <Image style={Styles().LightImage} source={IMAGE.IMAGES.Light} />
          </View>
          <Text style={Styles().hintText}>
            Hint: Odd numbers will be rounded it to the next even number
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
