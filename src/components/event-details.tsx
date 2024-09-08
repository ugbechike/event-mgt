import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {EventData} from '../mocks/events-data';
import {Text} from './text';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {theme} from '../theme';

interface EventDetailsProps {
  detail: EventData;
  handleGetTicket: (detail: EventData) => void;
}

export const EventDetails = ({detail, handleGetTicket}: EventDetailsProps) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleGetTicket(detail)}>
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
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: theme.colors.lightGreen,
  },
  timeDate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
});
