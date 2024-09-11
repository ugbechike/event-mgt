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

  if (route.name === 'Home') {
    iconName = 'home-outline';
  } else if (route.name === 'Explore') {
    iconName = 'search-outline';
  } else if (route.name === 'Ticket') {
    iconName = 'ticket-outline';
  } else if (route.name === 'Profile') {
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
        tabBarActiveTintColor: theme.colors.lightGreen,
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Explore" component={ExploreStackScreen} />
      <Tab.Screen name="Ticket" component={TicketStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};
