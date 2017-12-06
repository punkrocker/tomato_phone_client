/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  TabNavigator
} from 'react-navigation'
import ClockMain from './Views/Clock/clockMain'
import TodoMain from './Views/TodoList/todoMain'
import TodayMain from './Views/Today/todayMain'
import MineMain from './Views/Mine/mineMain'

const MainApp = TabNavigator({
    Clock: {screen: ClockMain},
    Todo: {screen: TodoMain},
    Today: {screen: TodayMain},
    Mine: {screen: MineMain},
},{
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
})

export default class App extends React.Component {
  render() {
    return <MainApp />
  }
}