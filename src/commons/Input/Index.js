import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Styles} from './Style';

export const Input = ({
  onChangeText,
  placeholder,
  value,
  width,
  backgroundColor,
  borderWidth,
  color,
  borderColor,
  onFocus,
  onBlur,
  fontSize,
  height,
  top,
  left
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
          color,
          borderColor,
          fontSize,
          top,
          left
        }).container
      }
    />
  );
};
