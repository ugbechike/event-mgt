// Task:
// Create a simple React Native component named ToggleVisibility that contains a button and a text element. The text element should initially be hidden. When the user presses the button, the text should toggle between being visible and hidden.
// Requirements:
// Initial State: The text is hidden.
// Button Press: When the button is pressed, the text's visibility toggles.
// Text Content: The text can be a simple static string, e.g., "Hello, world!".
// Use Functional Component: Implement this as a functional component using React Native.

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const TicketScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ToggleVisibility />
    </SafeAreaView>
  );
};

const ToggleVisibility = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  return (
    <View style={styles.toggleVisibilityContainer}>
      {visibility && <Text style={styles.visibleText}>Hello world!!</Text>}
      <TouchableOpacity
        onPress={() => setVisibility(!visibility)}
        style={styles.button}>
        <Text>ToggleVisibility</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleVisibilityContainer: {},
  button: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  visibleText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
