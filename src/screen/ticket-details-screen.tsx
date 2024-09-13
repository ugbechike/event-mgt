import {StyleSheet, View} from 'react-native';
import React from 'react';
import {theme} from '../theme';
import {useRoute} from '@react-navigation/native';
import {TicketScreenNavigationProps} from '../navigation/type';
import { TicketDetailsCard} from '../components';

type TicketDetailsScreenProps = {};

export const TicketDetailsScreen = (props: TicketDetailsScreenProps) => {
  const route = useRoute<TicketScreenNavigationProps['route']>();
  const {id} = route.params as unknown as {id: string};

  return (
    <View style={styles.container}>
      {/* <Text textStyle="title">TicketDetailsScreen {id}</Text> */}
      <TicketDetailsCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.colors.background,
    padding: 24,
  },
});
