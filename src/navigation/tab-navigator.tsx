import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ExploreStackScreen,
  HomeStackScreen,
  ProfileStackScreen,
  TicketStackScreen,
} from './stacks';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../theme';

const Tab = createBottomTabNavigator();

const tabBarIcon = ({
  route,
  color,
  size,
}: {
  route: any;
  color: string;
  size: number;
}) => {
  let iconName: string = '';

  if (route.name === 'HomeStack') {
    iconName = 'home-outline';
  } else if (route.name === 'ExploreStack') {
    iconName = 'search-outline';
  } else if (route.name === 'TicketStack') {
    iconName = 'ticket-outline';
  } else if (route.name === 'ProfileStack') {
    iconName = 'person-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => tabBarIcon({route, color, size}),
        tabBarStyle: {
          backgroundColor: theme.colors.secondary,
        },
      })}>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="ExploreStack" component={ExploreStackScreen} />
      <Tab.Screen name="TicketStack" component={TicketStackScreen} />
      <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};
