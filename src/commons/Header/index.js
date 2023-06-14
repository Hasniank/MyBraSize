import {Text, TouchableOpacity, ImageBackground, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {IMAGE} from '../../assets';

export const Header = ({
  title,
  Subtitle,
  onPress,
  width,
  height,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles({width, marginTop, height}).container} >
      <Text style={styles().selectRegionText}>{title}</Text>
      <Text style={styles().regionText}>{Subtitle}</Text>
    </TouchableOpacity>
  );
};
