import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BraScreen} from './components';

export const Home = () => {
  return (
    <View style={styles.container}>
      <BraScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// <View style={Styles().header}>
//             <Header
//               title={'Select Region'}
//               Subtitle={selectedOption}
//               onPress={toggleModal}
//               width={SCREENS.screenWidth * 0.9}
//               height={SCREENS.screenHeight * 0.07}
//             />
//           </View>
//           <Modal
//             isVisible={isModalVisible}
//             style={Styles().modal}
//             swipeDirection={'up'}
//             animationIn={'fadeIn'}>
//             <BlurView blurType="light" style={Styles().BlurView}>
//               <View style={Styles().modalContainer}>
//                 <View style={Styles().modalInnerContainer}>
//                   <Text style={Styles().selectRegion}>Select Region</Text>
//                   <TouchableOpacity
//                     style={Styles().radioBtn}
//                     onPress={toggleModal}>
//                     <RadioButton
//                       options={options}
//                       selectedOption={selectedOption}
//                       onSelect={handleSelect}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </BlurView>
//           </Modal>
//           <View style={Styles().secondContainer}>
//             <BraCom
//               title={'Bust Size (Inches)'}
//               width={SCREENS.screenWidth * 0.57}
//               subTitle={
//                 'With a tape, measure around your back, under your arms and across your chest’s fullest part.'
//               }
//               source={IMAGE.IMAGES.Bust}
//               top={80}
//               left={0}
//               right={20}
//             />
//             <Input
//               borderWidth={1}
//               onChangeText={handleChangeText}
//               backgroundColor={'#FFB0F6'}
//               color={'#ffff'}
//               borderColor={'#FCC8D1'}
//               height={SCREENS.screenHeight * 0.05}
//               value={bustSize}
//               fontSize={16}
//               width={SCREENS.screenWidth * 0.6}
//               left={35}
//               top={45}
//             />
//             {bustError ? <Text style={{color: 'red'}}>{bustError}</Text> : null}
//             <BraCom
//               title={'Band Size (Inches)'}
//               subTitle={
//                 'Wrap a tape around your rib cage under your bust. Keep it snug and level.'
//               }
//               source={IMAGE.IMAGES.Band}
//               width={SCREENS.screenWidth * 0.57}
//             />
//             <Input
//               borderWidth={1}
//               width={SCREENS.screenWidth * 0.52}
//               onChangeText={handleChangeText1}
//               backgroundColor={'#FFB0F6'}
//               color={'#ffff'}
//               borderColor={'#FCC8D1'}
//               height={SCREENS.screenHeight * 0.05}
//               value={bandSize}
//               fontSize={16}
//               left={35}
//               top={0}
//             />
//             {bandError ? <Text style={{color: 'red'}}>{bandError}</Text> : null}
//             <Button
//               title={'Calculate'}
//               width={SCREENS.screenWidth * 0.25}
//               borderWidth={1}
//               height={35}
//               borderRadius={10}
//               backgroundColor={'#F49CE9'}
//               onPress={Calculate}
//               borderColor={'#fff'}
//               color={'#FFF'}
//             />
//             {calBraSize !== '' && (
//               <Text style={Styles().braSize}>Your Bra Size : {calBraSize}</Text>
//             )}
//           </View>

{/* <View style={Styles().thirdContainer}>
        <View>
          <Image style={Styles().LightImage} source={IMAGE.IMAGES.Light} />
        </View>
        <Text style={Styles().hintText}>
          Hint: Odd numbers will be rounded it to the next even number
        </Text>
      </View> */}