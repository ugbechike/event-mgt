import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme';
import {Text} from '../components';
import QRCode from 'react-native-qrcode-svg';
import {UserAuth} from '../features/hooks/use-auth';
import auth from '@react-native-firebase/auth';

export const ProfileScreen = () => {
  const {setTokenAction, setUserAction} = UserAuth();
  const handleLogout = useCallback(async () => {
    try {
      await auth().signOut();
      setTokenAction('');
      setUserAction(null);
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  }, [setTokenAction, setUserAction]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Text textStyle="title">Logout</Text>
      </TouchableOpacity>
      <Text textStyle="title">ProfileScreen</Text>
      <QRCode value="123356" />
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
