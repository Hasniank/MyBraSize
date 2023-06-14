import {View, Text, Image} from 'react-native';
import React from 'react';
import {Styles} from './Styels';
import {CustomImage} from '../../../../../commons/CustomImageComponents';
import {Input} from '../../../../../commons/Input/Index';
import { FONTS } from '../../../../../constants';

export const BraCom = ({
  title,
  subTitle,
  source,
  onChangeText,
  placeholder,
  value,
  backgroundColor,
  borderColor,
  borderWidth,
  textHeight,
  textWidth,
  width,
  textTop,
  InputTop,
  InputLeft,
  InputHeight,
  braComTop,
}) => {
  return (
    <View style={Styles({braComTop}).container}>
      <Image source={source} style={Styles({}).image} />
      <View style={{justifyContent: 'center', alignItems: 'center', left: 8}}>
        <View style={Styles().textContainer}>
          <Text style={{color: '#fff',fontFamily:"Salsa-Regular",fontSize:20}}>{title}</Text>
          <Text style={Styles({textHeight, textWidth, textTop}).subTitle}>
            {subTitle}
          </Text>
        </View>
        <Input
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          borderWidth={borderWidth}
          width={width}
          top={InputTop}
          left={InputLeft}
          height={InputHeight}
          
        />
      </View>
    </View>
  );
};
