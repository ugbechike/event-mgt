import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { theme } from "../theme";
import { Text } from "./text";
import IonIcon from 'react-native-vector-icons/Ionicons';

export const TicketsHeader = () => {
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

  const styles = StyleSheet.create({
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  });
