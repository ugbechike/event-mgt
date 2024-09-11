import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStackScreen} from './auth-stack';
import {TabNavigator} from './tab-navigator';
import {UserAuth} from '../features/hooks/use-auth';

const RootStack = createNativeStackNavigator();

export const RootNav = () => {
  const {isSignedIn} = UserAuth();

  return (
    <>
      {isSignedIn ? (
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="HomeTab" component={TabNavigator} />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Auth" component={AuthStackScreen} />
        </RootStack.Navigator>
      )}
    </>
  );
};
