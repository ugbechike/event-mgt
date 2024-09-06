import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {EventData} from '../mocks/events-data';
import {Text} from './text';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {theme} from '../theme';

interface EventDetailsProps {
  detail: EventData;
  //   detail: DetailsType;
}

export const EventDetails = ({detail}: EventDetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text textStyle="label">Title</Text>
        <Text textStyle="title">{detail.title}</Text>
      </View>
      <View style={styles.section}>
        <Text textStyle="label">Location</Text>
        <Text textStyle="title">{detail.location}</Text>
      </View>
      <View style={styles.section}>
        <Text textStyle="label">Time</Text>
        <View style={styles.timeDate}>
          <Ionicon
            name="calendar"
            size={14}
            color={theme.colors.grey}
            style={styles.icon}
          />
          <Text textStyle="title">{detail.dateTime}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text textStyle="label">Price</Text>
        <Text textStyle="title">{detail.price}</Text>
      </View>

      <View style={styles.section}>
        <Text textStyle="label">Price</Text>
        <Text textStyle="title">{detail.about}</Text>
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          padding: 10,
          alignItems: 'center',
          borderRadius: 5,
          justifyContent: 'center',
          backgroundColor: theme.colors.lightGreen,
        }}>
        <Text textStyle="title">Book Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  //   footer: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //   },
  timeDate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
});
