import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screen/home-screen';
import {ExploreScreen} from '../screen/explore-screen';
import {TicketScreen} from '../screen/ticket-screen';
import {ProfileScreen} from '../screen/profile-screen';

const HomeStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
const TicketStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator screenOptions={{headerShown: false}}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
    </ExploreStack.Navigator>
  );
};

export const TicketStackScreen = () => {
  return (
    <TicketStack.Navigator screenOptions={{headerShown: false}}>
      <TicketStack.Screen name="Tickets" component={TicketScreen} />
    </TicketStack.Navigator>
  );
};

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
