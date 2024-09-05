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

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationWrapper>
      <TabNavigator />
    </NavigationWrapper>
  );
}

export default App;
