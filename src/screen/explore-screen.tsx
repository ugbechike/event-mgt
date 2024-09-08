import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {eventsData as data, EventData} from '../mocks/events-data';
import {
  BottomSheetCard,
  Card,
  Divider,
  EventDetails,
  Text,
} from '../components';
import {useSharedValue} from 'react-native-reanimated';
import BottomSheet from '@gorhom/bottom-sheet';
import {TicketsSelectScreen} from './tickets-select-screen';

export const ExploreScreen = () => {
  const [newData, setNewData] = useState([...data, ...data]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedData, setSelectedData] = useState<EventData>();
  const animatedValue = useSharedValue(0);
  const sheetRef = useRef<BottomSheet>(null);

  const handleGetTicket = (d: EventData) => {
    sheetRef.current?.expand();
    console.log('Get ticket for event with id: ', d);
    // TODO: CALL GET TICKET API WITH ID
    setSelectedData(d);
  };

  const MAX = 3;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.cardContainer}>
          {newData.map((item, index) => {
            if (index > currentIndex + MAX || index < currentIndex) {
              return null;
            }
            return (
              <Card
                key={index + item.id}
                item={item}
                index={index}
                dataLength={newData.length}
                maxVisibleItem={MAX}
                currentIndex={currentIndex}
                animatedValue={animatedValue}
                setCurrentIndex={setCurrentIndex}
                setNewData={setNewData}
                newData={newData}
              />
            );
          })}
        </View>
        <Divider />
        <Text textStyle="title" style={styles.text}>
          Event details
        </Text>
        <Divider />
        <View style={styles.detailsContainer}>
          <EventDetails
            detail={newData[currentIndex]}
            handleGetTicket={handleGetTicket}
          />
        </View>
        <BottomSheetCard ref={sheetRef}>
          <TicketsSelectScreen {...selectedData!} />
        </BottomSheetCard>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 3 / 2,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
