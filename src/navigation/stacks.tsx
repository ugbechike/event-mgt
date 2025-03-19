import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screen/home-screen';
import {ExploreScreen} from '../screen/explore-screen';
import {TicketScreen} from '../screen/ticket-screen';
import {ProfileScreen} from '../screen/profile-screen';
import {TicketDetailsScreen} from '../screen/ticket-details-screen';
import {
  ExploreStackNavigatorPramList,
  HomeStackNavigatorPramList,
  ProfileStackNavigatorPramList,
  TicketStackNavigatorPramList,
} from './type';
import {theme} from '../theme';
import {CheckoutScreen} from '../screen/checkout-screen';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorPramList>();
const ExploreStack =
  createNativeStackNavigator<ExploreStackNavigatorPramList>();
const TicketStack = createNativeStackNavigator<TicketStackNavigatorPramList>();
const ProfileStack =
  createNativeStackNavigator<ProfileStackNavigatorPramList>();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          headerShown: false,
        }}
      />
      <ExploreStack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          title: 'Checkout',
          headerStyle: {backgroundColor: theme.colors.background},
          headerTintColor: theme.colors.white,
          headerBackVisible: true,
        }}
      />
    </ExploreStack.Navigator>
  );
};

export const TicketStackScreen = () => {
  return (
    <TicketStack.Navigator>
      <TicketStack.Screen
        name="TicketsScreen"
        component={TicketScreen}
        options={{
          headerShown: false,
        }}
      />
      <TicketStack.Screen
        name="TicketDetailsScreen"
        component={TicketDetailsScreen}
        options={{
          title: 'Ticket Details',
          headerStyle: {backgroundColor: theme.colors.background},
          headerTintColor: theme.colors.white,
          headerBackVisible: true,
        }}
      />
    </TicketStack.Navigator>
  );
};

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
