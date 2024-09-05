import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme';
import RTNBiometrics from 'rtn-biometric/js/NativeBiometrics';
import {Text} from '../components';

export const ExploreScreen = () => {
  const [biometrics, setBiometrics] = useState<string>();
  return (
    <View style={styles.container}>
      <Text>ExploreScreen</Text>
      <TouchableOpacity
        onPress={async () => {
          try {
            const data = await RTNBiometrics?.getAvailableBiometrics();
            console.log('===========Get ava==============');
            console.log(data);
            console.log('====================================');
            setBiometrics(data ?? '');
          } catch (error) {
            console.log(error);
          }
        }}>
        <Text textStyle="title">get biometric</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          try {
            const isAuth = await RTNBiometrics?.authenticate();
            console.log('===========Auth==========');
            console.log(isAuth);
            console.log('====================================');
          } catch (error) {
            console.log(error);
          }
        }}>
        <Text textStyle="title">Authenticate</Text>
      </TouchableOpacity>

      <Text textStyle="title">Biometrics available are: {biometrics}</Text>
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
});
