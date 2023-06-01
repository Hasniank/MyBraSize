import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IMAGE} from '../../../../assets';
import {Styles} from './style';
import Modal from 'react-native-modal';
import {RadioButton} from '../../../../commons/RadioButton';
import {BlurView} from '@react-native-community/blur';
import {BraCom} from './component/BraCom';
import {Header} from '../../../../commons/Header';
import {Input} from '../../../../commons/Input/Index';
import {Button} from '../../../../commons/Buttons';
import {SCREENS} from '../../../../constants';

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
  const [difference, setDifference] = useState();

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
      if (bandSize > bustSize) {
        setBandError('bustSize Must be greater Than bandSize');
      } else {
        let ukSize = bustSize - bandSize;
        console.log(ukSize);
        setDifference(ukSize);
      }

      if (difference < 1) {
        setBraSize('AA');
      } else if (difference === 1) {
        setBraSize('A');
      } else if (difference === 2) {
        setBraSize(' B');
      } else if (difference === 3) {
        setBraSize('C');
      } else if (difference === 4) {
        setBraSize('D');
      } else if (difference === 5) {
        setBraSize('DD/E');
      } else if (difference === 6) {
        setBraSize('DDD/F');
      } else if (difference === 7) {
        setBraSize('G');
      } else if (difference === 8) {
        setBraSize('H');
      } else if (difference === 9) {
        setBraSize('I');
      } else if (difference === 10) {
        setBraSize('J');
      } else if (difference === 11) {
        setBraSize('K');
      } else if (difference === 12) {
        setBraSize('L');
      } else if (difference > 12) {
        setCalBraSize('This Size Are Not in list');
      }
    }

    if (region === 'ESP/FR/PR') {
      setBandError('');
      setBustError('');
      if (bandSize > bustSize) {
        setBandError('bustSize Must be greater Than bandSize');
      } else {
        let diff = bustSize - bandSize;
        setDifference(diff);
      }
      if (difference <= 5) {
        setBraSize('A');
        console.log('A');
      } else if (difference <= 6) {
        setBraSize('B');
        console.log('B');
      } else if (difference <= 7) {
        setBraSize('C');
        console.log('C');
      } else if (difference <= 8) {
        setBraSize('E');
        console.log('E');
      } else if (difference <= 9) {
        setBraSize('F');
        console.log('F');
      } else if (difference <= 10) {
        setBraSize('G');
        console.log('G');
      } else if (difference <= 11) {
        setBraSize('H');
        console.log('H');
      } else if (difference <= 12) {
        setBraSize('I');
        console.log('I');
      } else if (difference <= 13) {
        setBraSize('J');
        console.log('J');
      } else if (difference <= 14) {
        setBraSize('J');
      } else if (difference > 14) {
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
      if (bandSize > bustSize) {
        setBandError('bustSize Must be greater Than bandSize');
      } else {
        let usSize = bustSize - bandSize;
        setDifference(usSize);
      }
      if (difference === 0) {
        setBraSize('AA');
      } else if (difference === 1) {
        setBraSize('A');
      } else if (difference === 2) {
        setBraSize('B');
      } else if (difference === 3) {
        setBraSize('C');
      } else if (difference === 4) {
        setBraSize('D');
      } else if (difference === 5) {
        setBraSize('DD(E)');
      } else if (difference === 6) {
        setBraSize('DDD(F)');
      } else if (difference === 7) {
        setBraSize('DDDD(G)');
      } else if (difference > 7) {
        setCalBraSize('This Size Are Not in list');
      }
    }
    if (region === 'AUS/NZ') {
      setBandError('');
      setBustError('');
      if (bandSize > bustSize) {
        setBandError('bustSize Must be greater Than bandSize');
      } else {
        let ausNZSizes = bustSize - bandSize;
        setDifference(ausNZSizes);
      }
      if (difference <= 1) {
        setBraSize('AA');
      }
      if (difference <= 2) {
        setBraSize('A');
      }
      if (difference <= 3) {
        setBraSize('B');
      }
      if (difference <= 4) {
        setBraSize('C');
      }
      if (difference <= 5) {
        setBraSize('D');
      }
      if (difference <= 6) {
        setBraSize('DD');
      }
      if (difference <= 7) {
        setBraSize('E');
      }
      if (difference <= 8) {
        setBraSize('F');
      }
      if (difference <= 9) {
        setBraSize('FF');
      }
      if (difference <= 10) {
        setBraSize('G');
      }
      if (difference <= 11) {
        setBraSize('GG');
      }
      if (difference <= 12) {
        setBraSize('H');
      }
      if (difference <= 13) {
        setBraSize('HH');
      }
      if (difference <= 14) {
        setBraSize('J');
      }
      if (difference <= 15) {
        setBraSize('JJ');
      }
      if (difference <= 16) {
        setBraSize('K');
      }
      if (difference <= 17) {
        setBraSize('KK');
      } else if (difference > 17) {
        setCalBraSize('This Size Are Not in list');
      }
    }
    if (region === 'KOR/CHN') {
      setBandError('');
      setBustError('');
      if (bandSize > bustSize) {
        setBandError('bustSize Must be greater Than bandSize');
      } else {
        let KorSizes = bustSize - bandSize;
        setDifference(KorSizes);
      }
      if (difference <= 1) {
        setBraSize('A');
      } else if (difference <= 2) {
        setBraSize('B');
      } else if (difference <= 3) {
        setBraSize('C');
      } else if (difference <= 4) {
        setBraSize('D');
      } else if (difference <= 5) {
        setBraSize('DD/E');
      } else if (difference <= 6) {
        setBraSize('DDD/F');
      } else if (difference <= 7) {
        setBraSize('G');
      } else if (difference <= 8) {
        setBraSize('H');
      } else if (difference <= 9) {
        setBraSize('H');
      } else if (difference <= 9) {
        setBraSize('H');
      } else if (difference > 9) {
        // setBraSize('This Size Are Not in list');
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
    <KeyboardAvoidingView style={{flex: 1}} enabled>
      <ScrollView keyboardShouldPersistTaps="handled">
        <ImageBackground
          source={IMAGE.IMAGES.BG}
          style={Styles().container}
          resizeMode="cover">
          <View
            style={{
              flex: 1,
              top: 20,
              alignItems: 'center',
            }}>
            <Header
              title={'Select Region'}
              Subtitle={selectedOption}
              onPress={toggleModal}
              width={SCREENS.screenWidth * 0.9}
              height={SCREENS.screenHeight * 0.07}
            />
            <Modal
              isVisible={isModalVisible}
              style={Styles().modal}
              swipeDirection={'up'}
              animationIn={'fadeIn'}>
              <BlurView blurType="light" style={Styles().BlurView}>
                <View style={Styles().modalContainer}>
                  <View style={Styles().modalInnerContainer}>
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
          <View style={{flex: 5, alignItems: 'center'}}>
            <BraCom
              title={'Bust Size (Inches)'}
              width={SCREENS.screenWidth * 0.57}
              subTitle={
                'With a tape, measure around your back, under your arms and across your chest’s fullest part.'
              }
              source={IMAGE.IMAGES.Bust}
              right={13}
              top={16}
              widthImage={SCREENS.screenWidth * 0.16}
              heightImage={SCREENS.screenHeight * 0.09}
              topImage={15}
            />
            <Input
              borderWidth={1}
              onChangeText={handleChangeText}
              backgroundColor={'#FFB0F6'}
              color={'#ffff'}
              borderColor={'#FCC8D1'}
              height={SCREENS.screenHeight * 0.05}
              value={bustSize}
              fontSize={16}
              width={SCREENS.screenWidth * 0.6}
              left={22}
              top={25}
            />
            {bustError ? (
              <Text style={{color: 'red', top: 30}}>{bustError}</Text>
            ) : null}
            <BraCom
              title={'Band Size (Inches)'}
              subTitle={
                'Wrap a tape around your rib cage under your bust. Keep it snug and level.'
              }
              source={IMAGE.IMAGES.Band}
              width={SCREENS.screenWidth * 0.57}
              top={45}
              right={15}
              widthImage={SCREENS.screenWidth*0.15}
              heightImage={SCREENS.screenHeight*0.09}
              topImage={20}
            />
            <Input
              borderWidth={1}
              width={SCREENS.screenWidth * 0.6}
              onChangeText={handleChangeText1}
              backgroundColor={'#FFB0F6'}
              color={'#ffff'}
              borderColor={'#FCC8D1'}
              height={SCREENS.screenHeight * 0.05}
              value={bandSize}
              fontSize={16}
              left={22}
              top={50}
            />
            {bandError ? (
              <Text style={{color: 'red', top: 50}}>{bandError}</Text>
            ) : null}
            <Button
              title={'Calculate'}
              width={SCREENS.screenWidth * 0.28}
              borderWidth={1}
              height={SCREENS.screenHeight * 0.05}
              borderRadius={10}
              backgroundColor={'#F49CE9'}
              onPress={Calculate}
              borderColor={'#fff'}
              color={'#FFF'}
              top={110}
            />
            {calBraSize !== '' && (
              <Text style={Styles().braSize}>Your Bra Size : {calBraSize}</Text>
            )}
          </View>
          <View style={{flex: 3}}>
            <View style={{flexDirection: 'row', top: 160}}>
              <View>
                <Image
                  style={Styles().LightImage}
                  source={IMAGE.IMAGES.Light}
                />
              </View>
              <Text style={Styles().hintText}>
                Hint: Odd numbers will be rounded it to the next even number
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

{
  /* <KeyboardAvoidingView behavior="padding" enabled>
        <ScrollView keyboardShouldPersistTaps="handled"> */
}

{
  /* </ScrollView>
      </KeyboardAvoidingView> */
}
