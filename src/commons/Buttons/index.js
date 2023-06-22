import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {Styles} from './styles';

export const Button = ({
  title,
  width,
  height,
  color,
  onPress,
  backgroundColor,
  fontSize,
  borderWidth,
  marginTop,
  borderRadius,
  borderColor,
  top,
  left
}) => {
  return (
    <TouchableOpacity
      style={
        Styles({
          width,
          height,
          backgroundColor,
          borderWidth,
          marginTop,
          borderRadius,
          borderColor,
          top,
          left
        }).container
      }
      onPress={onPress}>
      <Text style={Styles({color, fontSize}).text}>{title}</Text>
    </TouchableOpacity>
  );
};
