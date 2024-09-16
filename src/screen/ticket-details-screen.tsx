import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../theme';
import {useRoute} from '@react-navigation/native';
import {TicketScreenNavigationProps} from '../navigation/type';
import {Text, TicketDetailsCard} from '../components';
import {ScrollView} from 'react-native-gesture-handler';

export const TicketDetailsScreen = () => {
  const route = useRoute<TicketScreenNavigationProps['route']>();
  const {id} = route.params as unknown as {id: string};

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TicketDetailsCard />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.downloadDtn}>
          <Text style={styles.downloadText}>Download Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.shareText}>Share QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.colors.background,
    // padding: 24,
    paddingHorizontal: 20,
  },
  footer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  downloadDtn: {
    padding: 14,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: theme.colors.lightGreen,
    width: '48%',
  },
  shareBtn: {
    padding: 14,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    width: '48%',
  },
  downloadText: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },

  shareText: {
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
