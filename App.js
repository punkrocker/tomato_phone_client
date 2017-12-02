/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import MainScreen from './Views/Main'
import ProfileScreen from './Views/Profile'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MainApp = StackNavigator({
  Main: {screen: MainScreen},
  // Profile: {screen: ProfileScreen}
})

export default class App extends React.Component {
  render() {
    return <MainApp />
  }
}