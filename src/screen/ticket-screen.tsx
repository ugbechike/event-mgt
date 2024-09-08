import React, {useMemo, useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme';
import {Divider, Text, TicketCard} from '../components';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {FlashList} from '@shopify/flash-list';
import {tickets} from '../mocks';

const eventTabs = [
  {label: 'upcoming', title: 'Upcoming'},
  {label: 'past', title: 'Past Events'},
];

export const TicketScreen = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const filteredTickets = useMemo(() => {
    return tickets.filter(
      ticket => ticket.status === eventTabs[selectedTabIndex].label,
    );
  }, [selectedTabIndex]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent />
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

const HeaderComponent = () => {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <View style={styles.textWrapper}>
          <Text textStyle="subTitle">Your</Text>
          <Text textStyle="title">Tickets's</Text>
        </View>
        <TouchableOpacity>
          <IonIcon
            name="notifications-outline"
            size={24}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface TabProps {
  selectedTabIndex: number;
  handleSelectedTab: (index: number) => void;
}
export const Tabs = ({selectedTabIndex, handleSelectedTab}: TabProps) => {
  return (
    <View style={styles.tabs}>
      {eventTabs.map((tab, index) => {
        const isActive = index === selectedTabIndex;
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              isActive && {borderBottomColor: theme.colors.white},
            ]}
            onPress={() => handleSelectedTab(index)}>
            <Text
              textStyle="title"
              style={isActive ? styles.activeTab : styles.inactiveTab}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        );
      })}
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
  textWrapper: {},
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.darkGrey,
    width: '50%',
  },
  activeTab: {
    color: theme.colors.white,
    textAlign: 'center',
  },
  inactiveTab: {
    color: theme.colors.grey,
    textAlign: 'center',
  },
  ticketsSection: {
    marginTop: 24,
  },
});
