import React, { Component } from 'react';
import {
    Button
} from 'react-native';
import {
    StackNavigator
  } from 'react-navigation';
  
export default class Main extends React.Component {
    static navigationOptions = {
        title: "Main"
    }

    render() {
        const {navigate} = this.props.navigation
        return (
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigate('Profile', { name: 'Jane' })
            }
          />
        );
    }
}