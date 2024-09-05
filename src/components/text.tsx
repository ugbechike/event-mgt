import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {theme} from '../theme';

interface RNTextProps extends TextProps {
  textStyle?: keyof typeof theme.typography.styles;
}

export const Text: React.FC<RNTextProps> = ({textStyle, style, ...props}) => {
  const textStyleObject = textStyle ? theme.typography.styles[textStyle] : {};

  return <RNText style={[textStyleObject, style]} {...props} />;
};
