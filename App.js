/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StackNavigator, TabNavigator
} from 'react-navigation'
import MainScreen from './Views/Main'
import ProfileScreen from './Views/Profile'

// const MainApp = StackNavigator({
//   Main: {screen: MainScreen},
//   Profile: {screen: ProfileScreen}
// })
const MainApp = TabNavigator({
    Main: {screen: MainScreen},
    Profiel: {screen: ProfileScreen}
},{
    animationEnabled: true
})

export default class App extends React.Component {
  render() {
    return <MainApp />
  }
}