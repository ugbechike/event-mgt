import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../theme';
import {
  Avatar,
  Divider,
  EventCard,
  EventHorizontalCard,
  Text,
  TicketCard,
} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlashList} from '@shopify/flash-list';
import {eventsData, tickets} from '../mocks';

export const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.avatarWrapper}>
          <Avatar userInitials="JU" />
          <View style={styles.textWrapper}>
            <Text textStyle="title">Hi, John Ugbe</Text>
            <Text textStyle="subTitle">Find your favorite event's</Text>
          </View>
        </View>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.ticketsSection}>
            <Text textStyle="title">Welcome to event planner</Text>
            <Divider />
            <FlashList
              data={tickets}
              renderItem={({item}) => <TicketCard {...item} />}
              keyExtractor={item => item.id}
              estimatedItemSize={100}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <Divider size={14} horizontal />}
            />
          </View>

          <View style={styles.exploreSections}>
            <View style={styles.sectionHeader}>
              <Text textStyle="title">Explore events</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
                <Text textStyle="info">View all</Text>
              </TouchableOpacity>
            </View>
            <Divider />
            <FlashList
              data={eventsData}
              renderItem={({item}) => <EventCard {...item} size="small" />}
              keyExtractor={item => item.id}
              estimatedItemSize={100}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <Divider size={14} horizontal />}
            />
          </View>

          <View style={styles.featuredSections}>
            <View style={styles.sectionHeader}>
              <Text textStyle="title">More events</Text>
              <Text textStyle="info">View all</Text>
            </View>
            <Divider />
            <FlashList
              data={eventsData}
              renderItem={({item}) => <EventHorizontalCard {...item} />}
              keyExtractor={item => item.id}
              estimatedItemSize={100}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <Divider size={4} />}
            />
          </View>
        </ScrollView>
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
    marginBottom: 24,
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 16,
  },
  ticketsSection: {
    marginTop: 24,
  },
  exploreSections: {
    marginTop: 24,
  },

  featuredSections: {
    marginTop: 24,
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separatorH: {marginRight: 16},
});
