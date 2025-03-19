import React, {useMemo, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {theme} from '../theme';
import {Divider, TicketCard} from '../components';
import {FlashList} from '@shopify/flash-list';
import { useGetTickets } from '../hooks/query/useGetTicket';
import { Tabs } from '../components/ticket-tab';
import { TicketsHeader } from '../components/tickets-header';

export const eventTabs = [
  {label: 'upcoming', title: 'Upcoming'},
  {label: 'past', title: 'Past Events'},
];

export const TicketScreen = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const {data: tickets, isLoading} = useGetTickets();

  const filteredTickets = useMemo(() => {
    return tickets?.filter(
      ticket => ticket.status === eventTabs[selectedTabIndex].label,
    );
  }, [selectedTabIndex, tickets]);

  if (isLoading) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TicketsHeader />
        <Divider size={10} />
        <Tabs
          handleSelectedTab={setSelectedTabIndex}
          selectedTabIndex={selectedTabIndex}
        />
        <Divider />
        <View style={styles.scrollContainer}>
          <FlashList
            data={filteredTickets}
            renderItem={({item}) => <TicketCard {...item} full={true} />}
            keyExtractor={item => item.id}
            estimatedItemSize={100}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Divider size={4} />}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 24,
  },
  scrollContainer: {
    marginBottom: 30,
    height: '80%',
  },

  ticketsSection: {
    marginTop: 24,
  },
});
