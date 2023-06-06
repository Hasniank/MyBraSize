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
  left,
  right,
}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      keyboardType="numeric"
      onFocus={onFocus}
      onBlur={onBlur}
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
