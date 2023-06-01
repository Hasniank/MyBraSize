import {View, Text, Image} from 'react-native';
import React from 'react';
import {Styles} from './Styels';
import {CustomImage} from '../../../../../commons/CustomImageComponents';

export const BraCom = ({
  title,
  subTitle,
  source,
  width,
  height,
  top,
  left,
  right,
  marginRight,
  widthImage,
  heightImage,
  rightImage,
  topImage
}) => {
  return (
    <View style={Styles({top, left, right, marginRight}).container}>
      {/* <Image
        source={source}
        style={Styles({}).image}
      /> */}
      <CustomImage
        source={source}
        widthImage={widthImage}
        heightImage={heightImage}
        topImage={topImage}
        rightImage={rightImage}
      />
      <View>
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
