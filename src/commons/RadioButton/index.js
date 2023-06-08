import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {IMAGE} from '../../assets';

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
                width: 280,
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
                  style={{left: 8, top: 8}}
                />
              ) : (
                <Image source={IMAGE.IMAGES.CIRCLE} style={{left: 8, top: 8}} />
              )}
              <Text
                style={{
                  marginLeft: 'auto',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  marginRight: 20,
                  marginTop: 10,
                  fontFamily: 'Salsa',
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
