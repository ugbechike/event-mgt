import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

interface NavigationWrapperProps {
  children: React.ReactNode;
}

export const NavigationWrapper = (props: NavigationWrapperProps) => {
  const {children} = props;

  return <NavigationContainer>{children}</NavigationContainer>;
};
