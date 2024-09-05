import React from 'react';

import {Text} from './text';
import {Image, StyleSheet, View} from 'react-native';
import {theme} from '../theme';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Divider} from './divider';

interface EventHorizontalCardProps {
  title: string;
  dateTime: string;
  price: string;
  image: string;
}

export const EventHorizontalCard = (props: EventHorizontalCardProps) => {
  const {title, dateTime, price, image} = props;
  return (
    <View style={styles.container}>
      <Image src={image} style={styles.image} />
      <View style={styles.content}>
        <Text textStyle="title">{title}</Text>
        <Divider />
        <View style={styles.footer}>
          <View style={styles.dateTime}>
            <Ionicon
              name="calendar"
              size={14}
              color={theme.colors.grey}
              style={styles.icon}
            />
            <Text textStyle="small">{dateTime}</Text>
          </View>

          <Text textStyle="label">{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    padding: 14,
    borderRadius: 15,
    width: '100%',
  },
  image: {
    width: '25%',
    height: 80,
    borderRadius: 10,
  },
  content: {
    marginLeft: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '70%',
  },
  icon: {
    marginRight: 4,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
