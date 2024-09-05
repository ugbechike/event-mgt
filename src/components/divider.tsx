import React from 'react';
import {View} from 'react-native';

interface DividerProps {
  size?: number;
  horizontal?: boolean;
}
export const Divider = (props: DividerProps) => {
  const {size = 10, horizontal = false} = props;
  return <View style={[horizontal ? {width: size} : {marginVertical: size}]} />;
};
