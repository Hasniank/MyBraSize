import {View, Text, Image} from 'react-native';
import React from 'react';
import {Styles} from './Styels';

export const BraCom = ({
  title,
  subTitle,
  source,
  width,
  height,
  top,
  left,
  right,
  marginRight
}) => {
  return (
    <View style={Styles({top, left, right, marginRight}).container}>
      {/* <View style={Styles().imageContainer}> */}
      <Image source={source} style={Styles().image} />
      {/* </View> */}
      <View style={Styles().TextContainer}>
        <Text style={Styles({height}).bustText}>{title}</Text>
        <Text style={Styles({width}).bustText2}>{subTitle}</Text>
      </View>
      <View>
        <View></View>
      </View>
    </View>
  );
};

// react-native.config.js
