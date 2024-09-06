import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {eventsData as data} from '../mocks/events-data';
import {Card, Divider, EventDetails, Text} from '../components';
import {useSharedValue} from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';

export const ExploreScreen = () => {
  const [newData, setNewData] = useState([...data, ...data]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const animatedValue = useSharedValue(0);

  const MAX = 3;
  return (
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
        <ScrollView style={{width: '100%'}}>
          <EventDetails detail={newData[currentIndex]} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
    alignItems: 'center',
  },
});
