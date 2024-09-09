import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Divider, Text, TicketHorizontalCard} from '../components';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {theme} from '../theme';
import {EventData, EventTicket, eventTickets} from '../mocks/events-data';
import {ScrollView} from 'react-native-gesture-handler';

// TODO: WILL USE TANSTASK QUERY TO GET TICKET DATA
interface TicketsSelectScreenProps extends EventData {}

const MIN_QUANTITY = 1;
export const TicketsSelectScreen = ({
  id,
  title,
  price,
  image,
  location,
}: TicketsSelectScreenProps) => {
  const [quantity, setQuantity] = useState<number>(MIN_QUANTITY);
  const [selectedTicket, setSelectedTicket] = useState<EventTicket>();

  // TODO: WILL USE TANSTASK QUERY TO GET TICKET DATA
  const [ticketData, setTicketData] = useState<Array<EventTicket> | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelectedTicket = useCallback(
    (item: EventTicket) => {
      console.log('Selected ticket: ', ticketData);
      setSelectedTicket(item);
    },
    [ticketData],
  );

  const handleAddQuantity = useCallback(() => {
    setQuantity(quantity + MIN_QUANTITY);
  }, [quantity]);

  const handleReduceQuantity = useCallback(() => {
    // Prevent quantity from going below 1
    if (quantity === MIN_QUANTITY) {
      return;
    }
    setQuantity(quantity - MIN_QUANTITY);
  }, [quantity]);

  const fetchTicketData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = (await eventTickets).filter(
        event => event.parentEventId === id,
      );
      setTicketData(data);
      setSelectedTicket(data[0]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching ticket data: ', error);
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchTicketData();
  }, [fetchTicketData]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading ticket data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text textStyle="title" style={styles.title}>
        Get a Ticket
      </Text>
      <Divider />
      {/* Ticket detail section */}
      <View style={styles.flexItem}>
        <Image src={image} style={styles.image} />
        <View style={styles.contentWrapper}>
          <Text textStyle="title">{title}</Text>
          <Text textStyle="label">{location}</Text>
          <Divider />
          <View style={styles.quantitySection}>
            <View style={styles.flexItem}>
              <TouchableOpacity
                onPress={handleReduceQuantity}
                disabled={quantity === MIN_QUANTITY}>
                <IonIcon
                  name={'remove-circle'}
                  size={30}
                  color={
                    quantity === MIN_QUANTITY
                      ? theme.colors.grey
                      : theme.colors.lightGreen
                  }
                />
              </TouchableOpacity>
              <Text textStyle="label" style={styles.quantityText}>
                {quantity}
              </Text>
              <TouchableOpacity onPress={handleAddQuantity}>
                <IonIcon
                  name={'add-circle'}
                  size={30}
                  color={theme.colors.lightGreen}
                />
              </TouchableOpacity>
            </View>

            <Text textStyle="title">
              $
              {`${
                (selectedTicket?.price
                  ? Number(selectedTicket?.price)
                  : Number(price)) * quantity
              }`}
            </Text>
          </View>
        </View>
      </View>

      <Divider size={16} />

      <View>
        <Text textStyle="title">Select Ticket</Text>
        <Divider />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollItems}>
          {ticketData?.map((ticket, index) => (
            <TicketHorizontalCard
              key={index + ticket.id}
              {...ticket}
              handleSelectedTicket={handleSelectedTicket}
              activeTicket={selectedTicket?.id === ticket.id}
            />
          ))}
        </ScrollView>
      </View>

      {/* <View style={styles.footer}> */}
        <TouchableOpacity style={styles.button}>
          <Text textStyle="title">Proceed to checkout</Text>
        </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
  },
  flexItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  contentWrapper: {
    marginLeft: 25,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityText: {
    marginHorizontal: 10,
  },
  scrollItems: {
    width: '100%',
    height: 375,
  },
  footer: {
    // borderWidth: 1,
    // padding: 10,
    // alignItems: 'center',
    // backgroundColor: theme.colors.lightGreen,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: theme.colors.lightGreen,
  },
});
