/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StackNavigator
} from 'react-navigation'
import MainScreen from './Views/Main'
import ProfileScreen from './Views/Profile'

const MainApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen}
})

export default class App extends React.Component {
  render() {
    return <MainApp />
  }
}