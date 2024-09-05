import React from 'react';
import {ImageBackground, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {theme} from '../theme';
import {Text} from './text';
import {Divider} from './divider';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface EventCardProps {
  size: 'small' | 'medium' | 'large';
  title: string;
  dateTime: string;
  price: string;
  image: string;
}

export const EventCard = (props: EventCardProps) => {
  const {size, title, dateTime, price, image} = props;

  return (
    <TouchableWithoutFeedback onPress={() => console.log('xxxxxxx', title)}>
      <View style={styles[size]}>
        <ImageBackground
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
          imageStyle={styles.imageStyle}>
          {/* Add content here */}
          <View style={styles.cardContent}>
            <Text textStyle="title" numberOfLines={1}>
              {title}
            </Text>
            <Divider />
            <View style={styles.footer}>
              <View style={styles.timeDate}>
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
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  imageStyle: {borderRadius: 15},
  small: {
    width: 220,
    height: 300,
    borderRadius: 15,
    // marginRight: 16,
  },
  medium: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  large: {
    width: 250,
    height: 250,
    borderRadius: 15,
  },
  cardContent: {
    borderRadius: 15,
    backgroundColor: theme.colors.secondary,
    padding: 16,
    marginBottom: 4,
    marginHorizontal: 4,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
