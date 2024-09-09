/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';
import {NavigationWrapper} from './src/navigation';
import {TabNavigator} from './src/navigation/tab-navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationWrapper>
        <TabNavigator />
      </NavigationWrapper>
    </GestureHandlerRootView>
  );
}

export default App;
