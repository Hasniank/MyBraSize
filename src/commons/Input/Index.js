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
  borderColor,
  fontSize,
  height,
  top,
  left,
}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      keyboardType="numeric"
      clearButtonMode="always"
      maxLength={2}
      inputMode="numeric"
      cursorColor={'#fff'}
      multiline={false}
      style={
        Styles({
          width,
          height,
          backgroundColor,
          borderWidth,
          borderColor,
          fontSize,
          top,
          left,
        }).container
      }
    />
  );
};
