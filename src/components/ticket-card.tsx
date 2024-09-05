import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Text} from './text';
import {Image} from 'react-native';
import {theme} from '../theme';

interface TicketCardProps {
  title: string;
  image: string;
  location: string;
  time: string;
  locationAddress: string;
  ticketType: string;
}
export const TicketCard = (props: TicketCardProps) => {
  const {title, image, location, time, locationAddress, ticketType} = props;
  return (
    <TouchableWithoutFeedback onPress={() => console.log('xxxxxxx', title)}>
      <View style={styles.card}>
        <View style={styles.cardInfo}>
          <Image src={image} style={styles.image} />
          <View style={styles.infoText}>
            <Text textStyle="title">{title}</Text>
            <Text textStyle="label">{location}</Text>
          </View>
        </View>

        <View style={styles.dottedLineWrapper}>
          <View style={styles.dottedLine} />
        </View>

        <View style={styles.cardFooter}>
          <View>
            <Text textStyle="subTitle">Time</Text>
            <Text textStyle="footer">{time}</Text>
          </View>
          <View>
            <Text textStyle="subTitle">Location</Text>
            <Text textStyle="footer">{locationAddress}</Text>
          </View>
          <View style={styles.badge}>
            <Text textStyle="footer">{ticketType}</Text>
          </View>
        </View>
        <View style={styles.leftCircle} />
        <View style={styles.rightCircle} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.secondary,
    padding: 14,
    borderRadius: 15,
    position: 'relative',
    // marginRight: 16,
    width: 310,
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 16,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  dottedLine: {
    height: 2,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderStyle: 'dashed',
  },
  dottedLineWrapper: {
    height: 1,
    overflow: 'hidden',
    marginTop: 16,
    marginBottom: 24,
    marginHorizontal: 8,
  },

  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: theme.colors.background,
    borderRadius: 15,
    paddingVertical: 4,
    // paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  leftCircle: {
    position: 'absolute',
    top: 60,
    left: -10,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
  },
  rightCircle: {
    position: 'absolute',
    top: 60,
    right: -10,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
  },
});
