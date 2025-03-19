import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider, Text} from '../components';
import {theme} from '../theme';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const CheckoutScreen = () => {

  return (
    <>
      <View style={styles.container}>
        {/* item details section */}
        <View style={styles.itemContainer}>
          <View style={styles.imageWrapper}>
            <Image
              src={
                'https://res.cloudinary.com/code-freak/image/upload/v1725589349/jamstack_conf_banner_photo_1_hpf6id.jpg'
              }
              style={styles.image}
            />
          </View>

          <View style={styles.content}>
            <Text textStyle="title">Carlifonia Art festival</Text>
            <Divider size={4} />
            <View style={styles.dateTime}>
              <IonIcon
                name={'calendar-outline'}
                size={20}
                color={theme.colors.darkGrey}
              />
              <Text textStyle="small" style={styles.dateTimeText}>
                March 19, 2025
              </Text>
            </View>
            <Divider size={2} />
            <View style={styles.dateTime}>
              <IonIcon
                name={'time-outline'}
                size={20}
                color={theme.colors.darkGrey}
              />
              <Text textStyle="small" style={styles.dateTimeText}>
                9:00 AM - 10:00 PM
              </Text>
            </View>
          </View>
        </View>

        <Divider />
        <Text textStyle="title">Order Summary</Text>
        <Divider size={6} />
        {/* order Details */}
        <View style={styles.orderDetailsContainer}>
          <View style={styles.summaryContent}>
            <Text textStyle="label" style={styles.textWidth}>
              2x Regular price
            </Text>
            <Text textStyle="title">$50.00</Text>

            <Text textStyle="label" style={styles.textWidth}>
              Subtotal
            </Text>
            <Text textStyle="title">$50.00</Text>

            <Text textStyle="label" style={styles.textWidth}>
              Tax
            </Text>
            <Text textStyle="title">$10.00</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.summaryContent}>
            <Text textStyle="title" style={styles.textWidth}>
              Total
            </Text>
            <Text textStyle="title">$60.00</Text>
          </View>
        </View>
      </View>

      {/* Footer section */}
      <View style={styles.footerSection}>
        <View>
          <Text textStyle="title">Pay</Text>
          <Text textStyle="title">$60.00</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text textStyle="title">Make Payment</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  imageWrapper: {
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  content: {
    marginLeft: 16,
  },
  dateTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimeText: {
    marginLeft: 8,
  },
  orderDetailsContainer: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 15,
  },
  line: {
    height: 2,
    backgroundColor: theme.colors.darkGrey,
  },
  summaryContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    paddingVertical: 20,
  },
  textWidth: {
    width: '50%',
    marginBottom: 20,
  },
  footerSection: {
    backgroundColor: theme.colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  button: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lightGreen,
    borderRadius: 10,
  },
});
