import React, { Component } from 'react';
import {
    StackNavigator
  } from 'react-navigation';
  
class Main extends React.Component {
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