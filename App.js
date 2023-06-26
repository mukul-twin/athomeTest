/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {AppStack} from './src/navigation/appStack';
import {NavigationContainer} from '@react-navigation/native';
import {COLOR_WHITE} from './src/utils/helper/colors';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;