import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { theme } from "../theme";
import { Text } from "./text";
import { eventTabs } from "../screen/ticket-screen";

interface TabProps {
    selectedTabIndex: number;
    handleSelectedTab: (index: number) => void;
  }
  export const Tabs = ({selectedTabIndex, handleSelectedTab}: TabProps) => (
      <View style={styles.tabs}>
          {eventTabs.map((tab, index) => {
              const isActive = index === selectedTabIndex;
              return (
                  <TouchableOpacity
                      key={index}
                      style={[
                          styles.tab,
                          isActive && { borderBottomColor: theme.colors.white },
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

  const styles = StyleSheet.create({
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
  });
