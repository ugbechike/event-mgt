import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../theme';
import {Text} from '../components';
import QRCode from 'react-native-qrcode-svg';


export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text textStyle="title">ProfileScreen</Text>
      <QRCode
      value="123356"
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qr: {
    padding: 15,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
