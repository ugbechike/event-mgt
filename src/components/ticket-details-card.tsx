import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from './text';
import {theme} from '../theme';
import {Divider} from './divider';
import QRCode from 'react-native-qrcode-svg';

type Props = {};

export const TicketDetailsCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        src={
          'https://res.cloudinary.com/code-freak/image/upload/v1725589349/jamstack_conf_banner_photo_1_hpf6id.jpg'
        }
        style={styles.image}
      />
      <Divider size={4} />
      <View style={styles.titleWrapper}>
        <Text textStyle="subTitle">Event</Text>
        <Text textStyle="title">Jamstack Conf</Text>
      </View>
      <Divider size={2} />
      <View style={styles.detailsContainer}>
        <View style={styles.ticketInfo}>
          <Text textStyle="subTitle" style={styles.infoText}>
            Date
          </Text>
          <Text textStyle="label">September 29, 2024</Text>
        </View>
        <View style={styles.ticketInfo}>
          <Text textStyle="subTitle" style={styles.infoText}>
            Time
          </Text>
          <Text textStyle="label">9:00 AM - 5:00 PM</Text>
        </View>
        <View style={styles.ticketInfo}>
          <Text textStyle="subTitle" style={styles.infoText}>
            Ticket Set
          </Text>
          <Text textStyle="label">Regular x2</Text>
        </View>
        <View style={styles.ticketInfo}>
          <Text textStyle="subTitle" style={styles.infoText}>
            Venue
          </Text>
          <Text textStyle="label">Toronto city hall</Text>
        </View>
      </View>
      <Divider size={4} />
      <View style={styles.dottedLineWrapper}>
        <View style={styles.dottedLine} />
      </View>
      <View style={styles.qrCodeWrapper}>
        <QRCode
          value="https://www.jamstackconf.com/"
          size={120}
          color={theme.colors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  titleWrapper: {
    paddingHorizontal: 14,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    padding: 14,
  },
  ticketInfo: {
    width: '48%',
    marginTop: 20,
  },
  infoText: {
    lineHeight: 24,
    marginBottom: 4,
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
  qrCodeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
  },
});
