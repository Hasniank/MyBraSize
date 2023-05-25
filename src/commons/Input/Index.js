import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Styles} from './Style';

export const Input = ({
  onChangeText,
  placeholder,
  value,
  width,
  height,
  backgroundColor,
  borderWidth,
  marginTop,
  marginLeft,
  color,
  borderColor,
  onFocus,
  onBlur,
  marginRight,
  fontSize,
  paddingBottom,
}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      keyboardType="number-pad"
      onFocus={onFocus}
      onBlur={onBlur}
      clearButtonMode="always"
      style={
        Styles({
          width,
          height,
          backgroundColor,
          borderWidth,
          marginTop,
          marginLeft,
          color,
          borderColor,
          marginRight,
          fontSize,
          paddingBottom,
        }).container
      }
    />
  );
};
