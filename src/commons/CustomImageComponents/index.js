import {Image} from 'react-native';
import React from 'react';

export const CustomImage = ({source,widthImage,heightImage,topImage,rightImage}) => {
  return <Image source={source} style={{width: widthImage, height: heightImage,top:topImage,right:rightImage}} />;
};
