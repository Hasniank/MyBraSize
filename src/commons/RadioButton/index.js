import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FONTS} from '../../constants';
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
                // alignItems: 'center',
                borderRadius: 10,
                backgroundColor: '#F5C6EC',
                borderColor: '#dff',
                flexDirection: 'row',
                // elevation: 10,
              }}>
              {selectedOption === option ? (
                // <View
                //   style={{
                //     width: 20,
                //     height: 20,
                //     borderRadius: 10,
                //     backgroundColor: '#7A0459',
                //     marginLeft: 10,
                //     marginTop: 10,
                //   }}
                // />
                <Image
                  source={IMAGE.IMAGES.CIRCLE2}
                  style={{left: 8, top: 8}}
                />
              ) : (
                // <View
                //   style={{
                //     width: 20,
                //     height: 20,
                //     borderRadius: 10,
                //     backgroundColor: '#fff',
                //     marginLeft: 10,
                //     marginTop: 10,
                //   }}
                // />
                <Image source={IMAGE.IMAGES.CIRCLE} style={{left: 8, top: 8}} />
              )}
              <Text
                style={{
                  marginLeft: 'auto',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  marginRight: 20,
                  marginTop: 10,
                  fontFamily: FONTS.Poppins_Italic,
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
