import {StyleSheet, View} from 'react-native';
import React from 'react';
import {theme} from '../theme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Divider} from './divider';
import {Text} from './text';
import {EventTicket} from '../mocks/events-data';

interface TicketHorizontalCardProps extends EventTicket {
  handleSelectedTicket: (item: EventTicket) => void;
  activeTicket: boolean;
}

export const TicketHorizontalCard = (props: TicketHorizontalCardProps) => {
  const {
    ticketType,
    description,
    price,
    id,
    parentEventId,
    handleSelectedTicket,
    activeTicket,
  } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        handleSelectedTicket({
          ticketType,
          description,
          price,
          id,
          parentEventId,
        })
      }>
      <View style={[styles.container, {opacity: activeTicket ? 1 : 0.4}]}>
        <View style={styles.contentWrapper}>
          <View style={styles.iconContainer}>
            <IonIcon
              name={'ticket-outline'}
              size={25}
              color={theme.colors.white}
            />
          </View>

          <Divider size={4} />
          <Text textStyle="large">{ticketType}</Text>
          <Divider size={4} />
          <Text textStyle="subTitle" style={styles.subtitleText}>
            {description}
          </Text>
        </View>

        <View style={styles.verticalDottedLine} />

        <View style={styles.priceWrapper}>
          <Text textStyle="title" style={styles.priceText}>
            ${`${price}`}/
            <Text textStyle="label" style={styles.priceText}>
              pax
            </Text>
          </Text>
        </View>

        <View style={styles.topCircle} />
        <View style={styles.bottomCircle} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 15,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  contentWrapper: {
    width: '70%',
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 59,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: theme.colors.darkGrey,
  },
  subtitleText: {
    width: 150,
  },
  verticalDottedLine: {
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderStyle: 'dotted',
    transform: [{rotate: '180deg'}],
    height: '100%',
  },
  topCircle: {
    position: 'absolute',
    top: -13,
    right: 95,
    width: 30,
    height: 30,
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
  },
  bottomCircle: {
    position: 'absolute',
    bottom: -13,
    right: 95,
    width: 30,
    height: 30,
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
  },
  priceWrapper: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    color: theme.colors.lightGreen,
    transform: [{rotate: '-90deg'}],
  },
});
