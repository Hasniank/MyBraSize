import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {IMAGE} from '../../assets';
import {SCREENS} from '../../constants';

export const RadioButton = ({options, selectedOption, onSelect}) => {
  console.log(selectedOption, 'region');

  return (
    <View>
      {options.map(option => {
        return (
          <TouchableOpacity key={option} onPress={() => onSelect(option)}>
            <View
              style={{
                borderWidth: 1,
                margin: 6,
                width: SCREENS.screenWidth * 0.84,
                height: 43,
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: '#F1D3E5',
                borderColor: '#dff',
                flexDirection: 'row',
              }}>
              {selectedOption === option ? (
                <Image
                  source={IMAGE.IMAGES.CIRCLE2}
                  style={{left: 8, top: 8, width: 25, height: 25}}
                />
              ) : (
                <Image
                  source={IMAGE.IMAGES.CIRCLE}
                  style={{left: 8, top: 8, width: 25, height: 25}}
                />
              )}
              <Text
                style={{
                  marginLeft: 'auto',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  marginRight: 20,
                  marginTop: 10,
                  fontFamily: 'Salsa-Regular',
                  fontSize:20
                }}>
                {option}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
